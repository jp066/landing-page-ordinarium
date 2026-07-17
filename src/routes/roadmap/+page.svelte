<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import { SvelteSet } from 'svelte/reactivity';
	import { Heart, X, Loader2, Sparkles, Plus, Check } from '@lucide/svelte';
	import Navbar from '../../components/Navbar.svelte';
	import Footer from '../../components/Footer.svelte';
	import { supabase } from '../../lib/supabase';

	// Static descriptions for predefined items
	const PREDEFINED_DESCRIPTIONS: Record<string, string> = {
		'IA Leo por voz':
			'Converse com o Leo, o assistente virtual do Ordinarium, usando comandos de voz em linguagem natural para consultas litúrgicas.',
		'Diário espiritual':
			'Registre suas meditações, resoluções de oração e graças recebidas ao longo do dia, integrado com a liturgia.',
		Widgets:
			'Acesse a liturgia diária, versículo do dia e o santo de hoje diretamente na tela inicial do seu dispositivo.',
		'Modo offline':
			'Consulte orações tradicionais, a liturgia diária e suas paróquias favoritas mesmo quando estiver sem internet.',
		'Notificações personalizadas':
			'Receba lembretes diários para seus momentos de oração, missas de preceito e horários de confissões na sua paróquia.'
	};

	interface RoadmapItem {
		id: string;
		title: string;
		status: string;
		order: number;
		created_at: string;
	}

	let items = $state<RoadmapItem[]>([]);
	const userVotedItems = new SvelteSet<string>();
	let voteCounts = $state<Record<string, number>>({});
	let loading = $state(true);
	let submitting = $state(false);
	let isModalOpen = $state(false);
	let anonymousId = $state('');

	// Form
	let suggestionTitle = $state('');
	let suggestionDescription = $state('');
	let formSuccess = $state(false);
	let errorMessage = $state('');

	onMount(async () => {
		// Initialize anonymous ID
		let storedId = localStorage.getItem('ordinarium_roadmap_anon_id');
		if (!storedId) {
			storedId = crypto.randomUUID
				? crypto.randomUUID()
				: Math.random().toString(36).substring(2) + Date.now().toString(36);
			localStorage.setItem('ordinarium_roadmap_anon_id', storedId);
		}
		anonymousId = storedId;

		await fetchData();
	});

	async function fetchData() {
		try {
			loading = true;

			// Fetch roadmap items
			const { data: dbItems, error: itemsError } = await supabase
				.from('roadmap_items')
				.select('*')
				.order('order', { ascending: true });

			if (itemsError) throw itemsError;

			// Fetch all votes to count
			const { data: dbVotes, error: votesError } = await supabase
				.from('roadmap_votes')
				.select('item_id');

			if (votesError) throw votesError;

			// Count votes
			const counts: Record<string, number> = {};
			dbVotes?.forEach((v) => {
				counts[v.item_id] = (counts[v.item_id] || 0) + 1;
			});
			voteCounts = counts;

			// Fetch current user's votes
			const { data: myVotes, error: myVotesError } = await supabase
				.from('roadmap_votes')
				.select('item_id')
				.eq('anonymous_id', anonymousId);

			if (myVotesError) throw myVotesError;

			userVotedItems.clear();
			myVotes?.forEach((v) => userVotedItems.add(v.item_id));
			items = dbItems || [];
		} catch (err) {
			console.error(
				'Error fetching roadmap data:',
				err instanceof Error ? err.message : String(err)
			);
		} finally {
			loading = false;
		}
	}

	async function toggleVote(itemId: string) {
		const hasVoted = userVotedItems.has(itemId);
		const item = items.find((i) => i.id === itemId);
		const originalStatus = item ? item.status : '';

		// Optimistic UI updates
		if (hasVoted) {
			userVotedItems.delete(itemId);
			voteCounts[itemId] = Math.max(0, (voteCounts[itemId] || 0) - 1);
		} else {
			userVotedItems.add(itemId);
			voteCounts[itemId] = (voteCounts[itemId] || 0) + 1;
			if (item && voteCounts[itemId] > 10 && item.status === 'most_requested') {
				item.status = 'in_development';
			}
		}
		// Force svelte reactivity for voteCounts object
		voteCounts = { ...voteCounts };

		try {
			if (hasVoted) {
				const { error } = await supabase
					.from('roadmap_votes')
					.delete()
					.eq('item_id', itemId)
					.eq('anonymous_id', anonymousId);
				if (error) throw error;
			} else {
				const { error } = await supabase
					.from('roadmap_votes')
					.insert({ item_id: itemId, anonymous_id: anonymousId });
				if (error) throw error;
			}
		} catch (err) {
			console.error('Error updating vote:', err instanceof Error ? err.message : String(err));
			// Revert on error
			if (hasVoted) {
				userVotedItems.add(itemId);
				voteCounts[itemId] = (voteCounts[itemId] || 0) + 1;
			} else {
				userVotedItems.delete(itemId);
				voteCounts[itemId] = Math.max(0, (voteCounts[itemId] || 0) - 1);
				if (item) {
					item.status = originalStatus;
				}
			}
			voteCounts = { ...voteCounts };
			alert('Ocorreu um erro ao processar seu voto. Tente novamente.');
		}
	}

	async function submitSuggestion(e: Event) {
		e.preventDefault();
		if (!suggestionTitle.trim()) return;

		submitting = true;
		errorMessage = '';

		try {
			// Find max order to place at the end
			const maxOrder = items.length > 0 ? Math.max(...items.map((i) => i.order || 0)) : 0;

			// Insert into roadmap_items (new suggestion starts as 'most_requested')
			const { data: newItem, error: insertError } = await supabase
				.from('roadmap_items')
				.insert({
					title: suggestionTitle.trim(),
					status: 'most_requested',
					order: maxOrder + 1
				})
				.select()
				.single();

			if (insertError) throw insertError;

			// Automatically vote on their own suggestion
			if (newItem) {
				const { error: voteError } = await supabase.from('roadmap_votes').insert({
					item_id: newItem.id,
					anonymous_id: anonymousId
				});

				if (voteError) {
					console.error('Failed to auto-vote on suggestion:', voteError);
				}
			}

			formSuccess = true;
			suggestionTitle = '';
			suggestionDescription = '';

			// Refresh data to show new item
			await fetchData();

			setTimeout(() => {
				closeModal();
			}, 2000);
		} catch (err) {
			console.error(
				'Error submitting suggestion:',
				err instanceof Error ? err.message : String(err)
			);
			errorMessage = 'Ocorreu um erro ao enviar sua sugestão. Tente novamente.';
		} finally {
			submitting = false;
		}
	}

	function openModal() {
		isModalOpen = true;
		formSuccess = false;
		errorMessage = '';
	}

	function closeModal() {
		isModalOpen = false;
		suggestionTitle = '';
		suggestionDescription = '';
		formSuccess = false;
		errorMessage = '';
	}

	// Derived state
	let inDevelopmentItems = $derived(items.filter((item) => item.status === 'in_development'));

	let mostRequestedItems = $derived(
		items
			.filter((item) => item.status === 'most_requested')
			.sort((a, b) => {
				const votesA = voteCounts[a.id] || 0;
				const votesB = voteCounts[b.id] || 0;
				if (votesB !== votesA) {
					return votesB - votesA; // Sort by vote count descending
				}
				return (a.order || 0) - (b.order || 0); // fallback to order
			})
	);
