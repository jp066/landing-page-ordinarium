<script lang="ts">
	import Navbar from '../components/Navbar.svelte';
	import Hero from '../components/Hero.svelte';
	import ScreensShowcase from '../components/ScreensShowcase.svelte';
	import FeatureShowcase from '../components/FeatureShowcase.svelte';
	import LeoSections from '../components/LeoSections.svelte';
	import PartnershipSection from '../components/PartnershipSection.svelte';
	import FAQSection from '../components/FAQSection.svelte';
	import TestimonialsSection from '../components/TestimonialsSection.svelte';
	import WaitlistSection from '../components/WaitlistSection.svelte';
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
	<link rel="canonical" href="https://ordinarium.com.br" />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://ordinarium.com.br" />
	<meta property="og:title" content="Ordinarium em um só lugar" />
	<meta
		property="og:description"
		content="O Ordinarium reúne liturgia diária, horários de missas, diretório de paróquias, orações, exames de consciência e outras ferramentas para acompanhar sua vida espiritual todos os dias."
	/>
	<meta property="og:image" content="https://ordinarium.com.br/assets/image.png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:image:alt" content="Ordinarium" />
	<meta property="og:locale" content="pt_BR" />
	<meta property="og:site_name" content="Ordinarium" />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://ordinarium.com.br" />
	<meta property="twitter:title" content="Ordinarium em um só lugar" />
	<meta
		property="twitter:description"
		content="O Ordinarium reúne liturgia diária, horários de missas, diretório de paróquias, orações, exames de consciência e outras ferramentas para acompanhar sua vida espiritual todos os dias."
	/>
	<meta property="twitter:image" content="https://ordinarium.com.br/assets/image.png" />

	<!-- Structured Data (JSON-LD) -->
	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@graph": [
				{
					"@type": "WebSite",
					"@id": "https://ordinarium.com.br/#website",
					"url": "https://ordinarium.com.br",
					"name": "Ordinarium",
					"description": "O Ordinarium reúne liturgia diária, horários de missas, diretório de paróquias, orações, exames de consciência e outras ferramentas para acompanhar sua vida espiritual todos os dias.",
					"inLanguage": "pt-BR"
				},
				{
					"@type": "SoftwareApplication",
					"@id": "https://ordinarium.com.br/#software",
					"name": "Ordinarium",
					"operatingSystem": "All",
					"applicationCategory": "LifestyleApplication",
					"offers": {
						"@type": "Offer",
						"price": "0",
						"priceCurrency": "BRL"
					},
					"description": "O Ordinarium reúne liturgia diária, horários de missas, diretório de paróquias, orações, exames de consciência e outras ferramentas para acompanhar sua vida espiritual todos os dias.",
					"url": "https://ordinarium.com.br",
					"image": "https://ordinarium.com.br/assets/image.png",
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
					"@id": "https://ordinarium.com.br/#faq",
					"isPartOf": {
						"@id": "https://ordinarium.com.br/#website"
					},
					"inLanguage": "pt-BR",
					"mainEntity": [
						{
							"@type": "Question",
							"name": "O que é o Ordinarium?",
							"acceptedAnswer": {
								"@type": "Answer",
								"text": "O Ordinarium é um aplicativo criado para ajudar os católicos a viverem melhor sua fé no dia a dia, reunindo recursos para oração, liturgia, formação e acompanhamento da vida espiritual."
							}
						},
						{
							"@type": "Question",
							"name": "Por que o nome Ordinarium?",
							"acceptedAnswer": {
								"@type": "Answer",
								"text": "Ordinarium vem do latim e está relacionado àquilo que é ordinário, comum e cotidiano. O nome representa a missão do aplicativo: ajudar os fiéis a integrarem a fé à sua vida comum, tornando a oração, a liturgia e a caminhada espiritual parte da rotina."
							}
						},
						{
							"@type": "Question",
							"name": "O que posso fazer no Ordinarium?",
							"acceptedAnswer": {
								"@type": "Answer",
								"text": "O Ordinarium reúne recursos para auxiliar sua caminhada espiritual, como: encontrar paróquias, consultar horários de missas e confissões, acompanhar a liturgia diária, ler a Bíblia, acessar orações, conhecer o santo do dia, realizar exames de consciência, acompanhar sua vida espiritual e conversar com o assistente Leo."
							}
						},
						{
							"@type": "Question",
							"name": "O que é o Leo?",
							"acceptedAnswer": {
								"@type": "Answer",
								"text": "O Leo é o assistente inteligente do Ordinarium. Ele ajuda os usuários a encontrar conteúdos, utilizar recursos da plataforma e refletir sobre diferentes aspectos da vida espiritual."
							}
						},
						{
							"@type": "Question",
							"name": "O Leo substitui um padre ou confessor?",
							"acceptedAnswer": {
								"@type": "Answer",
								"text": "Não. O Leo é uma ferramenta tecnológica de apoio e não substitui a confissão sacramental, a direção espiritual, um sacerdote, a comunidade ou a autoridade da Igreja Católica."
							}
						},
						{
							"@type": "Question",
							"name": "O Ordinarium é oficialmente ligado à Igreja Católica?",
							"acceptedAnswer": {
								"@type": "Answer",
								"text": "O Ordinarium é uma plataforma independente, desenvolvida para católicos. Não é oficialmente administrado ou mantido pela Santa Sé, por uma diocese específica ou por outra instituição da Igreja Católica, salvo quando expressamente indicado."
							}
						},
						{
							"@type": "Question",
							"name": "O Ordinarium é gratuito?",
							"acceptedAnswer": {
								"@type": "Answer",
								"text": "Sim. O Ordinarium oferece recursos gratuitos para todos os usuários."
							}
						},
						{
							"@type": "Question",
							"name": "O Ordinarium utiliza meus dados para treinar inteligência artificial?",
							"acceptedAnswer": {
								"@type": "Answer",
								"text": "O Ordinarium não utiliza suas informações pessoais ou conteúdos privados para treinar modelos de inteligência artificial próprios sem uma finalidade informada ao usuário."
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
	<!--<PartnershipSection />-->
	<WaitlistSection />
	<DownloadSection />
</main>
<Footer />
