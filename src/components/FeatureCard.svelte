<script lang="ts">
	import type { Component } from 'svelte';

	interface Props {
		icon: Component;
		title: string;
		description: string;
		href: string;
		theme?: 'dark' | 'light';
	}

	let { icon: IconComponent, title, description, href, theme = 'dark' }: Props = $props();
</script>

<a {href} class="group block p-6 transition-colors duration-200">
	<div class="flex items-start gap-4">
		<div
			class="w-10 h-10 rounded-lg bg-primary/8 text-primary flex items-center justify-center shrink-0 transition-colors duration-200 group-hover:bg-primary group-hover:text-bg-dark"
		>
			<IconComponent class="w-5 h-5" />
		</div>
		<div>
			<h3
				class="text-base font-serif font-semibold mb-1 group-hover:text-primary transition-colors duration-200 {theme === 'light'
					? 'text-text-dark'
					: 'text-text-light'}"
			>
				{title}
			</h3>
			<p
				class="text-sm leading-relaxed font-sans {theme === 'light'
					? 'text-text-dark/65'
					: 'text-text-secondary'}"
			>
				{description}
			</p>
		</div>
	</div>
</a>
