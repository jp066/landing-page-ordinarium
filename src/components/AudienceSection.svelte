<script lang="ts">
	import { audiences } from '../lib/data';
	import SectionTitle from './SectionTitle.svelte';
</script>

<section id="para-quem" class="w-full py-24 bg-bg-light text-text-dark px-6 md:px-12 border-b border-border-gold/20">
	<div class="max-w-7xl mx-auto">
		
		<!-- Section Header -->
		<SectionTitle
			supertitle="Para toda a igreja"
			title="Feito para todos os católicos"
			subtitle="Seja qual for sua vocação, o Ordinarium foi feito para você."
			centered={true}
			theme="light"
		/>

		<!-- Audiences Grid (desktop horizontal, responsive vertical/grid) -->
		<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mt-16">
			{#each audiences as item}
				<div class="flex flex-col items-center text-center p-4 group transition-all duration-300">
					<!-- Icon Container -->
					<div class="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-bg-dark transition-all duration-300 shadow-md">
						<item.icon class="w-7 h-7" />
					</div>

					<!-- Title -->
					<h3 class="text-lg font-serif font-semibold text-text-dark mb-2 group-hover:text-primary transition-colors">
						{item.title}
					</h3>

					<!-- Description -->
					<p class="text-xs text-text-dark/70 leading-relaxed font-sans max-w-[180px]">
						{item.description}
					</p>
				</div>
			{/each}
		</div>

	</div>
</section>
