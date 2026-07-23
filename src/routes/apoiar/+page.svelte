<script lang="ts">
	import { fade } from 'svelte/transition';
	import { Heart, X, Loader2, Check } from '@lucide/svelte';
	import Navbar from '../../components/Navbar.svelte';
	import Footer from '../../components/Footer.svelte';
	import SectionTitle from '../../components/SectionTitle.svelte';
	import SupportCard from '../../components/SupportCard.svelte';
	import { supportReasons } from '$lib/data';

	let isModalOpen = $state(false);
	let formSuccess = $state(false);
	let submitting = $state(false);

	let selectedAmount = $state<number | null>(null);
	let customAmount = $state('');
	let message = $state('');
	let paymentMethod = $state<'pix' | 'cartao'>('pix');

	const predefinedAmounts = [10, 25, 50, 100];

	function openModal() {
		isModalOpen = true;
		formSuccess = false;
		selectedAmount = null;
		customAmount = '';
		message = '';
		paymentMethod = 'pix';
	}

	function closeModal() {
		isModalOpen = false;
		formSuccess = false;
		selectedAmount = null;
		customAmount = '';
		message = '';
		paymentMethod = 'pix';
	}

	function selectAmount(value: number) {
		selectedAmount = value;
		customAmount = '';
	}

	function selectCustomAmount() {
		selectedAmount = null;
	}

	function handleSubmit(e: Event) {
		e.preventDefault();
		const hasValue = selectedAmount !== null || (customAmount && Number(customAmount) > 0);
		if (!hasValue) return;

		submitting = true;
		setTimeout(() => {
			submitting = false;
			formSuccess = true;
		}, 1500);
	}

	let effectiveAmount = $derived(
		selectedAmount !== null ? selectedAmount : Number(customAmount) || 0
	);
</script>

<svelte:head>
	<title>Apoiar o Ordinarium — Contribua com o projeto</title>
	<meta
		name="description"
		content="Ajude o Ordinarium a continuar existindo. Sua contribuição mantém servidores, desenvolvimento, inteligência artificial e conteúdos para católicos no Brasil."
	/>
	<meta name="robots" content="index, follow" />
	<link rel="canonical" href="https://ordinarium.com.br/apoiar" />

	<!-- Open Graph -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://ordinarium.com.br/apoiar" />
	<meta property="og:title" content="Apoiar o Ordinarium — Contribua com o projeto" />
	<meta
		property="og:description"
		content="Ajude o Ordinarium a continuar existindo. Sua contribuição mantém servidores, desenvolvimento, inteligência artificial e conteúdos para católicos no Brasil."
	/>
	<meta property="og:image" content="https://ordinarium.com.br/assets/image.png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:image:alt" content="Apoiar o Ordinarium" />
	<meta property="og:locale" content="pt_BR" />
	<meta property="og:site_name" content="Ordinarium" />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://ordinarium.com.br/apoiar" />
	<meta property="twitter:title" content="Apoiar o Ordinarium — Contribua com o projeto" />
	<meta
		property="twitter:description"
		content="Ajude o Ordinarium a continuar existindo. Sua contribuição mantém servidores, desenvolvimento, inteligência artificial e conteúdos para católicos no Brasil."
	/>
	<meta property="twitter:image" content="https://ordinarium.com.br/assets/image.png" />
</svelte:head>

<Navbar />

