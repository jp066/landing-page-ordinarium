<script lang="ts">
	import type { Component } from 'svelte';
	import { ArrowRight } from '@lucide/svelte';

	interface Props {
		icon: Component;
		title: string;
		description: string;
		href: string;
	}

	let { icon: IconComponent, title, description, href }: Props = $props();
</script>

<div class="group bg-bg-light-card border border-border-gold/35 rounded-xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10 hover:border-primary flex flex-col justify-between h-full min-h-[220px]">
	<div>
		<!-- Icon -->
		<div class="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-bg-dark transition-all duration-300">
			<IconComponent class="w-6 h-6" />
		</div>

		<!-- Content -->
		<h3 class="text-xl font-serif font-medium text-text-dark mb-3 group-hover:text-primary transition-colors duration-300">
			{title}
		</h3>
		<p class="text-sm text-text-dark/75 leading-relaxed mb-6 font-sans">
			{description}
		</p>
	</div>
</div>
