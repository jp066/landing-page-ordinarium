<script lang="ts">
	import { ArrowLeft, Calendar, User, Clock, Download, Smartphone, Star, BookOpen, MessageSquare } from '@lucide/svelte';

	export const prerender = true;

	const title = 'Tecnologia e Fé: Como usar o celular para organizar sua vida de oração';
	const description = 'Descubra como transformar o smartphone de distração em um aliado espiritual usando alarmes de oração, liturgia diária digital e assistentes católicos inteligentes.';
	const date = '24 de Julho de 2026';
	const author = 'João Pedro Matos';
	const readTime = '6 min de leitura';
	const url = 'https://ordinarium.com.br/blog/tecnologia-e-fe-vida-de-oracao';
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
	<meta property="og:image" content="https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?q=80&w=1200&auto=format&fit=crop" />
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
				"@id": "https://ordinarium.com.br/blog/tecnologia-e-fe-vida-de-oracao/#webpage",
				"url": url,
				"name": title,
				"description": description,
				"inLanguage": "pt-BR"
			},
			{
				"@type": "BreadcrumbList",
				"@id": "https://ordinarium.com.br/blog/tecnologia-e-fe-vida-de-oracao/#breadcrumb",
				"isPartOf": {
					"@id": "https://ordinarium.com.br/blog/tecnologia-e-fe-vida-de-oracao/#webpage"
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
						"name": "Tecnologia e Fé",
						"item": url
					}
				]
			},
			{
				"@type": "TechArticle",
				"@id": "https://ordinarium.com.br/blog/tecnologia-e-fe-vida-de-oracao/#article",
				"isPartOf": {
					"@id": "https://ordinarium.com.br/blog/tecnologia-e-fe-vida-de-oracao/#webpage"
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
				Tecnologia & Fé
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
				src="https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?q=80&w=1200&auto=format&fit=crop"
				alt="Smartphone com interface limpa ao lado de um livro e café"
				class="w-full h-full object-cover"
			/>
		</div>

		<!-- Body Content -->
		<div class="prose prose-invert max-w-none font-sans leading-relaxed text-text-secondary text-base md:text-lg flex flex-col gap-6">
			<p>
				Vivemos em uma época em que o smartphone é frequentemente rotulado como a maior fonte de distração da vida moderna. Notificações incessantes, redes sociais e a pressa do dia a dia tendem a fragmentar nossa atenção, tornando o recolhimento espiritual e a vida de oração verdadeiros desafios.
			</p>
			
			<p>
				No entanto, a tecnologia em si é neutra. Quando direcionada com propósito, ela pode ser convertida de obstáculo em uma poderosa ferramenta de auxílio espiritual. O Papa Francisco já enfatizou a importância de colocar as redes e a tecnologia digital a serviço do encontro e da solidariedade, e isso se estende diretamente à nossa devoção pessoal.
			</p>

			<h2 class="text-2xl md:text-3xl font-serif font-semibold text-text-light mt-8 mb-2">
				Como estruturar sua rotina espiritual no digital?
			</h2>
			<p>
				Para os católicos que desejam santificar o cotidiano e manter uma rotina de orações ativa no meio da rotina profissional e familiar, as ferramentas digitais oferecem três grandes vantagens:
			</p>

			<div class="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
				<div class="p-6 bg-[#0E0E10] border border-border-gold/15 rounded-2xl">
					<Smartphone class="w-8 h-8 text-primary mb-3" />
					<h4 class="font-serif font-bold text-text-light mb-2 text-base">Portabilidade</h4>
					<p class="text-xs text-text-secondary leading-relaxed">
						Tenha acesso à Liturgia das Horas, à Bíblia Sagrada e a centenas de orações em qualquer lugar, sem precisar carregar livros pesados.
					</p>
				</div>
				<div class="p-6 bg-[#0E0E10] border border-border-gold/15 rounded-2xl">
					<BookOpen class="w-8 h-8 text-primary mb-3" />
					<h4 class="font-serif font-bold text-text-light mb-2 text-base">Constância</h4>
					<p class="text-xs text-text-secondary leading-relaxed">
						Utilize alertas inteligentes de oração e planejamentos litúrgicos para não esquecer os momentos de pausa espiritual durante o dia.
					</p>
				</div>
				<div class="p-6 bg-[#0E0E10] border border-border-gold/15 rounded-2xl">
					<MessageSquare class="w-8 h-8 text-primary mb-3" />
					<h4 class="font-serif font-bold text-text-light mb-2 text-base">Formação Rápida</h4>
					<p class="text-xs text-text-secondary leading-relaxed">
						Tire dúvidas teológicas instantâneas sobre preceitos ou a vida dos santos com assistentes configurados sob a sã doutrina católica.
					</p>
				</div>
			</div>

			<h2 class="text-2xl md:text-3xl font-serif font-semibold text-text-light mt-8 mb-2">
				A proposta do Ordinarium
			</h2>
			<p>
				O <strong>Ordinarium</strong> nasceu exatamente dessa necessidade de integrar a fé católica à rotina moderna de maneira harmoniosa, sem ruídos e com foco absoluto na oração. Ao contrário de aplicativos que dispersam o usuário com excesso de estímulos, o Ordinarium centraliza o que é essencial para o cotidiano católico:
			</p>
			
			<ul class="list-disc pl-6 flex flex-col gap-2">
				<li><strong>Liturgia Diária e Leituras:</strong> Acompanhe as leituras da missa de cada dia e o santo padroeiro do dia em uma interface minimalista que favorece a leitura orante (Lectio Divina).</li>
				<li><strong>Diretório Inteligente de Paróquias:</strong> Encontre rapidamente horários de missas e de confissão perto de você, facilitando a recepção frequente dos sacramentos.</li>
				<li><strong>O assistente Leo:</strong> Uma inteligência artificial desenhada para auxiliar você a encontrar orações específicas, entender os mistérios da liturgia e esclarecer conceitos fundamentais da fé com base no Catecismo.</li>
			</ul>

			<div class="my-8 p-6 bg-[#0E0E10] border border-border-gold/30 rounded-2xl">
				<h3 class="text-lg font-serif font-bold text-primary mb-2">Foco no Silêncio e na Devoção</h3>
				<p class="text-sm leading-relaxed text-text-secondary">
					A tecnologia serve para facilitar o acesso, mas o momento da oração deve continuar sendo de silêncio e interiorização. Por isso, a interface do Ordinarium adota paletas escuras e tipografia serifada clássica, emulando a solenidade de um livro litúrgico físico, reduzindo o cansaço visual e as distrações luminosas na capela ou no quarto.
				</p>
			</div>

			<!-- CTA para Baixar o App (CRO no Blog) -->
			<div class="mt-12 p-8 bg-gradient-to-br from-[#1C1409] to-[#0B0B0C] border border-primary/30 rounded-3xl text-center flex flex-col items-center gap-4">
				<div class="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
					<Download class="w-6 h-6" />
				</div>
				<h3 class="text-xl font-serif font-bold text-text-light">
					Experimente uma rotina espiritual mais organizada
				</h3>
				<p class="text-sm text-text-secondary max-w-md">
					Junte-se aos católicos que usam a tecnologia a serviço do seu crescimento espiritual. Baixe o aplicativo e integre a oração e a liturgia ao seu dia a dia.
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
