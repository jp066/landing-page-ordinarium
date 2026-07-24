<script lang="ts">
	import { X, Menu } from '@lucide/svelte';

	let isScrolled = $state(true);
	let isMenuOpen = $state(false);

	$effect(() => {
		const handleScroll = () => {
			isScrolled = window.scrollY > 20;
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});

	$effect(() => {
		if (isMenuOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}
		return () => {
			document.body.style.overflow = '';
		};
	});

	const navLinks = [
		{ label: 'Recursos', href: '/#recursos' },
		{ label: 'Blog', href: '/blog' },
		{ label: 'FAQ', href: '/faq' },
		{ label: 'API', href: '/api' },
		{ label: 'Sugestões', href: '/roadmap' },
		{ label: 'Apoiar', href: '/apoiar' }
	];

	function closeMenu() {
		isMenuOpen = false;
	}
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

		<!-- Desktop Navigation Menu -->
		<nav class="hidden lg:flex items-center gap-6">
			{#each navLinks as link}
				<a
					href={link.href}
					class="text-sm font-sans font-medium text-text-secondary hover:text-text-light transition-fast"
				>
					{link.label}
				</a>
			{/each}
		</nav>

		<div class="flex items-center gap-3">
			<button
				onclick={() =>
					document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
				class="inline-flex items-center justify-center font-sans font-medium rounded-full transition-fast px-4 py-2 text-xs bg-primary text-bg-dark hover:bg-primary-hover active:scale-[0.98] cursor-pointer"
			>
				Baixe agora
			</button>

			<button
				onclick={() => (isMenuOpen = !isMenuOpen)}
				class="lg:hidden p-2 rounded-lg text-text-secondary hover:text-text-light hover:bg-white/5 transition-fast cursor-pointer"
				aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
				aria-expanded={isMenuOpen}
			>
				{#if isMenuOpen}
					<X class="w-6 h-6" />
				{:else}
					<Menu class="w-6 h-6" />
				{/if}
			</button>
		</div>
	</div>

	{#if isMenuOpen}
		<div
			class="lg:hidden absolute top-full left-0 w-full bg-bg-dark/95 backdrop-blur-xl border-b border-border-gold/20 shadow-2xl"
		>
			<nav class="flex flex-col px-6 py-4 gap-1">
				{#each navLinks as link}
					<a
						href={link.href}
						onclick={closeMenu}
						class="px-4 py-3 rounded-xl text-sm text-text-secondary hover:text-text-light hover:bg-white/5 transition-fast"
					>
						{link.label}
					</a>
				{/each}
			</nav>
		</div>
	{/if}
</header>
