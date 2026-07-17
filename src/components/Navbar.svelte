<script lang="ts">
	import Button from './Button.svelte';

	let isScrolled = $state(true);

	$effect(() => {
		const handleScroll = () => {
			isScrolled = window.scrollY > 20;
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});
</script>

<header
	class="fixed top-0 left-0 w-full z-50 transition-all duration-300 {isScrolled
		? 'py-4 bg-bg-dark/85 backdrop-blur-md border-b border-border-gold/30'
		: 'py-6 bg-bg-dark/60 border-b border-border-gold/10'}"
>
	<div class="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
		<a href="/" class="flex items-center gap-2 group">
			<div
				class="flex items-center justify-center w-9 h-9 transition-transform group-hover:scale-105"
			>
				<img
					src="/assets/favicon.png"
					alt="Emblema Ordinarium"
					class="w-8 h-8 object-contain drop-shadow-[0_0_8px_rgba(212,168,79,0.2)]"
				/>
			</div>
			<span class="font-gothic text-2xl font-bold tracking-wide text-primary">Ordinarium</span>
		</a>

		<div class="flex items-center gap-3">
			<Button href="/roadmap" variant="ghost" size="sm" class="!hidden lg:!inline-flex"
				>Sugestões</Button
			>
			<Button
				onclick={() =>
					document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
				variant="primary"
				size="sm">Baixe agora</Button
			>
		</div>
	</div>
</header>
