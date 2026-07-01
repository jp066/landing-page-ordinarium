<script lang="ts">
	import type { Component, Snippet } from 'svelte';

	interface Props {
		id?: string;
		icon: Component;
		title: string;
		desc: string;
		path: string;
		curl: string;
		response: string;
		children?: Snippet;
	}

	let {
		id = '',
		icon: Icon,
		title,
		desc,
		path,
		curl,
		response,
		children
	}: Props = $props();
</script>

<div class="mb-6 bg-bg-dark-card border border-border-gold/20 rounded-xl overflow-hidden" {id}>
	<div class="p-6 md:p-8">
		<div class="flex items-start gap-4 mb-4">
			<div class="w-10 h-10 rounded-lg bg-primary-dim flex items-center justify-center shrink-0 mt-0.5">
				<Icon class="w-5 h-5 text-primary" />
			</div>
			<div class="min-w-0">
				<h3 class="font-serif text-lg font-medium text-text-light mb-1">{title}</h3>
				<p class="text-sm text-text-secondary">{desc}</p>
			</div>
		</div>

		<div class="flex items-center gap-3 mb-4">
			<span class="inline-block px-2 py-0.5 rounded text-xs font-mono font-bold bg-green-900/30 text-green-400">GET</span>
			<code class="text-xs font-mono text-text-light break-all">{path}</code>
		</div>

		<div class="space-y-3">
			<div>
				<p class="text-xs font-semibold text-text-secondary uppercase tracking-wider mb-1.5">Exemplo de chamada</p>
				<pre class="bg-gray-950 border border-border-gold/10 rounded-lg p-4 overflow-x-auto"><code class="text-xs font-mono text-green-400 leading-relaxed">{curl}</code></pre>
			</div>
			<div>
				<p class="text-xs font-semibold text-text-secondary uppercase tracking-wider mb-1.5">Exemplo de resposta</p>
				<pre class="bg-gray-950 border border-border-gold/10 rounded-lg p-4 overflow-x-auto"><code class="text-xs font-mono text-green-400 leading-relaxed">{response}</code></pre>
			</div>
			{#if children}
				{@render children()}
			{/if}
		</div>
	</div>
</div>
