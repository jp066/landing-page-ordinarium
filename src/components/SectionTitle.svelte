<script lang="ts">
	interface Props {
		supertitle?: string;
		title: string;
		subtitle?: string;
		centered?: boolean;
		theme?: 'dark' | 'light';
	}

	let { supertitle = '', title, subtitle = '', centered = true, theme = 'dark' }: Props = $props();
</script>

<div class="flex flex-col mb-12 {centered ? 'items-center text-center' : 'items-start text-left'}">
	{#if supertitle}
		<span class="text-xs font-semibold tracking-widest uppercase text-primary mb-3">
			{supertitle}
		</span>
	{/if}

	<h2
		class="text-3xl md:text-4xl font-serif font-medium leading-tight max-w-3xl {theme === 'light'
			? 'text-text-dark'
			: 'text-text-light'}"
	>
		{title}
	</h2>

	{#if subtitle}
		<p
			class="mt-4 text-base md:text-lg max-w-2xl leading-relaxed {theme === 'light'
				? 'text-text-dark/70'
				: 'text-text-secondary'}"
		>
			{subtitle}
		</p>
	{/if}
</div>
