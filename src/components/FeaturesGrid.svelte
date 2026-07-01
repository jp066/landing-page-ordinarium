<script lang="ts">
	import { features } from '../lib/data';
	import SectionTitle from './SectionTitle.svelte';
	import FeatureCard from './FeatureCard.svelte';
</script>

<section id="recursos" class="w-full py-24 bg-bg-light text-text-dark px-6 md:px-12 border-t border-b border-border-gold/20">
	<div class="max-w-7xl mx-auto">
		<!-- Section Header -->
		<SectionTitle
			supertitle="Tudo em um único lugar"
			title="Ferramentas completas para sua vida espiritual"
			subtitle="Recursos essenciais para crescer na fé e permanecer conectado à vida da igreja."
			centered={true}
			theme="light"
		/>

		<!-- Grid -->
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
			{#each features as item}
				<div class="h-full">
					<FeatureCard
						icon={item.icon}
						title={item.title}
						description={item.description}
						href={item.href}
					/>
				</div>
			{/each}
		</div>
	</div>
</section>
