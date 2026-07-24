<script lang="ts">
	import '../global.css';
	import Navbar from '../components/Navbar.svelte';
	import Footer from '../components/Footer.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href="/assets/favicon.png" />
</svelte:head>

<a
	href="#main-content"
	class="fixed -top-40 left-4 z-[100] px-4 py-2 rounded-b-lg bg-primary text-bg-dark text-sm font-semibold shadow-lg transition-all duration-300 focus-visible:top-0"
>
	Pular para conteúdo
</a>

<Navbar />
{@render children()}
<Footer />
