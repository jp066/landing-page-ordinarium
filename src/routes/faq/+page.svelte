<script lang="ts">
	import { ArrowLeft, ChevronDown } from '@lucide/svelte';
	import Footer from '../../components/Footer.svelte';
	import { faqPageCategories } from '$lib/data';

	let openIndices: (number | null)[] = $state(faqPageCategories.map(() => null));

	function toggle(categoryIndex: number, itemIndex: number) {
		openIndices[categoryIndex] =
			openIndices[categoryIndex] === itemIndex ? null : itemIndex;
	}
</script>

<svelte:head>
	<title>Perguntas frequentes — Ordinarium</title>
	<meta
		name="description"
		content="Encontre respostas sobre o Ordinarium, seus recursos, planos, privacidade e uso."
	/>
	<meta name="robots" content="index, follow" />
	<link rel="canonical" href="https://ordinarium.com.br/faq" />

	<!-- Open Graph -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://ordinarium.com.br/faq" />
	<meta property="og:title" content="Perguntas frequentes — Ordinarium" />
	<meta
		property="og:description"
		content="Encontre respostas sobre o Ordinarium, seus recursos, planos, privacidade e uso."
	/>
	<meta property="og:image" content="https://ordinarium.com.br/assets/image.png" />
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

	<!-- Hero -->
	<section class="max-w-4xl mx-auto px-6 md:px-12 pb-16">
		<h1 class="text-4xl md:text-5xl font-serif font-medium text-text-light mb-4">
			Perguntas frequentes
		</h1>
		<p class="text-text-secondary">Encontre respostas sobre o Ordinarium, seus recursos, planos, privacidade e uso.</p>
	</section>

	<!-- FAQ Categories -->
	{#each faqPageCategories as category, categoryIndex}
		<section class="max-w-4xl mx-auto px-6 md:px-12 pb-16">
			<div class="border-t border-border-gold/20 pt-16">
				<h2 class="text-2xl font-serif font-medium text-text-light mb-8">{category.title}</h2>
				<div class="space-y-0">
					{#each category.items as item, itemIndex}
						<div class="border-b border-border-gold/10 group">
							<button
								type="button"
								onclick={() => toggle(categoryIndex, itemIndex)}
								class="w-full flex items-center justify-between py-5 text-left cursor-pointer transition-colors duration-200 hover:text-primary focus:outline-none"
							>
								<span class="text-base md:text-lg font-serif font-medium text-text-light pr-4">
									{item.question}
								</span>
								<ChevronDown
									class="w-5 h-5 text-text-secondary/40 shrink-0 transition-all duration-200 {openIndices[categoryIndex] ===
									itemIndex
										? 'rotate-180 text-primary'
										: 'group-hover:text-primary'}"
								/>
							</button>

							<div
								class="overflow-hidden transition-all duration-300 {openIndices[categoryIndex] ===
								itemIndex
									? 'max-h-96 opacity-100 pb-5'
									: 'max-h-0 opacity-0'}"
							>
								<p class="text-sm md:text-base text-text-secondary leading-relaxed font-sans max-w-3xl">
									{item.answer}
								</p>
							</div>
						</div>
					{/each}
				</div>
			</div>
		</section>
	{/each}
</main>

<Footer />
