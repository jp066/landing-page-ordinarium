<script lang="ts">
	import { fly } from 'svelte/transition';
	import { Loader2, Check, ArrowRight } from '@lucide/svelte';

	let email = $state('');
	let status: 'idle' | 'loading' | 'success' | 'error' = $state('idle');
	let errorMessage = $state('');

	async function handleSubmit(e: SubmitEvent) {
		e.preventDefault();

		if (!email.trim()) return;

		status = 'loading';
		errorMessage = '';

		try {
			const res = await fetch('/api/waitlist', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ email: email.trim() })
			});

			const data = await res.json();

			if (res.ok) {
				status = 'success';
				email = '';
			} else {
				status = 'error';
				errorMessage = data.error || 'Algo deu errado. Tente novamente.';
			}
		} catch {
			status = 'error';
			errorMessage = 'Erro de conexão. Tente novamente.';
		}
	}
</script>

<section id="waitlist" class="w-full py-16 px-6 md:px-12 bg-bg-light">
	<div class="max-w-3xl mx-auto text-center">
		<h2 class="text-2xl md:text-3xl font-serif font-medium text-text-dark mb-3">
			Garanta seu acesso antecipado exclusivo ao <span class="font-gothic">Ordinarium</span>
		</h2>
		<p class="text-sm text-text-dark/80 mb-8">
			Inscreva-se na lista de espera abaixo e garanta acesso a versão beta do Aplicativo!
		</p>

		{#if status === 'success'}
			<div class="flex flex-col items-center gap-6" transition:fly={{ y: 8, duration: 300 }}>
				<div
					class="inline-flex items-center gap-2 px-6 py-4 rounded-2xl bg-green-50 border border-green-200 text-green-700 text-sm"
				>
					<Check class="w-5 h-5 shrink-0" />
					Obrigado! Você está na lista de espera.
				</div>
				<a
					href="/roadmap"
					class="inline-flex items-center gap-1.5 text-sm text-primary hover:text-primary-hover transition-fast font-medium"
				>
					Conheça as novidades em desenvolvimento
					<ArrowRight class="w-4 h-4" />
				</a>
			</div>
		{:else}
			<form onsubmit={handleSubmit} class="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
				<input
					type="email"
					required
					placeholder="seu@email.com"
					bind:value={email}
					disabled={status === 'loading'}
					class="flex-1 px-5 py-3.5 rounded-full border border-gray-200 bg-gray-50 text-text-dark text-sm placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:border-primary transition-fast disabled:opacity-50"
				/>
				<button
					type="submit"
					disabled={status === 'loading'}
					class="px-7 py-3.5 rounded-full bg-primary text-bg-dark text-sm font-semibold hover:bg-primary-hover active:scale-[0.98] transition-fast disabled:opacity-50 disabled:pointer-events-none cursor-pointer whitespace-nowrap inline-flex items-center gap-2"
				>
					{#if status === 'loading'}
						<Loader2 class="w-4 h-4 animate-spin" />
						<span>Enviando...</span>
					{:else}
						<span>Entrar na lista de espera</span>
					{/if}
				</button>
			</form>

			<p class="mt-4 text-xs text-text-dark/60">
				Seus dados não serão compartilhados. Apenas usaremos seu e-mail para avisar sobre o lançamento.
			</p>
		{/if}

		{#if status === 'error' && errorMessage}
			<p class="mt-4 text-xs text-red-500" transition:fly={{ y: 4, duration: 200 }}>
				{errorMessage}
			</p>
		{/if}
	</div>
</section>
