import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { supabase } from '$lib/supabase';
import { API_KEY_RESEND } from '$env/static/private';

export const prerender = false;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const POST: RequestHandler = async ({ request }) => {
	const body = await request.json().catch(() => null);

	if (!body?.email || typeof body.email !== 'string') {
		return json({ error: 'Email é obrigatório.' }, { status: 400 });
	}

	const email = body.email.trim().toLowerCase();

	if (!EMAIL_REGEX.test(email)) {
		return json({ error: 'Email inválido.' }, { status: 400 });
	}

	const { error: insertError } = await supabase.from('waitlist').insert({ email });

	if (insertError) {
		if (insertError.code === '23505') {
			return json({ error: 'Este email já está na lista de espera.' }, { status: 409 });
		}
		return json({ error: 'Erro ao salvar email.' }, { status: 500 });
	}

	try {
		await fetch('https://api.resend.com/emails', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${API_KEY_RESEND}`
			},
			body: JSON.stringify({
				from: 'Ordinarium <onboarding@resend.dev>',
				to: email,
				subject: 'Você está na lista de espera do Ordinarium!',
				html: `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin:0;padding:0;background-color:#faf8f3;font-family:'DM Sans',-apple-system,BlinkMacSystemFont,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="padding:48px 24px;">
    <tr>
      <td align="center">
        <table width="100%" cellpadding="0" cellspacing="0" style="max-width:520px;">
          <tr>
            <td style="padding-bottom:32px;">
              <h1 style="margin:0;font-size:28px;font-weight:600;color:#202020;letter-spacing:-0.5px;">
                Obrigado por se inscrever!
              </h1>
            </td>
          </tr>
          <tr>
            <td style="padding-bottom:24px;">
              <p style="margin:0;font-size:16px;line-height:1.6;color:#555;">
                Você está na lista de espera do <strong>Ordinarium</strong>. Assim que o app estiver disponível para testes, você receberá um email com o link para download.
              </p>
            </td>
          </tr>
          <tr>
            <td style="padding-bottom:24px;">
              <p style="margin:0;font-size:16px;line-height:1.6;color:#555;">
                Enquanto isso, você pode acompanhar as novidades seguindo nosso projeto no GitHub.
              </p>
            </td>
          </tr>
          <tr>
            <td style="padding-top:16px;border-top:1px solid #e5e5e5;">
              <p style="margin:0;font-size:13px;color:#999;">
                Ordinarium — Liturgia diária, orações, paróquias e muito mais, em um só lugar.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`
			})
		});
	} catch {
		// Email sending failed, but the waitlist entry was saved
	}

	return json({ success: true }, { status: 200 });
};