</script>

<svelte:head>
	<title>Roadmap de Funcionalidades — Ordinarium</title>
	<meta
		name="description"
		content="Acompanhe o planejamento de novidades do Ordinarium. Vote nas funcionalidades mais desejadas e envie suas próprias sugestões."
	/>
	<link rel="canonical" href="https://ordinarium.com.br/roadmap" />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://ordinarium.com.br/roadmap" />
	<meta property="og:title" content="Roadmap de Funcionalidades — Ordinarium" />
	<meta
		property="og:description"
		content="Acompanhe o planejamento de novidades do Ordinarium. Vote nas funcionalidades mais desejadas e envie suas próprias sugestões."
	/>
	<meta property="og:image" content="https://ordinarium.com.br/assets/image.png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:image:alt" content="Roadmap Ordinarium" />
	<meta property="og:locale" content="pt_BR" />
	<meta property="og:site_name" content="Ordinarium" />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://ordinarium.com.br/roadmap" />
	<meta property="twitter:title" content="Roadmap de Funcionalidades — Ordinarium" />
	<meta
		property="twitter:description"
		content="Acompanhe o planejamento de novidades do Ordinarium. Vote nas funcionalidades mais desejadas e envie suas próprias sugestões."
	/>
	<meta property="twitter:image" content="https://ordinarium.com.br/assets/image.png" />
