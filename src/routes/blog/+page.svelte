<script lang="ts">
	import { ArrowLeft, Calendar, User, Clock, ArrowRight } from '@lucide/svelte';

	export const prerender = true;

	const articles = [
		{
			slug: 'tecnologia-e-fe-vida-de-oracao',
			title: 'Tecnologia e Fé: Como usar o celular para organizar sua vida de oração',
			description: 'Descubra como transformar o smartphone de distração em um aliado espiritual usando alarmes de oração, liturgia diária digital e assistentes católicos inteligentes.',
			date: '24 de Julho de 2026',
			author: 'João Pedro Matos',
			readTime: '6 min de leitura',
			category: 'Tecnologia & Fé',
			image: 'https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?q=80&w=800&auto=format&fit=crop'
		},
		{
			slug: 'exame-de-consciencia-digital-confissao',
			title: 'Exame de Consciência Digital: Como preparar sua confissão com privacidade',
			description: 'Entenda como utilizar ferramentas digitais privadas para examinar seus pecados, manter um diário espiritual e se confessar com mais sinceridade.',
			date: '24 de Julho de 2026',
			author: 'João Pedro Matos',
			readTime: '7 min de leitura',
			category: 'Vida Espiritual',
			image: 'https://images.unsplash.com/photo-1544764200-d834fd210a23?q=80&w=800&auto=format&fit=crop'
		}
	];
</script>

<svelte:head>
	<title>Blog e Formação Espiritual — Ordinarium</title>
	<meta
		name="description"
		content="Aprofunde sua fé católica com nossos artigos, guias de oração, exames de consciência para confissão e explicações litúrgicas."
	/>
	<meta name="robots" content="index, follow" />
	<link rel="canonical" href="https://ordinarium.com.br/blog" />

	<!-- Open Graph -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://ordinarium.com.br/blog" />
	<meta property="og:title" content="Blog e Formação Espiritual — Ordinarium" />
	<meta
		property="og:description"
		content="Aprofunde sua fé católica com nossos artigos, guias de oração, exames de consciência para confissão e explicações litúrgicas."
	/>
	<meta property="og:image" content="https://ordinarium.com.br/assets/image.png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:locale" content="pt_BR" />
	<meta property="og:site_name" content="Ordinarium" />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://ordinarium.com.br/blog" />
	<meta property="twitter:title" content="Blog e Formação Espiritual — Ordinarium" />
	<meta
		property="twitter:description"
		content="Aprofunde sua fé católica com nossos artigos, guias de oração, exames de consciência para confissão e explicações litúrgicas."
	/>

	<!-- Structured Data (JSON-LD) -->
	{@html `<script type="application/ld+json">` + JSON.stringify({
		"@context": "https://schema.org",
		"@graph": [
			{
				"@type": "WebPage",
				"@id": "https://ordinarium.com.br/blog/#webpage",
				"url": "https://ordinarium.com.br/blog",
				"name": "Blog e Formação Espiritual — Ordinarium",
				"description": "Aprofunde sua fé católica com nossos artigos, guias de oração, exames de consciência para confissão e explicações litúrgicas.",
				"inLanguage": "pt-BR"
			},
			{
				"@type": "BreadcrumbList",
				"@id": "https://ordinarium.com.br/blog/#breadcrumb",
				"isPartOf": {
					"@id": "https://ordinarium.com.br/blog/#webpage"
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
					}
				]
			}
		]
	}) + `</script>`}
</svelte:head>

<main id="main-content" class="min-h-screen bg-bg-dark text-text-light">
	<!-- Voltar -->
	<div class="max-w-6xl mx-auto px-6 md:px-12 pt-32 pb-6">
		<a
			href="/"
			class="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-primary transition-fast"
		>
			<ArrowLeft class="w-4 h-4" />
			Voltar para o início
		</a>
	</div>

	<!-- Header -->
	<section class="max-w-6xl mx-auto px-6 md:px-12 pb-16">
		<div class="max-w-3xl">
			<span class="text-xs font-semibold tracking-widest uppercase text-primary mb-3 inline-block">
				Formação & Doutrina
			</span>
			<h1 class="text-4xl md:text-5xl font-serif font-medium leading-tight text-text-light mb-6">
				Blog <span class="text-gradient-gold">Ordinarium</span>
			</h1>
			<p class="text-base text-text-secondary leading-relaxed max-w-2xl font-sans">
				Guias detalhados de oração, catequese, explicações litúrgicas e reflexões para apoiar sua jornada diária com Deus e aprofundar sua vida de oração.
			</p>
		</div>
	</section>

	<!-- Articles Grid -->
	<section class="max-w-6xl mx-auto px-6 md:px-12 pb-32">
		<div class="grid grid-cols-1 md:grid-cols-2 gap-10">
			{#each articles as article}
				<article class="bg-[#0E0E10] border border-border-gold/15 rounded-2xl overflow-hidden flex flex-col group hover:border-border-gold/45 transition-all duration-300">
					<!-- Imagem -->
					<a href="/blog/{article.slug}" class="relative h-56 overflow-hidden block">
						<img
							src={article.image}
							alt={article.title}
							class="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
							loading="lazy"
						/>
						<div class="absolute inset-0 bg-gradient-to-t from-bg-dark/40 to-transparent"></div>
						<span class="absolute top-4 left-4 bg-primary text-bg-dark font-sans text-xs font-semibold px-3 py-1.5 rounded-full">
							{article.category}
						</span>
					</a>

					<!-- Conteúdo -->
					<div class="p-8 flex-1 flex flex-col justify-between">
						<div>
							<!-- Meta -->
							<div class="flex items-center gap-4 text-xs text-text-secondary mb-4 font-sans">
								<span class="flex items-center gap-1">
									<Calendar class="w-3.5 h-3.5" />
									{article.date}
								</span>
								<span class="flex items-center gap-1">
									<Clock class="w-3.5 h-3.5" />
									{article.readTime}
								</span>
							</div>

							<!-- Título -->
							<h2 class="text-xl md:text-2xl font-serif font-semibold text-text-light group-hover:text-primary transition-colors duration-200 mb-3 leading-snug">
								<a href="/blog/{article.slug}">{article.title}</a>
							</h2>

							<!-- Descrição -->
							<p class="text-sm text-text-secondary/85 leading-relaxed font-sans mb-6">
								{article.description}
							</p>
						</div>

						<a
							href="/blog/{article.slug}"
							class="inline-flex items-center gap-2 text-sm text-primary hover:text-primary-hover font-semibold transition-fast"
						>
							Ler artigo completo
							<ArrowRight class="w-4 h-4 group-hover:translate-x-1 transition-transform" />
						</a>
					</div>
				</article>
			{/each}
		</div>
	</section>
</main>
