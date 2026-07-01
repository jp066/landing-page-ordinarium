<script lang="ts">
	import Navbar from '../components/Navbar.svelte';
	import Hero from '../components/Hero.svelte';
	import FeaturesGrid from '../components/FeaturesGrid.svelte';
	import ScreensShowcase from '../components/ScreensShowcase.svelte';
	import AudienceSection from '../components/AudienceSection.svelte';
	import CTASection from '../components/CTASection.svelte';
	import Footer from '../components/Footer.svelte';
</script>

<svelte:head>
	<title>Ordinarium - Fé, Organização e Devoção Católica em um só lugar</title>
	<meta
		name="description"
		content="O Ordinarium reúne liturgia diária, horários de missas, diretório de paróquias, orações, exames de consciência e outras ferramentas para acompanhar sua vida espiritual todos os dias."
	/>

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:title" content="Ordinarium - Fé, Organização e Devoção Católica em um só lugar" />
	<meta
		property="og:description"
		content="O Ordinarium reúne liturgia diária, horários de missas, diretório de paróquias, orações, exames de consciência e outras ferramentas para acompanhar sua vida espiritual todos os dias."
	/>

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta
		property="twitter:title"
		content="Ordinarium - Fé, Organização e Devoção Católica em um só lugar"
	/>
	<meta
		property="twitter:description"
		content="O Ordinarium reúne liturgia diária, horários de missas, diretório de paróquias, orações, exames de consciência e outras ferramentas para acompanhar sua vida espiritual todos os dias."
	/>
</svelte:head>

<Navbar />
<main>
	<Hero />
	<FeaturesGrid />
	<ScreensShowcase />
	<AudienceSection />
	<CTASection />
</main>
<Footer />