<main class="min-h-screen bg-bg-dark text-text-light pt-32 pb-24 px-6 md:px-12">
	<div class="max-w-5xl mx-auto flex flex-col gap-24">
		<!-- 1. Hero -->
		<section class="flex flex-col items-center text-center gap-8 animate-fade-in-up">
			<div
				class="w-14 h-14 rounded-full bg-primary-dim border border-border-gold/30 flex items-center justify-center"
			>
				<Heart class="w-6 h-6 text-primary" />
			</div>

			<div class="flex flex-col gap-4">
				<h1
					class="text-4xl md:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-gradient-gold leading-tight"
				>
					Apoie o Ordinarium
				</h1>
				<p class="max-w-2xl text-text-secondary text-base md:text-lg font-sans leading-relaxed">
					O Ordinarium é um projeto feito para servir. Sua ajuda financeira permite que ele continue
					existindo e evoluindo para milhares de católicos no Brasil.
				</p>
			</div>

			<button
				onclick={openModal}
				class="bg-primary hover:bg-primary-hover text-bg-dark font-sans font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-lg shadow-primary/15 hover:shadow-primary/25 hover:scale-[1.02] active:scale-95 cursor-pointer"
			>
				Quero apoiar o Ordinarium
			</button>
		</section>

		<!-- 2. Por que apoiar? -->
		<section class="flex flex-col gap-12">
			<SectionTitle
				supertitle="Por que apoiar"
				title="Como sua contribuição ajuda o projeto"
				subtitle="O Ordinarium depende de infraestrutura, desenvolvimento contínuo e recursos para manter uma experiência de qualidade. Cada contribuição faz diferença."
			/>

			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
				{#each supportReasons as reason}
					<SupportCard icon={reason.icon} title={reason.title} description={reason.description} />
				{/each}
			</div>
		</section>

		<!-- 3. Transparência -->
		<section class="flex flex-col gap-6">
			<div class="border-t border-border-gold/20 pt-16">
				<h2 class="text-2xl md:text-3xl font-serif font-medium text-text-light mb-6">
					Transparência
				</h2>
				<div class="text-text-secondary leading-relaxed space-y-4 max-w-3xl">
					<p>
						O Ordinarium é um projeto independente, desenvolvido com dedicação e cuidado para
						atender católicos que buscam viver melhor sua fé no dia a dia.
					</p>
					<p>
						As contribuições são utilizadas exclusivamente para manter o funcionamento do
						aplicativo, custear infraestrutura, desenvolver novos recursos e melhorar a experiência
						de quem usa o Ordinarium.
					</p>
					<p>
						Não há fins lucrativos envolvidos. Cada real recebido é direcionado para o prosperamento
						do projeto e de sua missão.
					</p>
				</div>
			</div>
		</section>

		<!-- 4. CTA Final -->
		<section
			class="bg-gradient-to-b from-bg-dark-card to-bg-dark border border-primary/20 rounded-[2.5rem] p-8 md:p-14 text-center flex flex-col items-center gap-6 shadow-xl relative overflow-hidden group"
		>
			<div
				class="absolute -top-24 -left-24 w-48 h-48 bg-primary/5 rounded-full blur-3xl pointer-events-none group-hover:bg-primary/10 transition-colors duration-500"
			></div>
			<div
				class="absolute -bottom-24 -right-24 w-48 h-48 bg-primary/5 rounded-full blur-3xl pointer-events-none group-hover:bg-primary/10 transition-colors duration-500"
			></div>

			<div class="bg-primary-dim p-4 rounded-full border border-border-gold/30 mb-2">
				<Heart class="w-6 h-6 text-primary" />
			</div>

			<div class="flex flex-col gap-3 relative">
				<h2 class="text-2xl md:text-3xl font-serif text-text-light font-bold">
					Toda contribuição ajuda
				</h2>
				<p class="max-w-lg text-text-secondary text-sm md:text-base leading-relaxed">
					Não importa o valor. O que importa é a intenção de apoiar um projeto que existe para
					servir a Igreja e os fiéis.
				</p>
			</div>

			<button
				onclick={openModal}
				class="bg-primary hover:bg-primary-hover text-bg-dark font-sans font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-lg shadow-primary/15 hover:shadow-primary/25 hover:scale-[1.02] active:scale-95 mt-2 relative cursor-pointer"
			>
				Quero apoiar o Ordinarium
			</button>
		</section>
	</div>
</main>

<Footer />

{#if isModalOpen}
	<!-- Backdrop -->
	<div
		onclick={closeModal}
		onkeydown={(e) => e.key === 'Escape' && closeModal()}
		role="presentation"
		transition:fade={{ duration: 200 }}
		class="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
	>
		<!-- Modal Content -->
		<div
			onclick={(e) => e.stopPropagation()}
			onkeydown={(e) => e.stopPropagation()}
			tabindex="-1"
			role="dialog"
			aria-labelledby="support-modal-title"
			class="bg-bg-dark-card border border-border-gold/30 rounded-[2.5rem] w-full max-w-lg overflow-hidden shadow-2xl relative"
		>
			<!-- Header -->
			<div class="p-6 md:p-8 border-b border-white/5 flex items-center justify-between">
				<h3 id="support-modal-title" class="text-xl font-serif text-text-light font-semibold">
					Apoiar o Ordinarium
				</h3>
				<button
					onclick={closeModal}
					class="text-text-secondary hover:text-text-light transition-fast cursor-pointer p-1 rounded-lg hover:bg-white/5"
					aria-label="Fechar"
				>
					<X class="w-5 h-5" />
				</button>
			</div>

			{#if formSuccess}
				<!-- Success State -->
				<div class="flex flex-col items-center justify-center py-14 px-6 text-center gap-4">
					<div
						class="w-14 h-14 rounded-full bg-primary-dim border border-primary flex items-center justify-center text-primary"
					>
						<Check class="w-6 h-6" />
					</div>
					<div class="flex flex-col gap-1.5">
						<h4 class="text-text-light font-semibold font-sans text-lg">
							Obrigado pelo seu apoio!
						</h4>
						<p class="text-text-secondary text-sm max-w-xs">
							Sua contribuição faz diferença para o futuro do Ordinarium.
						</p>
					</div>
					<button
						onclick={closeModal}
						class="mt-4 px-6 py-2.5 rounded-full border border-white/10 hover:bg-white/5 text-text-secondary hover:text-text-light font-sans font-medium text-sm transition-all duration-200 cursor-pointer"
					>
						Fechar
					</button>
				</div>
			{:else}
				<!-- Form -->
				<form onsubmit={handleSubmit} class="p-6 md:p-8 flex flex-col gap-6">
					<!-- Valor -->
					<div class="flex flex-col gap-3">
						<label
							for="amount"
							class="text-xs font-sans text-text-secondary uppercase tracking-wider font-semibold"
						>
							Valor
						</label>
						<div class="grid grid-cols-2 gap-2">
							{#each predefinedAmounts as amount}
								<button
									type="button"
									onclick={() => selectAmount(amount)}
									class="px-4 py-3 rounded-xl border text-sm font-sans font-medium transition-all duration-200 cursor-pointer {selectedAmount ===
									amount
										? 'bg-primary border-primary text-bg-dark'
										: 'border-border-gold/30 text-text-secondary hover:text-text-light hover:border-primary/40'}"
								>
									R$ {amount}
								</button>
							{/each}
						</div>
						<div class="flex items-center gap-3">
							<button
								type="button"
								onclick={selectCustomAmount}
								class="shrink-0 px-4 py-3 rounded-xl border text-sm font-sans font-medium transition-all duration-200 cursor-pointer {selectedAmount ===
								null
									? 'bg-primary border-primary text-bg-dark'
									: 'border-border-gold/30 text-text-secondary hover:text-text-light hover:border-primary/40'}"
							>
								Outro
							</button>
							{#if selectedAmount === null}
								<input
									type="number"
									id="amount"
									bind:value={customAmount}
									placeholder="Digite o valor"
									min="1"
									class="w-full bg-bg-dark border border-border-gold/30 rounded-xl px-4 py-3 text-text-light font-sans text-sm focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/60 transition-all duration-200"
								/>
							{/if}
						</div>
					</div>

					<!-- Mensagem -->
					<div class="flex flex-col gap-2">
						<label
							for="message"
							class="text-xs font-sans text-text-secondary uppercase tracking-wider font-semibold"
						>
							Mensagem <span class="normal-case opacity-60">(opcional)</span>
						</label>
						<textarea
							id="message"
							bind:value={message}
							placeholder="Deixe uma mensagem de apoio ao projeto..."
							rows="3"
							maxlength="300"
							class="bg-bg-dark border border-border-gold/30 rounded-xl px-4 py-3.5 text-text-light font-sans text-sm focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/60 transition-all duration-200 resize-none"
						></textarea>
					</div>

					<!-- Forma de Pagamento -->
					<div class="flex flex-col gap-3">
						<span
							class="text-xs font-sans text-text-secondary uppercase tracking-wider font-semibold"
						>
							Forma de Pagamento
						</span>
						<div class="flex gap-3">
							<button
								type="button"
								onclick={() => (paymentMethod = 'pix')}
								class="flex-1 px-4 py-3 rounded-xl border text-sm font-sans font-medium transition-all duration-200 cursor-pointer {paymentMethod ===
								'pix'
									? 'bg-primary border-primary text-bg-dark'
									: 'border-border-gold/30 text-text-secondary hover:text-text-light hover:border-primary/40'}"
							>
								Pix
							</button>
							<button
								type="button"
								onclick={() => (paymentMethod = 'cartao')}
								class="flex-1 px-4 py-3 rounded-xl border text-sm font-sans font-medium transition-all duration-200 cursor-pointer {paymentMethod ===
								'cartao'
									? 'bg-primary border-primary text-bg-dark'
									: 'border-border-gold/30 text-text-secondary hover:text-text-light hover:border-primary/40'}"
							>
								Cartão de crédito
							</button>
						</div>
					</div>

					<!-- Submit -->
					<button
						type="submit"
						disabled={submitting || effectiveAmount <= 0}
						class="bg-primary hover:bg-primary-hover disabled:bg-primary/50 text-bg-dark disabled:text-bg-dark/70 font-sans font-semibold px-7 py-3 rounded-full transition-all duration-200 shadow-md shadow-primary/10 hover:shadow-primary/20 flex items-center justify-center gap-2 cursor-pointer text-sm mt-2"
					>
						{#if submitting}
							<Loader2 class="w-4 h-4 animate-spin" />
							<span>Processando...</span>
						{:else}
							<span>Confirmar apoio</span>
						{/if}
					</button>
				</form>
			{/if}
		</div>
	</div>
{/if}
