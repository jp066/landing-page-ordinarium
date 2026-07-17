import { createClient } from "npm:@supabase/supabase-js@^2";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
const SUPABASE_URL = Deno.env.get("SUPABASE_URL");
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

const BATCH_SIZE = 50;
const DELAY_MS = 100;

function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function launchEmailHTML(name?: string): string {
  const greeting = name ? `Olá ${name},` : "Olá,";
  return `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin:0;padding:0;background-color:#0b0b0c;font-family:'DM Sans',-apple-system,BlinkMacSystemFont,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="padding:40px 20px;">
    <tr>
      <td align="center">
        <table width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;">
          <!-- Header -->
          <tr>
            <td style="padding-bottom:40px;text-align:center;">
              <h1 style="margin:0;font-size:32px;font-weight:700;color:#ffffff;letter-spacing:-0.5px;">
                ✦ <span style="color:#d4a84f;font-family:serif;">Ordinarium</span>
              </h1>
            </td>
          </tr>

          <!-- Card -->
          <tr>
            <td style="background-color:#131315;border-radius:20px;padding:40px 36px;">
              <p style="margin:0 0 20px;font-size:15px;color:#8b8b8b;line-height:1.6;">
                ${greeting}
              </p>

              <h2 style="margin:0 0 16px;font-size:26px;font-weight:700;color:#ffffff;line-height:1.3;letter-spacing:-0.3px;">
                O Ordinarium está disponível para testes!
              </h2>

              <p style="margin:0 0 28px;font-size:15px;color:#8b8b8b;line-height:1.7;">
                Você está na lista de espera e agora pode experimentar o app antes de todo mundo.
                Liturgia diária, orações, paróquias, exame de consciência e muito mais — tudo em um só lugar.
              </p>

              <!-- CTA Button -->
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center" style="padding-bottom:32px;">
                    <a href="https://ordinarium.com.br" target="_blank" style="display:inline-block;background-color:#d4a84f;color:#0b0b0c;font-size:16px;font-weight:700;text-decoration:none;padding:16px 40px;border-radius:9999px;letter-spacing:0.2px;">
                      Experimentar Agora
                    </a>
                  </td>
                </tr>
              </table>

              <!-- Features -->
              <table width="100%" cellpadding="0" cellspacing="0" style="border-top:1px solid rgba(212,168,79,0.15);padding-top:28px;">
                <tr>
                  <td>
                    <p style="margin:0 0 12px;font-size:13px;color:#555;line-height:1.6;">
                      <span style="color:#d4a84f;">✦</span> Liturgia diária completa
                    </p>
                    <p style="margin:0 0 12px;font-size:13px;color:#555;line-height:1.6;">
                      <span style="color:#d4a84f;">✦</span> Orações e exame de consciência
                    </p>
                    <p style="margin:0 0 12px;font-size:13px;color:#555;line-height:1.6;">
                      <span style="color:#d4a84f;">✦</span> Diretório de paróquias
                    </p>
                    <p style="margin:0;font-size:13px;color:#555;line-height:1.6;">
                      <span style="color:#d4a84f;">✦</span> Bíblia Sagrada com busca
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:28px 0;text-align:center;">
              <p style="margin:0 0 8px;font-size:12px;color:#555;">
                Você recebeu este email porque se inscreveu na lista de espera do Ordinarium.
              </p>
              <p style="margin:0;font-size:12px;color:#555;">
                <a href="https://ordinarium.com.br" style="color:#d4a84f;text-decoration:none;">ordinarium.com.br</a>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

Deno.serve(async (_req: Request) => {
  if (!RESEND_API_KEY || !SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
    return new Response(
      JSON.stringify({ error: "Missing environment variables." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }

  const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

  const { data: waitlist, error: fetchError } = await supabase
    .from("waitlist")
    .select("email");

  if (fetchError) {
    return new Response(
      JSON.stringify({ error: "Failed to fetch waitlist.", details: fetchError.message }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }

  if (!waitlist || waitlist.length === 0) {
    return new Response(
      JSON.stringify({ sent: 0, errors: 0, message: "Waitlist is empty." }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  }

  let sent = 0;
  let errors = 0;
  const errorDetails: string[] = [];

  for (let i = 0; i < waitlist.length; i += BATCH_SIZE) {
    const batch = waitlist.slice(i, i + BATCH_SIZE);

    const results = await Promise.allSettled(
      batch.map(async (entry) => {
        const res = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${RESEND_API_KEY}`,
          },
          body: JSON.stringify({
            from: "Ordinarium <onboarding@resend.dev>",
            to: entry.email,
            subject: "O Ordinarium está disponível para testes!",
            html: launchEmailHTML(),
          }),
        });

        if (!res.ok) {
          const body = await res.text();
          throw new Error(`${entry.email}: ${res.status} ${body}`);
        }

        return entry.email;
      })
    );

    for (const result of results) {
      if (result.status === "fulfilled") {
        sent++;
      } else {
        errors++;
        errorDetails.push(result.reason?.message || "Unknown error");
      }
    }

    if (i + BATCH_SIZE < waitlist.length) {
      await delay(DELAY_MS);
    }
  }

  return new Response(
    JSON.stringify({
      sent,
      errors,
      total: waitlist.length,
      details: errorDetails.length > 0 ? errorDetails : undefined,
    }),
    { status: 200, headers: { "Content-Type": "application/json" } }
  );
});
