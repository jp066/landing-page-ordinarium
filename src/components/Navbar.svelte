<script lang="ts">
	import { Menu, X } from '@lucide/svelte';
	import { navItems } from '../lib/data';
	import { APP_URL } from '../lib/constants';
	import Button from './Button.svelte';

	let isScrolled = $state(true);
	let isMobileMenuOpen = $state(false);

	$effect(() => {
		const handleScroll = () => {
			isScrolled = window.scrollY > 20;
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});

	function toggleMobileMenu() {
		isMobileMenuOpen = !isMobileMenuOpen;
	}
</script>

<header
	class="fixed top-0 left-0 w-full z-50 transition-all duration-300 {isScrolled
		? 'py-4 bg-bg-dark/85 backdrop-blur-md border-b border-border-gold/30'
		: 'py-6 bg-bg-dark/60 border-b border-border-gold/10'}"
>
	<div class="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
		<!-- Logo -->
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
			<span class="font-gothic text-2xl font-bold tracking-wide text-primary"> Ordinarium </span>
		</a>

		<!-- Desktop Navigation -->
		<nav class="hidden lg:flex items-center gap-8">
			{#each navItems as item}
				<a
					href={item.href}
					{...item.target ? { target: item.target, rel: item.rel || 'noopener noreferrer' } : {}}
					class="font-sans text-sm text-text-secondary hover:text-text-light transition-fast relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] after:bg-primary hover:after:w-full after:transition-all"
				>
					{item.label}
				</a>
			{/each}
		</nav>

		<!-- Desktop Actions -->
		<div class="hidden lg:flex items-center gap-4">
			<Button href={APP_URL} variant="secondary" class="!px-4 !py-2 text-xs">
				Abrir aplicativo
			</Button>
			<Button href={APP_URL} variant="primary" class="!px-4 !py-2 text-xs">Começar agora</Button>
		</div>

		<!-- Mobile Menu Button -->
		<button
			class="lg:hidden text-text-light hover:text-primary transition-fast focus:outline-none"
			onclick={toggleMobileMenu}
			aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
		>
			{#if isMobileMenuOpen}
				<X class="w-6 h-6" />
			{:else}
				<Menu class="w-6 h-6" />
			{/if}
		</button>
	</div>
</header>

<!-- Mobile Navigation Drawer -->
{#if isMobileMenuOpen}
	<!-- Backdrop -->
	<div
		class="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
		onclick={toggleMobileMenu}
		onkeydown={(e) => e.key === 'Escape' && toggleMobileMenu()}
		role="presentation"
	></div>

	<!-- Drawer -->
	<div
		class="fixed top-0 right-0 w-80 h-full bg-bg-dark border-l border-border-gold/30 p-8 z-50 flex flex-col justify-between shadow-2xl lg:hidden animate-fade-in-up"
	>
		<div class="flex flex-col gap-8">
			<div class="flex items-center justify-between">
				<a href="/" class="flex items-center gap-2" onclick={toggleMobileMenu}>
					<div class="flex items-center justify-center w-8 h-8">
						<img
							src="/assets/favicon.png"
							alt="Emblema Ordinarium"
							class="w-7 h-7 object-contain"
						/>
					</div>
					<span class="font-gothic text-xl font-bold tracking-wide text-primary"> Ordinarium </span>
				</a>
				<button
					class="text-text-secondary hover:text-text-light transition-fast"
					onclick={toggleMobileMenu}
				>
					<X class="w-6 h-6" />
				</button>
			</div>

			<nav class="flex flex-col gap-5 mt-4">
				{#each navItems as item}
					<a
						href={item.href}
						{...item.target ? { target: item.target, rel: item.rel || 'noopener noreferrer' } : {}}
						class="font-sans text-base text-text-secondary hover:text-text-light transition-fast py-2 border-b border-white/5"
						onclick={toggleMobileMenu}
					>
						{item.label}
					</a>
				{/each}
			</nav>
		</div>

		<div class="flex flex-col gap-4 mt-8">
			<Button
				href={APP_URL}
				variant="secondary"
				class="w-full text-center"
				onclick={toggleMobileMenu}
			>
				Abrir aplicativo
			</Button>
			<Button
				href={APP_URL}
				variant="primary"
				class="w-full text-center"
				onclick={toggleMobileMenu}
			>
				Começar agora
			</Button>
		</div>
	</div>
{/if}
