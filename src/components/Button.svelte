<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'white';
		size?: 'sm' | 'md' | 'lg';
		href?: string;
		type?: 'button' | 'submit' | 'reset';
		class?: string;
		onclick?: (event: MouseEvent) => void;
		disabled?: boolean;
		target?: string;
		rel?: string;
		children?: Snippet;
	}

	let {
		variant = 'primary',
		size = 'md',
		href = '',
		type = 'button',
		class: className = '',
		onclick,
		disabled = false,
		target,
		rel,
		children
	}: Props = $props();

	const baseStyles =
		'inline-flex items-center justify-center font-sans font-medium rounded-full transition-fast focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-bg-dark disabled:opacity-50 disabled:pointer-events-none cursor-pointer';

	const variants: Record<'primary' | 'secondary' | 'outline' | 'ghost' | 'white', string> = {
		primary: 'bg-primary text-bg-dark hover:bg-primary-hover active:scale-[0.98]',
		secondary: 'text-text-light bg-transparent hover:bg-white/15 active:scale-[0.98]',
		outline:
			'border border-primary bg-transparent text-text-light hover:bg-primary/10 active:scale-[0.98]',
		ghost: 'text-text-secondary bg-transparent hover:text-text-light hover:bg-white/5',
		white: 'bg-white text-bg-dark hover:bg-white/90 active:scale-[0.98]'
	};

	const sizes: Record<'sm' | 'md' | 'lg', string> = {
		sm: 'px-4 py-2 text-xs',
		md: 'px-6 py-3 text-sm',
		lg: 'px-8 py-4 text-base'
	};
</script>

{#if href}
	<a
		{href}
		class="{baseStyles} {variants[variant]} {sizes[size]} {className}"
		{target}
		{rel}
		{onclick}
	>
		{#if children}
			{@render children()}
		{/if}
	</a>
{:else}
	<button
		{type}
		class="{baseStyles} {variants[variant]} {sizes[size]} {className}"
		{disabled}
		{onclick}
	>
		{#if children}
			{@render children()}
		{/if}
	</button>
{/if}
