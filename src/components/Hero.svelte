<script lang="ts">
	import { APP_URL } from '../lib/constants';
	import Button from './Button.svelte';

	// Substitua pelo caminho da sua foto quando tiver: '/assets/sua-foto.jpg'
	const heroBg =
		'https://plus.unsplash.com/premium_photo-1678305037622-474d23a7d906?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
</script>

<section
	id="hero"
	class="hero-section relative min-h-screen flex items-center overflow-hidden text-text-light"
>
	<!-- Imagem de fundo -->
	{#if heroBg}
		<img
			src={heroBg}
			alt="Hero background"
			class="hero-bg-img absolute inset-0 w-full h-full object-cover object-center"
			fetchpriority="high"
		/>
	{:else}
		<div class="hero-placeholder absolute inset-0"></div>
	{/if}

	<!--
		Overlay gradiente:
		- Esquerda: mais transparente → imagem aparece
		- Direita: mais escuro → texto legível
		(igual ao efeito da referência)
	-->
	<div class="hero-overlay absolute inset-0"></div>

	<!-- Escurecimento geral sutil para o topo (por cima da navbar) -->
	<div class="hero-top-fade absolute top-0 left-0 right-0 h-40 pointer-events-none"></div>

	<!-- Conteúdo -->
	<div class="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 pt-24 pb-12">
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-[70vh]">
			<!-- Coluna direita: texto -->
			<div class="flex flex-col items-start text-left lg:justify-self-end">
				<!-- Título -->
				<h1
					class="text-4xl md:text-5xl xl:text-[3.5rem] font-bold leading-[1.1] tracking-tight mb-5 text-white"
				>
					Viva a <span class="text-primary">fé católica</span><br />
					todos os dias,<br />
					em um só lugar.
				</h1>

				<!-- Descrição -->
				<p class="text-base md:text-lg text-white/65 leading-relaxed mb-10 max-w-md">
					Liturgia, orações, paróquias e muito mais para acompanhar sua caminhada espiritual.
				</p>

				<!-- CTA -->
				<div class="flex flex-col sm:flex-row gap-3">
					<Button href={APP_URL} variant="white" size="lg" class="group font-semibold">
						Experimente o &nbsp; <span class="font-gothic">Ordinarium</span>
					</Button>
				</div>
			</div>
		</div>
	</div>

	<!-- Fade para próxima seção -->
	<div class="hero-bottom-fade absolute bottom-0 left-0 right-0 h-28 pointer-events-none"></div>
</section>

<style>
	.hero-section {
		background-color: #0b0b0c;
	}

	.hero-bg-img {
		/* Imagem portrait: foca no centro onde estão as mãos/terço */
		object-position: center 40%;
	}

	/* Placeholder enquanto sem foto */
	.hero-placeholder {
		background: radial-gradient(ellipse at 25% 50%, #1c1409 0%, #0b0b0c 65%);
	}

	/*
		GRADIENTE PRINCIPAL
		- Esquerda (0%): pouco overlay → imagem aparece limpa
		- Centro (50%): overlay médio → transição suave
		- Direita (100%): overlay forte → texto legível

		Isso cria o efeito "split" da referência
	*/
	.hero-overlay {
		background: linear-gradient(
			to right,
			rgba(11, 11, 12, 0.15) 0%,
			rgba(11, 11, 12, 0.4) 35%,
			rgba(11, 11, 12, 0.8) 55%,
			rgba(11, 11, 12, 0.92) 70%,
			rgba(11, 11, 12, 0.95) 100%
		);
	}

	/* Escurece o topo (onde fica a navbar) */
	.hero-top-fade {
		background: linear-gradient(to bottom, rgba(11, 11, 12, 0.7) 0%, transparent 100%);
	}

	/* Fade suave para a próxima seção */
	.hero-bottom-fade {
		background: linear-gradient(to bottom, transparent, #0b0b0c);
	}
</style>
