<script lang="ts">
	import { testimonials } from '../lib/data';
	import SectionTitle from './SectionTitle.svelte';
</script>

<section id="depoimentos" 	class="w-full py-24 bg-bg-light px-6 md:px-12">
	<div class="max-w-5xl mx-auto">
		<SectionTitle
			supertitle=""
			title="O que dizem os fiéis"
			centered={false}
			theme="light"
		/>

		<div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
			{#each testimonials as item (item.name)}
				<div
					class="bg-white border border-border-gold/20 rounded-[28px] p-6 md:p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-300"
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
