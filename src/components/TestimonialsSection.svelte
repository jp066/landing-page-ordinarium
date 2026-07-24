<script lang="ts">
	import { inView } from '$lib/actions';
	import { testimonials } from '../lib/data';
	import SectionTitle from './SectionTitle.svelte';

	const items = [...testimonials, ...testimonials];
</script>

<section id="depoimentos" use:inView class="w-full py-24 bg-bg-light overflow-hidden">
	<div class="max-w-5xl mx-auto px-6 md:px-12">
		<SectionTitle supertitle="" title="O que dizem os fiéis" centered={false} theme="light" />
	</div>

	<div class="mt-12 group" role="region" aria-label="Carrossel de depoimentos">
		<div class="carousel-track flex gap-6 px-6 md:px-12">
			{#each items as item, i (`${item.name}-${i}`)}
				<div
					class="carousel-item shrink-0 w-[320px] md:w-[380px] bg-white border border-border-gold/20 rounded-[28px] p-6 md:p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-300"
				>
					<p class="text-sm md:text-base text-text-dark/80 leading-relaxed italic font-serif mb-6">
						"{item.quote}"
					</p>
					<div class="flex items-center gap-4 pt-4 border-t border-border-gold/10">
						<div
							class="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-serif font-bold text-sm shrink-0"
						>
							{item.name
								.split(' ')
								.map((n) => n[0])
								.join('')}
						</div>
						<div>
							<h4 class="text-sm font-serif font-semibold text-text-dark">
								{item.name}
							</h4>
							<p class="text-xs text-text-dark/50 mt-0.5 font-sans">
								{item.context}
							</p>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.carousel-track {
		animation: scroll-left 40s linear infinite;
		width: max-content;
	}

	.group:hover .carousel-track {
		animation-play-state: paused;
	}

	@media (pointer: coarse) {
		.carousel-track {
			animation-duration: 60s;
		}
	}

	@keyframes scroll-left {
		0% {
			transform: translateX(0);
		}
		100% {
			transform: translateX(-50%);
		}
	}
</style>
