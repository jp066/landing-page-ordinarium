<script lang="ts">
	import type { Component } from 'svelte';

	interface Props {
		icon: Component;
		title: string;
		description: string;
	}

	let { icon, title, description }: Props = $props();
</script>

<div
	class="bg-bg-dark-card border border-border-gold/15 rounded-[2rem] p-6 md:p-8 flex flex-col gap-4 hover:border-primary/40 hover:-translate-y-0.5 transition-all duration-300"
>
	<div
		class="w-10 h-10 rounded-full bg-primary-dim border border-border-gold/30 flex items-center justify-center"
	>
		<icon class="w-5 h-5 text-primary"></icon>
	</div>

	<h3 class="text-lg font-sans font-semibold text-text-light">{title}</h3>
	<p class="text-text-secondary text-sm leading-relaxed">{description}</p>
</div>