</svelte:head>

<Navbar />

<main
	class="min-h-screen bg-bg-dark text-text-light pt-32 pb-24 px-6 md:px-12 flex flex-col items-center"
>
	<div class="max-w-6xl w-full flex flex-col gap-16">
		<!-- Cabeçalho -->
		<header class="text-center flex flex-col gap-4 animate-fade-in-up">
			<h1 class="text-4xl md:text-5xl font-serif text-gradient-gold font-bold tracking-tight">
				Conte o que está faltando!
			</h1>
			<p
				class="max-w-2xl mx-auto text-text-secondary text-base md:text-lg font-sans leading-relaxed"
			>
				O Ordinarium está sendo construído junto com a comunidade. Vote nas funcionalidades que você
				mais deseja e envie novas ideias.
			</p>
		</header>

		{#if loading}
			<!-- Loading state -->
			<div class="flex flex-col items-center justify-center py-24 gap-4">
				<Loader2 class="w-8 h-8 text-primary animate-spin" />
				<p class="text-text-secondary text-sm">Carregando funcionalidades...</p>
			</div>
		{:else}
			<div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
				<!-- Seção Em Desenvolvimento -->
				<section class="flex flex-col gap-6">
					<div class="flex items-center gap-3">
						<div class="relative flex h-3 w-3">
							<span
								class="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"
							></span>
							<span class="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
						</div>
						<h2 class="text-xl font-serif text-text-light font-semibold tracking-wide">
							Em desenvolvimento
						</h2>
					</div>

					{#if inDevelopmentItems.length === 0}
						<div
							class="bg-bg-dark-card border border-border-gold/20 rounded-[2rem] p-8 text-center text-text-secondary text-sm"
						>
							Nenhuma funcionalidade em desenvolvimento no momento.
						</div>
					{:else}
						<div class="flex flex-col gap-4">
							{#each inDevelopmentItems as item (item.id)}
								<div
									class="bg-bg-dark-card border border-border-gold/15 rounded-[2rem] p-6 md:p-8 flex flex-col justify-between gap-4 hover:border-primary/40 hover:-translate-y-0.5 transition-all duration-300"
								>
									<div class="flex flex-col gap-3">
										<div class="flex justify-between items-start gap-4">
											<h3 class="text-lg font-sans font-semibold text-text-light">
												{item.title}
											</h3>
											<span
												class="text-[10px] md:text-xs font-semibold px-3 py-1 rounded-full bg-primary-dim text-primary border border-border-gold/20 whitespace-nowrap"
											>
												Em progresso
											</span>
										</div>
										<p class="text-text-secondary text-sm leading-relaxed">
											{PREDEFINED_DESCRIPTIONS[item.title] ||
												'Funcionalidade em desenvolvimento pelo time do Ordinarium.'}
										</p>
									</div>
								</div>
							{/each}
						</div>
					{/if}
				</section>

				<!-- Seção Mais Pedidos -->
				<section class="flex flex-col gap-6">
					<div class="flex items-center gap-3">
						<h2 class="text-xl font-serif text-text-light font-semibold tracking-wide">
							Mais pedidos
						</h2>
					</div>

					{#if mostRequestedItems.length === 0}
						<div
							class="bg-bg-dark-card border border-border-gold/20 rounded-[2rem] p-8 text-center text-text-secondary text-sm"
						>
							Nenhuma sugestão enviada ainda. Seja o primeiro a sugerir!
						</div>
					{:else}
						<div class="flex flex-col gap-4">
							{#each mostRequestedItems as item (item.id)}
								<div
									class="bg-bg-dark-card border border-border-gold/15 rounded-[2rem] p-6 md:p-8 flex items-center justify-between gap-6 hover:border-primary/40 transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.15)]"
								>
									<div class="flex flex-col gap-2 max-w-[70%]">
										<h3 class="text-lg font-sans font-semibold text-text-light">
											{item.title}
										</h3>
										<p class="text-text-secondary text-sm leading-relaxed">
											{PREDEFINED_DESCRIPTIONS[item.title] ||
												'Sugestão enviada pela comunidade do Ordinarium.'}
										</p>
									</div>

									<!-- Botão de Votar -->
									<button
										onclick={() => toggleVote(item.id)}
										class="flex items-center gap-2.5 px-5 py-2.5 rounded-full border text-sm transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer {userVotedItems.has(
											item.id
										)
											? 'bg-primary border-primary text-bg-dark font-semibold shadow-lg shadow-primary/20'
											: 'bg-transparent border-border-gold/50 text-text-secondary hover:text-text-light hover:border-primary/50'}"
										aria-label="Votar em {item.title}"
									>
										<Heart
											class="w-4 h-4 transition-transform duration-300 {userVotedItems.has(item.id)
												? 'fill-current scale-110'
												: 'fill-transparent'}"
										/>
										<span class="tabular-nums">{voteCounts[item.id] || 0}</span>
									</button>
								</div>
							{/each}
						</div>
					{/if}
				</section>
			</div>
		{/if}

		<!-- Seção CTA Final: Tem uma ideia? -->
		<section
			class="bg-gradient-to-b from-bg-dark-card to-bg-dark border border-primary/20 rounded-[2.5rem] p-8 md:p-14 text-center flex flex-col items-center gap-6 shadow-xl relative overflow-hidden group"
		>
			<!-- Glow decorativo -->
			<div
				class="absolute -top-24 -left-24 w-48 h-48 bg-primary/5 rounded-full blur-3xl pointer-events-none group-hover:bg-primary/10 transition-colors duration-500"
			></div>
			<div
				class="absolute -bottom-24 -right-24 w-48 h-48 bg-primary/5 rounded-full blur-3xl pointer-events-none group-hover:bg-primary/10 transition-colors duration-500"
			></div>

			<div class="bg-primary-dim p-4 rounded-full border border-border-gold/30 mb-2">
				<Plus class="w-6 h-6 text-primary" />
			</div>

			<div class="flex flex-col gap-3">
				<h2 class="text-2xl md:text-3xl font-serif text-text-light font-bold">Tem uma ideia?</h2>
				<p class="max-w-lg text-text-secondary text-sm md:text-base leading-relaxed">
					Não encontrou o que procura? Envie sua sugestão. Nós lemos todas elas e as mais votadas
					entram no planejamento.
				</p>
			</div>

			<button
				onclick={openModal}
				class="bg-primary hover:bg-primary-hover text-bg-dark font-sans font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-lg shadow-primary/15 hover:shadow-primary/25 hover:scale-[1.02] active:scale-95 cursor-pointer mt-2"
			>
				Enviar sugestão
			</button>
		</section>
	</div>
</main>

<Footer />

<!-- Modal / Drawer -->
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
			aria-labelledby="modal-title"
			class="bg-bg-dark-card border border-border-gold/30 rounded-[2.5rem] w-full max-w-lg overflow-hidden shadow-2xl relative"
		>
			<!-- Header -->
			<div class="p-6 md:p-8 border-b border-white/5 flex items-center justify-between">
				<h3 id="modal-title" class="text-xl font-serif text-text-light font-semibold">
					Enviar Sugestão
				</h3>
				<button
					onclick={closeModal}
					class="text-text-secondary hover:text-text-light transition-fast cursor-pointer p-1 rounded-lg hover:bg-white/5"
					aria-label="Fechar"
				>
					<X class="w-5 h-5" />
				</button>
			</div>

			<!-- Form -->
			<form onsubmit={submitSuggestion} class="p-6 md:p-8 flex flex-col gap-6">
				{#if formSuccess}
					<div class="flex flex-col items-center justify-center py-10 text-center gap-4">
						<div
							class="w-14 h-14 rounded-full bg-primary-dim border border-primary flex items-center justify-center text-primary"
						>
							<Check class="w-6 h-6" />
						</div>
						<div class="flex flex-col gap-1.5">
							<h4 class="text-text-light font-semibold font-sans text-lg">Sugestão enviada!</h4>
							<p class="text-text-secondary text-sm max-w-xs">
								Obrigado por nos ajudar a construir o Ordinarium.
							</p>
						</div>
					</div>
				{:else}
					<div class="flex flex-col gap-2">
						<label
							for="title"
							class="text-xs font-sans text-text-secondary uppercase tracking-wider font-semibold"
						>
							Título da sugestão
						</label>
						<input
							type="text"
							id="title"
							bind:value={suggestionTitle}
							required
							placeholder="Ex: Calendário Litúrgico Tradicional"
							maxlength="100"
							class="bg-bg-dark border border-border-gold/30 rounded-xl px-4 py-3.5 text-text-light font-sans text-sm focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/60 transition-all duration-200"
						/>
					</div>

					<div class="flex flex-col gap-2">
						<label
							for="description"
							class="text-xs font-sans text-text-secondary uppercase tracking-wider font-semibold"
						>
							Descrição (opcional)
						</label>
						<textarea
							id="description"
							bind:value={suggestionDescription}
							placeholder="Descreva detalhadamente o que você gostaria de ver e como isso ajudaria sua vida litúrgica."
							rows="4"
							maxlength="300"
							class="bg-bg-dark border border-border-gold/30 rounded-xl px-4 py-3.5 text-text-light font-sans text-sm focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/60 transition-all duration-200 resize-none"
						></textarea>
					</div>

					{#if errorMessage}
						<p
							class="text-red-400 text-xs font-sans bg-red-500/5 border border-red-500/10 p-3 rounded-lg"
						>
							{errorMessage}
						</p>
					{/if}

					<div class="flex justify-end gap-3 mt-4">
						<button
							type="button"
							onclick={closeModal}
							class="px-6 py-3 rounded-full border border-white/10 hover:bg-white/5 text-text-secondary hover:text-text-light font-sans font-medium text-sm transition-all duration-200 cursor-pointer"
						>
							Cancelar
						</button>
						<button
							type="submit"
							disabled={submitting || !suggestionTitle.trim()}
							class="bg-primary hover:bg-primary-hover disabled:bg-primary/50 text-bg-dark disabled:text-bg-dark/70 font-sans font-semibold px-7 py-3 rounded-full transition-all duration-200 shadow-md shadow-primary/10 hover:shadow-primary/20 flex items-center gap-2 cursor-pointer text-sm"
						>
							{#if submitting}
								<Loader2 class="w-4 h-4 animate-spin" />
								<span>Enviando...</span>
							{:else}
								<span>Enviar</span>
							{/if}
						</button>
					</div>
				{/if}
			</form>
		</div>
	</div>
{/if}
