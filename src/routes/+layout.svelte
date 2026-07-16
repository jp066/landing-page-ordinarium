<script lang="ts">
	import '../global.css';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href="/assets/favicon.png" />
</svelte:head>

{@render children()}
