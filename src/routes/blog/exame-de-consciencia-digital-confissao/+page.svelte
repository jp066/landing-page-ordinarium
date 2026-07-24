<script lang="ts">
	import { ArrowLeft, Calendar, User, Clock, Download, ShieldCheck, Lock, EyeOff } from '@lucide/svelte';

	export const prerender = true;

	const title = 'Exame de Consciência Digital: Como preparar sua confissão com privacidade';
	const description = 'Entenda como utilizar ferramentas digitais privadas para examinar seus pecados, manter um diário espiritual e se confessar com mais sinceridade.';
	const date = '24 de Julho de 2026';
	const author = 'João Pedro Matos';
	const readTime = '7 min de leitura';
	const url = 'https://ordinarium.com.br/blog/exame-de-consciencia-digital-confissao';
</script>

<svelte:head>
	<title>{title} — Ordinarium</title>
	<meta name="description" content={description} />
	<meta name="robots" content="index, follow" />
	<link rel="canonical" href={url} />

	<!-- Open Graph -->
	<meta property="og:type" content="article" />
	<meta property="og:url" content={url} />
	<meta property="og:title" content={`${title} — Ordinarium`} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content="https://images.unsplash.com/photo-1544764200-d834fd210a23?q=80&w=1200&auto=format&fit=crop" />
	<meta property="og:locale" content="pt_BR" />
	<meta property="og:site_name" content="Ordinarium" />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content={url} />
	<meta property="twitter:title" content={`${title} — Ordinarium`} />
	<meta property="twitter:description" content={description} />

	<!-- Structured Data (JSON-LD) -->
	{@html `<script type="application/ld+json">` + JSON.stringify({
		"@context": "https://schema.org",
		"@graph": [
			{
				"@type": "WebPage",
				"@id": "https://ordinarium.com.br/blog/exame-de-consciencia-digital-confissao/#webpage",
				"url": url,
				"name": title,
				"description": description,
				"inLanguage": "pt-BR"
			},
			{
				"@type": "BreadcrumbList",
				"@id": "https://ordinarium.com.br/blog/exame-de-consciencia-digital-confissao/#breadcrumb",
				"isPartOf": {
					"@id": "https://ordinarium.com.br/blog/exame-de-consciencia-digital-confissao/#webpage"
				},
				"itemListElement": [
					{
						"@type": "ListItem",
						"position": 1,
						"name": "Início",
						"item": "https://ordinarium.com.br"
					},
					{
						"@type": "ListItem",
						"position": 2,
						"name": "Blog",
						"item": "https://ordinarium.com.br/blog"
					},
					{
						"@type": "ListItem",
						"position": 3,
						"name": "Exame de Consciência Digital",
						"item": url
					}
				]
			},
			{
				"@type": "TechArticle",
				"@id": "https://ordinarium.com.br/blog/exame-de-consciencia-digital-confissao/#article",
				"isPartOf": {
					"@id": "https://ordinarium.com.br/blog/exame-de-consciencia-digital-confissao/#webpage"
				},
				"headline": title,
				"description": description,
				"inLanguage": "pt-BR",
				"mainEntityOfPage": url,
				"datePublished": "2026-07-24T00:00:00Z",
				"author": {
					"@type": "Person",
					"name": author
				},
				"publisher": {
					"@type": "Organization",
					"name": "Ordinarium",
					"logo": {
						"@type": "ImageObject",
						"url": "https://ordinarium.com.br/assets/favicon.png"
					}
				}
			}
		]
	}) + `</script>`}
</svelte:head>

