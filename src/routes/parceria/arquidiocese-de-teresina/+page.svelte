<script lang="ts">
	import { ArrowLeft, Church, Code, Rocket, Handshake } from '@lucide/svelte';
	import Button from '../../../components/Button.svelte';
	import Footer from '../../../components/Footer.svelte';
	import { ARCHDIOCESE_URL } from '../../../lib/constants';
</script>

<svelte:head>
	<title>Ordinarium × Arquidiocese de Teresina</title>
	<meta
		name="description"
		content="Conheça a parceria entre o Ordinarium e a Arquidiocese de Teresina, unindo tecnologia e missão pastoral para aproximar os fiéis da vida da Igreja."
	/>
	<meta name="robots" content="index, follow" />
	<link rel="canonical" href="https://ordinarium.vercel.app/parceria/arquidiocese-de-teresina" />

	<!-- Open Graph -->
	<meta property="og:type" content="website" />
	<meta
		property="og:url"
		content="https://ordinarium.vercel.app/parceria/arquidiocese-de-teresina"
	/>
	<meta
		property="og:title"
		content="Ordinarium × Arquidiocese de Teresina"
	/>
	<meta
		property="og:description"
		content="Conheça a parceria entre o Ordinarium e a Arquidiocese de Teresina."
	/>
	<meta property="og:image" content="https://ordinarium.vercel.app/assets/image.png" />
</svelte:head>

<main class="min-h-screen bg-bg-dark text-text-light">
	<!-- Back Link -->
	<div class="max-w-4xl mx-auto px-6 md:px-12 pt-32 pb-8">
		<a
			href="/"
			class="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-primary transition-fast"
		>
			<ArrowLeft class="w-4 h-4" />
			Voltar para o início
		</a>
	</div>

	<!-- Hero Section -->
	<section class="max-w-4xl mx-auto px-6 md:px-12 pb-20">
		<div class="flex flex-col items-center text-center">

			<!-- Title -->
			<h1
				class="text-4xl md:text-5xl lg:text-6xl font-gothic font-medium leading-tight text-primary mb-6"
			>
				Ordinarium <span class="text-primary">×</span> Arquidiocese de Teresina
			</h1>

			<!-- Subtitle -->
			<p class="text-lg md:text-xl text-text-secondary leading-relaxed max-w-2xl mb-12">
				Uma parceria que une tecnologia e missão pastoral para aproximar os fiéis da vida da Igreja.
			</p>

		<!-- Coat of Arms -->
		<div class="relative">
			<div
				class="absolute inset-0 bg-primary/5 rounded-full blur-[60px] pointer-events-none"
			></div>
			<div
				class="relative flex items-center justify-center gap-4 md:gap-6"
			>
				<img
					src="/assets/logo.png"
					alt="Logo Ordinarium"
					class="w-20 h-20 md:w-64 md:h-64 object-contain drop-shadow-[0_0_8px_rgba(212,168,79,0.2)]"
				/>
				<img
					src="/assets/brasao-arquidiocese.png"
					alt="Brasão da Arquidiocese de Teresina"
					class="w-24 h-24 md:w-52 md:h-52 object-contain"
				/>
			</div>
		</div>
		</div>
	</section>

	<!-- Parceiro Fundador -->
	<section class="max-w-4xl mx-auto px-6 md:px-12 pb-24">
		<div class="border-t border-border-gold/20 pt-16">
			<h2 class="text-2xl md:text-3xl font-serif font-medium text-text-light mb-6">
				Parceiro Fundador
			</h2>
			<div class="text-text-secondary leading-relaxed space-y-4 max-w-3xl">
				<p>
					A Arquidiocese de Teresina é a primeira Arquidiocese a estabelecer uma parceria
					institucional com o Ordinarium.
				</p>
				<p>
					Como parceira fundadora, a Arquidiocese participa da construção inicial da plataforma,
					contribuindo para desenvolver um modelo de evangelização digital que poderá futuramente
					acolher outras dioceses e comunidades católicas.
				</p>
				<p>
					Essa parceria representa o início de uma caminhada conjunta, unindo a missão pastoral da
					Igreja com as possibilidades oferecidas pela tecnologia.
				</p>
			</div>
		</div>
	</section>

	<!-- Um caminho aberto para o futuro -->
	<section class="max-w-4xl mx-auto px-6 md:px-12 pb-24">
		<div class="border-t border-border-gold/20 pt-16">
			<h2 class="text-2xl md:text-3xl font-serif font-medium text-text-light mb-6">
				Um caminho aberto para o futuro
			</h2>
			<div class="text-text-secondary leading-relaxed space-y-4 max-w-3xl">
				<p>
					A parceria com a Arquidiocese de Teresina representa o primeiro passo de uma visão maior:
					criar o espaço católico no meio tecnológico.
				</p>
				<p>
					A experiência construída juntos servirá como base para que outras Igrejas possam
					futuramente participar dessa missão de evangelização no ambiente digital.
				</p>
			</div>
		</div>
	</section>

	<!-- CTA -->
	<section class="max-w-4xl mx-auto px-6 md:px-12 pb-32">
		<div class="bg-bg-dark-card border border-border-gold/20 rounded-2xl p-8 md:p-12 text-center">
			<h3 class="text-xl md:text-2xl font-serif font-medium text-text-light mb-4">
				Faça parte desta iniciativa
			</h3>
			<p class="text-text-secondary mb-6 max-w-xl mx-auto">
				Conheça o Ordinarium e descubra como a tecnologia pode fortalecer sua vida espiritual.
			</p>
			<div class="flex flex-col sm:flex-row gap-4 justify-center">
				<Button href="/" variant="primary" class="!px-6 !py-3 font-semibold">
					Voltar para o início
				</Button>
				<Button href="https://ordinarium.vercel.app" variant="outline" class="!px-6 !py-3">
					Abrir aplicativo
				</Button>
				<Button href={ARCHDIOCESE_URL} variant="outline" class="!px-6 !py-3" target="_blank" rel="noopener noreferrer">
					Site da Arquidiocese
				</Button>
			</div>
		</div>
	</section>
</main>

<Footer />
