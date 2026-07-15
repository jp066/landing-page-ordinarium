<script lang="ts">
	import Navbar from '../components/Navbar.svelte';
	import Hero from '../components/Hero.svelte';
	import ScreensShowcase from '../components/ScreensShowcase.svelte';
	import FeatureShowcase from '../components/FeatureShowcase.svelte';
	import PartnershipSection from '../components/PartnershipSection.svelte';
	import FAQSection from '../components/FAQSection.svelte';
	import TestimonialsSection from '../components/TestimonialsSection.svelte';
	import DownloadSection from '../components/DownloadSection.svelte';
	import Footer from '../components/Footer.svelte';
</script>

<svelte:head>
	<title>Ordinarium</title>
	<meta
		name="description"
		content="O Ordinarium reúne liturgia diária, horários de missas, diretório de paróquias, orações, exames de consciência e outras ferramentas para acompanhar sua vida espiritual todos os dias."
	/>
	<meta
		name="keywords"
		content="liturgia diária, horários de missas, paróquias católicas, orações católicas, exame de consciência, confissão, devoção católica, ordinarium, aplicativo católico"
	/>
	<meta name="robots" content="index, follow" />
	<link rel="canonical" href="https://ordinarium.vercel.app" />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://ordinarium.vercel.app" />
	<meta property="og:title" content="Ordinarium em um só lugar" />
	<meta
		property="og:description"
		content="O Ordinarium reúne liturgia diária, horários de missas, diretório de paróquias, orações, exames de consciência e outras ferramentas para acompanhar sua vida espiritual todos os dias."
	/>
	<meta property="og:image" content="https://ordinarium.vercel.app/assets/image.png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:image:alt" content="Ordinarium" />
	<meta property="og:locale" content="pt_BR" />
	<meta property="og:site_name" content="Ordinarium" />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://ordinarium.vercel.app" />
	<meta property="twitter:title" content="Ordinarium em um só lugar" />
	<meta
		property="twitter:description"
		content="O Ordinarium reúne liturgia diária, horários de missas, diretório de paróquias, orações, exames de consciência e outras ferramentas para acompanhar sua vida espiritual todos os dias."
	/>
	<meta property="twitter:image" content="https://ordinarium.vercel.app/assets/image.png" />

	<!-- Structured Data (JSON-LD) -->
	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@graph": [
				{
					"@type": "WebSite",
					"@id": "https://ordinarium.vercel.app/#website",
					"url": "https://ordinarium.vercel.app",
					"name": "Ordinarium",
					"description": "O Ordinarium reúne liturgia diária, horários de missas, diretório de paróquias, orações, exames de consciência e outras ferramentas para acompanhar sua vida espiritual todos os dias.",
					"inLanguage": "pt-BR"
				},
				{
					"@type": "SoftwareApplication",
					"@id": "https://ordinarium.vercel.app/#software",
					"name": "Ordinarium",
					"operatingSystem": "All",
					"applicationCategory": "LifestyleApplication",
					"offers": {
						"@type": "Offer",
						"price": "0",
						"priceCurrency": "BRL"
					},
					"description": "O Ordinarium reúne liturgia diária, horários de missas, diretório de paróquias, orações, exames de consciência e outras ferramentas para acompanhar sua vida espiritual todos os dias.",
					"url": "https://ordinarium.vercel.app",
					"image": "https://ordinarium.vercel.app/assets/image.png",
					"applicationSubCategory": "Religioso, Devoção, Organização Litúrgica"
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

	<FAQSection />
	<TestimonialsSection />
	<PartnershipSection />
	<DownloadSection />
</main>
<Footer />
