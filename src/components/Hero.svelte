<script lang="ts">
	import { APP_URL } from '../lib/constants';
	import { inView } from '$lib/actions';
	import Button from './Button.svelte';

	const heroBg = '/assets/bg-hero.avif';
</script>

<section
	id="hero"
	class="hero-section relative min-h-screen flex items-center overflow-hidden text-text-light"
>
	{#if heroBg}
		<img
			src={heroBg}
			alt="Ambiente de oração solene e recolhimento espiritual com iluminação suave em uma igreja"
			class="hero-bg-img absolute inset-0 w-full h-full object-cover object-center"
			fetchpriority="high"
		/>
	{:else}
		<div class="hero-placeholder absolute inset-0"></div>
	{/if}

	<div class="hero-overlay absolute inset-0"></div>

	<div class="hero-top-fade absolute top-0 left-0 right-0 h-40 pointer-events-none"></div>

	<div class="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 pt-24 pb-12">
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-[70vh]">
			<div class="flex flex-col items-start text-left lg:justify-self-end">
				<h1
					use:inView
					class="reveal reveal-delay-1 text-4xl md:text-5xl xl:text-[3.5rem] font-bold leading-[1.1] tracking-tight mb-5 text-white"
				>
					Viva a <span class="text-primary">fé católica</span><br />
					todos os dias,<br />
					em um só lugar.
				</h1>

				<p
					use:inView
					class="reveal reveal-delay-2 text-base md:text-lg text-white/80 leading-relaxed mb-10 max-w-md"
				>
					Liturgia diária, orações católicas, horários de missas, diretório de paróquias e exames de consciência para acompanhar sua vida espiritual todos os dias.
				</p>

				<div use:inView class="reveal reveal-delay-3 flex flex-col sm:flex-row gap-3">
					<Button href={APP_URL} variant="white" size="lg" class="group font-semibold">
						Experimente o &nbsp; <span class="font-gothic">Ordinarium</span>
					</Button>
					<Button href="/roadmap" variant="ghost" size="lg">
						Sugestões
					</Button>
				</div>
			</div>
		</div>
	</div>

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
