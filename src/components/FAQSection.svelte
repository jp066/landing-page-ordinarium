<script lang="ts">
	import { inView } from '$lib/actions';
	import { faqItems } from '../lib/data';
	import SectionTitle from './SectionTitle.svelte';
	import { ChevronDown } from '@lucide/svelte';

	let openIndex: number | null = $state(null);

	function toggle(index: number) {
		openIndex = openIndex === index ? null : index;
	}
</script>

<section id="faq" use:inView class="w-full py-20 bg-bg-light px-6 md:px-12">
	<div class="max-w-3xl mx-auto">
		<SectionTitle supertitle="" title="Perguntas frequentes" centered={false} theme="light" />

		<div class="mt-12">
			{#each faqItems as item, index}
				<div
					use:inView
					class="border-b border-border-gold/15 last:border-b-0 group reveal reveal-delay-{Math.min(index + 1, 4)}"
				>
					<button
						type="button"
						onclick={() => toggle(index)}
						class="w-full flex items-center justify-between py-6 text-left cursor-pointer transition-colors duration-200 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 rounded-lg"
					>
						<span class="text-base md:text-lg font-serif font-medium text-text-dark pr-4">
							{item.question}
						</span>
						<ChevronDown
							class="w-5 h-5 text-text-dark/40 shrink-0 transition-all duration-200 {openIndex ===
							index
								? 'rotate-180 text-primary'
								: 'group-hover:text-primary'}"
						/>
					</button>

					<div
						class="overflow-hidden transition-all duration-300 {openIndex === index
							? 'max-h-96 opacity-100 pb-6'
							: 'max-h-0 opacity-0'}"
					>
						<p class="text-sm md:text-base text-text-dark/65 leading-relaxed font-sans max-w-2xl">
							{item.answer}
						</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