<main id="main-content" class="min-h-screen bg-bg-dark text-text-light pb-24">
	<!-- Voltar -->
	<div class="max-w-4xl mx-auto px-6 pt-32 pb-8">
		<a
			href="/blog"
			class="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-primary transition-fast"
		>
			<ArrowLeft class="w-4 h-4" />
			Voltar para o blog
		</a>
	</div>

	<article class="max-w-4xl mx-auto px-6">
		<!-- Header -->
		<header class="mb-12">
			<span class="text-xs font-semibold tracking-widest uppercase text-primary mb-3 inline-block">
				Vida Espiritual
			</span>
			<h1 class="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold leading-tight text-text-light mb-6">
				{title}
			</h1>

			<!-- Meta -->
			<div class="flex flex-wrap items-center gap-6 text-sm text-text-secondary font-sans border-b border-white/10 pb-6">
				<span class="flex items-center gap-1.5">
					<User class="w-4 h-4" />
					Por {author}
				</span>
				<span class="flex items-center gap-1.5">
					<Calendar class="w-4 h-4" />
					{date}
				</span>
				<span class="flex items-center gap-1.5">
					<Clock class="w-4 h-4" />
					{readTime}
				</span>
			</div>
		</header>

		<!-- Banner Image -->
		<div class="w-full h-64 md:h-[400px] rounded-2xl overflow-hidden mb-12">
			<img
				src="https://images.unsplash.com/photo-1544764200-d834fd210a23?q=80&w=1200&auto=format&fit=crop"
				alt="Bíblia e terço ao lado de um notebook em iluminação suave"
				class="w-full h-full object-cover"
			/>
		</div>

		<!-- Body Content -->
		<div class="prose prose-invert max-w-none font-sans leading-relaxed text-text-secondary text-base md:text-lg flex flex-col gap-6">
			<p>
				A confissão sacramental é um dos momentos mais libertadores da vida de um católico. É ali que nos encontramos face a face com a misericórdia infinita de Deus, lavando nossa alma e recebendo a graça necessária para lutar contra nossas fraquezas.
			</p>
			
			<p>
				No entanto, antes de nos ajoelharmos diante do sacerdote, há uma etapa indispensável: o <strong>exame de consciência</strong>. Lembrar de todas as nossas faltas, omissões e fraquezas desde a última confissão exige atenção e sinceridade. É aqui que os dispositivos móveis podem atuar como excelentes facilitadores, desde que respeitemos um princípio inegociável: a <strong>privacidade absoluta</strong>.
			</p>

			<h2 class="text-2xl md:text-3xl font-serif font-semibold text-text-light mt-8 mb-2">
				Por que usar o celular para preparar sua confissão?
			</h2>
			<p>
				Escrever ou pontuar pecados no papel tem o risco de perda ou de exposição indesejada. Fazer o exame apenas mentalmente, por sua vez, pode nos levar a esquecer pecados graves no momento da confissão devido ao nervosismo.
			</p>
			<p>
				A preparação digital resolve esses pontos ao estruturar o exame de forma lógica, mas requer cuidados estritos de segurança da informação:
			</p>

			<div class="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
				<div class="p-6 bg-[#0E0E10] border border-border-gold/15 rounded-2xl">
					<ShieldCheck class="w-8 h-8 text-primary mb-3" />
					<h4 class="font-serif font-bold text-text-light mb-2 text-base">Criptografia Local</h4>
					<p class="text-xs text-text-secondary leading-relaxed">
						Seus exames e anotações pessoais devem ser salvos estritamente no armazenamento local do seu próprio aparelho, nunca em nuvens de terceiros.
					</p>
				</div>
				<div class="p-6 bg-[#0E0E10] border border-border-gold/15 rounded-2xl">
					<Lock class="w-8 h-8 text-primary mb-3" />
					<h4 class="font-serif font-bold text-text-light mb-2 text-base">Sem Treino de IA</h4>
					<p class="text-xs text-text-secondary leading-relaxed">
						Plataformas éticas católicas nunca utilizam suas anotações ou conteúdos espirituais para treinar modelos de inteligência artificial de terceiros.
					</p>
				</div>
				<div class="p-6 bg-[#0E0E10] border border-border-gold/15 rounded-2xl">
					<EyeOff class="w-8 h-8 text-primary mb-3" />
					<h4 class="font-serif font-bold text-text-light mb-2 text-base">Segurança de Acesso</h4>
					<p class="text-xs text-text-secondary leading-relaxed">
						O aplicativo deve contar com travas de segurança (biometria ou senha numérica) para impedir que outras pessoas tenham acesso aos seus exames íntimos.
					</p>
				</div>
			</div>

			<h2 class="text-2xl md:text-3xl font-serif font-semibold text-text-light mt-8 mb-2">
				Como Ordinarium protege sua intimidade espiritual?
			</h2>
			<p>
				No <strong>Ordinarium</strong>, a privacidade é um pilar de arquitetura, não um detalhe. Desenvolvemos o recurso de exame de consciência e diário devocional baseados nos seguintes critérios de confiança:
			</p>
			
			<ul class="list-disc pl-6 flex flex-col gap-2">
				<li><strong>Zero Sincronização de Pecados:</strong> Seus dados de consciência não são transmitidos para nossos servidores. O banco de dados do seu exame fica confinado na memória criptografada do seu dispositivo.</li>
				<li><strong>Histórico Opcional e Seguro:</strong> Você pode optar por registrar tendências e históricos de lutas para apresentar ao seu diretor espiritual, sob proteção biométrica (Face ID / Touch ID).</li>
				<li><strong>Catequese guiada:</strong> O aplicativo guia você passo a passo pelos mandamentos da Igreja e da lei divina, apresentando perguntas claras para iluminar seus pontos cegos espirituais.</li>
			</ul>

			<div class="my-8 p-6 bg-[#0E0E10] border border-border-gold/30 rounded-2xl">
				<h3 class="text-lg font-serif font-bold text-primary mb-2">A Confissão deve ser sempre presencial</h3>
				<p class="text-sm leading-relaxed text-text-secondary">
					Lembramos que, segundo a doutrina da Igreja Católica, não existe confissão via telefone, aplicativo ou internet. A absolvição requer a presença física do penitente diante do sacerdote. O Ordinarium funciona estritamente como um <strong>auxiliar de preparação</strong> para que você chegue ao confessionário com a mente e o coração devidamente ordenados.
				</p>
			</div>

			<!-- CTA para Baixar o App (CRO no Blog) -->
			<div class="mt-12 p-8 bg-gradient-to-br from-[#1C1409] to-[#0B0B0C] border border-primary/30 rounded-3xl text-center flex flex-col items-center gap-4">
				<div class="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
					<Download class="w-6 h-6" />
				</div>
				<h3 class="text-xl font-serif font-bold text-text-light">
					Faça sua preparação para confissão com segurança
				</h3>
				<p class="text-sm text-text-secondary max-w-md">
					Baixe o <strong>Ordinarium</strong> para ter acesso a um exame de consciência guiado, interativo e 100% privado no seu celular.
				</p>
				<button
					onclick={() =>
						document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
					class="mt-2 px-6 py-3 bg-primary text-bg-dark rounded-full font-semibold text-xs hover:bg-primary-hover transition-fast cursor-pointer"
				>
					Entrar na lista de espera
				</button>
			</div>
		</div>
	</article>
</main>
