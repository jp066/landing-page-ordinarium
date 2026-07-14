<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'white';
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
		'inline-flex items-center justify-center font-sans font-medium rounded-lg transition-fast focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-bg-dark disabled:opacity-50 disabled:pointer-events-none cursor-pointer';

	const variants: Record<'primary' | 'secondary' | 'outline' | 'ghost' | 'white', string> = {
		primary: 'bg-primary text-bg-dark hover:bg-primary-hover active:scale-[0.98]',
		secondary:
			'text-text-light hover:bg-white/15 active:scale-[0.98]',
		outline:
			'border border-border-gold text-text-light hover:bg-primary/10 hover:border-primary active:scale-[0.98]',
		ghost: 'text-text-secondary hover:text-text-light hover:bg-white/5',
		white: 'bg-white text-bg-dark hover:bg-white/90 active:scale-[0.98]'
	};

	const sizes = 'px-6 py-3 text-sm';
</script>

{#if href}
	<a {href} class="{baseStyles} {variants[variant]} {sizes} {className}" {target} {rel} {onclick}>
		{#if children}
			{@render children()}
		{/if}
	</a>
{:else}
	<button {type} class="{baseStyles} {variants[variant]} {sizes} {className}" {disabled} {onclick}>
		{#if children}
			{@render children()}
		{/if}
	</button>
{/if}
