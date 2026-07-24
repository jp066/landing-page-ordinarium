<script lang="ts">
	import { ArrowLeft, ChevronDown } from '@lucide/svelte';
	import { faqPageCategories } from '$lib/data';

	let openIndices: (number | null)[] = $state(faqPageCategories.map(() => null));

	function toggle(categoryIndex: number, itemIndex: number) {
		openIndices[categoryIndex] =
			openIndices[categoryIndex] === itemIndex ? null : itemIndex;
	}
</script>

<svelte:head>
	<title>Perguntas Frequentes — Ordinarium</title>
	<meta
		name="description"
		content="Encontre respostas sobre o Ordinarium, seus recursos, planos, privacidade e uso cotidianos."
	/>
	<meta name="robots" content="index, follow" />
	<link rel="canonical" href="https://ordinarium.com.br/faq" />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://ordinarium.com.br/faq" />
	<meta property="og:title" content="Perguntas Frequentes — Ordinarium" />
	<meta
		property="og:description"
		content="Encontre respostas sobre o Ordinarium, seus recursos, planos, privacidade e uso cotidianos."
	/>
	<meta property="og:image" content="https://ordinarium.com.br/assets/image.png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:image:alt" content="FAQ Ordinarium" />
	<meta property="og:locale" content="pt_BR" />
	<meta property="og:site_name" content="Ordinarium" />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://ordinarium.com.br/faq" />
	<meta property="twitter:title" content="Perguntas Frequentes — Ordinarium" />
	<meta
		property="twitter:description"
		content="Encontre respostas sobre o Ordinarium, seus recursos, planos, privacidade e uso cotidianos."
	/>
	<meta property="twitter:image" content="https://ordinarium.com.br/assets/image.png" />

	<!-- Dynamic FAQ JSON-LD -->
	{@html `<script type="application/ld+json">` + JSON.stringify({
		"@context": "https://schema.org",
		"@graph": [
			{
				"@type": "WebPage",
				"@id": "https://ordinarium.com.br/faq/#webpage",
				"url": "https://ordinarium.com.br/faq",
				"name": "Perguntas Frequentes — Ordinarium",
				"description": "Encontre respostas sobre o Ordinarium, seus recursos, planos, privacidade e uso cotidianos.",
				"inLanguage": "pt-BR"
			},
			{
				"@type": "BreadcrumbList",
				"@id": "https://ordinarium.com.br/faq/#breadcrumb",
				"isPartOf": {
					"@id": "https://ordinarium.com.br/faq/#webpage"
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
						"name": "Perguntas Frequentes",
						"item": "https://ordinarium.com.br/faq"
					}
				]
			},
			{
				"@type": "FAQPage",
				"@id": "https://ordinarium.com.br/faq/#faq",
				"isPartOf": {
					"@id": "https://ordinarium.com.br/faq/#webpage"
				},
				"inLanguage": "pt-BR",
				"mainEntity": faqPageCategories.flatMap(category => 
					category.items.map(item => ({
						"@type": "Question",
						"name": item.question,
						"acceptedAnswer": {
							"@type": "Answer",
							"text": item.answer
						}
					}))
				)
			}
		]
	}) + `</script>`}
</svelte:head>

<main id="main-content" class="min-h-screen bg-bg-dark text-text-light">
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
								class="w-full flex items-center justify-between py-5 text-left cursor-pointer transition-colors duration-200 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 rounded-lg"
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
