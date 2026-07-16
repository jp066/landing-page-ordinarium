<script lang="ts">
	import Navbar from '../components/Navbar.svelte';
	import Hero from '../components/Hero.svelte';
	import ScreensShowcase from '../components/ScreensShowcase.svelte';
	import FeatureShowcase from '../components/FeatureShowcase.svelte';
	import LeoSections from '../components/LeoSections.svelte';
	import PartnershipSection from '../components/PartnershipSection.svelte';
	import FAQSection from '../components/FAQSection.svelte';
	import TestimonialsSection from '../components/TestimonialsSection.svelte';
	import DownloadSection from '../components/DownloadSection.svelte';
	import Footer from '../components/Footer.svelte';
</script>

<svelte:head>
	<title>Ordinarium | Liturgia Diária, Horários de Missas e Orações</title>
	<meta
		name="description"
		content="O Ordinarium reúne liturgia diária, horários de missas, diretório de paróquias, orações, exames de consciência e outras ferramentas para acompanhar sua vida espiritual todos os dias."
	/>
	<meta name="robots" content="index, follow" />
	<link rel="canonical" href="https://ordinarium-zeta.vercel.app" />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://ordinarium-zeta.vercel.app" />
	<meta property="og:title" content="Ordinarium em um só lugar" />
	<meta
		property="og:description"
		content="O Ordinarium reúne liturgia diária, horários de missas, diretório de paróquias, orações, exames de consciência e outras ferramentas para acompanhar sua vida espiritual todos os dias."
	/>
	<meta property="og:image" content="https://ordinarium-zeta.vercel.app/assets/image.png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:image:alt" content="Ordinarium" />
	<meta property="og:locale" content="pt_BR" />
	<meta property="og:site_name" content="Ordinarium" />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://ordinarium-zeta.vercel.app" />
	<meta property="twitter:title" content="Ordinarium em um só lugar" />
	<meta
		property="twitter:description"
		content="O Ordinarium reúne liturgia diária, horários de missas, diretório de paróquias, orações, exames de consciência e outras ferramentas para acompanhar sua vida espiritual todos os dias."
	/>
	<meta property="twitter:image" content="https://ordinarium-zeta.vercel.app/assets/image.png" />

	<!-- Structured Data (JSON-LD) -->
	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@graph": [
				{
					"@type": "WebSite",
					"@id": "https://ordinarium-zeta.vercel.app/#website",
					"url": "https://ordinarium-zeta.vercel.app",
					"name": "Ordinarium",
					"description": "O Ordinarium reúne liturgia diária, horários de missas, diretório de paróquias, orações, exames de consciência e outras ferramentas para acompanhar sua vida espiritual todos os dias.",
					"inLanguage": "pt-BR"
				},
				{
					"@type": "SoftwareApplication",
					"@id": "https://ordinarium-zeta.vercel.app/#software",
					"name": "Ordinarium",
					"operatingSystem": "All",
					"applicationCategory": "LifestyleApplication",
					"offers": {
						"@type": "Offer",
						"price": "0",
						"priceCurrency": "BRL"
					},
					"description": "O Ordinarium reúne liturgia diária, horários de missas, diretório de paróquias, orações, exames de consciência e outras ferramentas para acompanhar sua vida espiritual todos os dias.",
					"url": "https://ordinarium-zeta.vercel.app",
					"image": "https://ordinarium-zeta.vercel.app/assets/image.png",
					"applicationSubCategory": "Religioso, Devoção, Organização Litúrgica",
					"author": {
						"@type": "Person",
						"name": "João Pedro Matos",
						"url": "https://www.linkedin.com/in/joao-pedro-matos-dev/"
					},
					"sponsor": {
						"@type": "Organization",
						"name": "Arquidiocese de Teresina",
						"url": "https://arquidiocesedeteresina.org.br/"
					}
				},
				{
					"@type": "FAQPage",
					"@id": "https://ordinarium-zeta.vercel.app/#faq",
					"isPartOf": {
						"@id": "https://ordinarium-zeta.vercel.app/#website"
					},
					"inLanguage": "pt-BR",
					"mainEntity": [
						{
							"@type": "Question",
							"name": "O que é o Ordinarium?",
							"acceptedAnswer": {
								"@type": "Answer",
								"text": "O Ordinarium é um aplicativo católico que reúne liturgia diária, horários de missas, diretório de paróquias, orações e exames de consciência — tudo em um só lugar para acompanhar sua vida espiritual todos os dias."
							}
						},
						{
							"@type": "Question",
							"name": "É gratuito?",
							"acceptedAnswer": {
								"@type": "Answer",
								"text": "Sim, o Ordinarium é um projeto independente e sem anúncios. Você pode usar todas as funcionalidades básicas gratuitamente. Algumas ferramentas avançadas poderão ter acesso em breve."
							}
						},
						{
							"@type": "Question",
							"name": "Como encontrar minha paróquia?",
							"acceptedAnswer": {
								"@type": "Answer",
								"text": "No app, acesse a seção \"Paróquias\" e permita o acesso à sua localização. O Ordinarium mostra as paróquias mais próximas com contatos, horários e mapas integrados."
							}
						},
						{
							"@type": "Question",
							"name": "Posso usar offline?",
							"acceptedAnswer": {
								"@type": "Answer",
								"text": "Parte do conteúdo, como orações e liturgia do dia, pode ser acessado offline após o primeiro carregamento. Funcionalidades como mapas de paróquias precisam de conexão com a internet."
							}
						},
						{
							"@type": "Question",
							"name": "Como contribuir com o projeto?",
							"acceptedAnswer": {
								"@type": "Answer",
								"text": "O Ordinarium é mantido pela generosidade da comunidade. Você pode contribuir financeiramente ou ajudar com código-fonte no GitHub. Acesse a seção \"Contribuir\" para mais informações."
							}
						},
						{
							"@type": "Question",
							"name": "Quem está por trás do Ordinarium?",
							"acceptedAnswer": {
								"@type": "Answer",
								"text": "O Ordinarium é um projeto colaborativo feito por católicos, em parceria com a Arquidiocese de Teresina e outros apoiadores. Nosso objetivo é facilitar a vida de oração dos fiéis no Brasil."
							}
						}
					]
				}
			]
		}
	</script>
</svelte:head>

<Navbar />
<main>
	<Hero />
	<ScreensShowcase />
	<FeatureShowcase />

	<!-- Breathing moment -->
	<section class="w-full py-32 bg-bg-light px-6 md:px-12">
		<div class="max-w-3xl mx-auto text-center">
			<p class="text-2xl md:text-3xl font-serif italic leading-relaxed text-text-dark/80">
				"Orai sem cessar."
			</p>
			<p class="mt-6 text-sm text-text-dark/40 font-sans">— 1 Tessalonicenses 5:17</p>
		</div>
	</section>

	<LeoSections />
	<FAQSection />
	<TestimonialsSection />
	<PartnershipSection />
	<DownloadSection />
</main>
<Footer />
