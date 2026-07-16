<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import SectionTitle from './SectionTitle.svelte';

	const features = [
		{
			title: 'Liturgia Diária',
			description:
				'Acompanhe as leituras, salmos e orações litúrgicas de cada dia de forma prática e limpa.',
			image: '/assets/liturgia-mobile.png',
			alt: 'Tela de Liturgia Diária'
		},
		{
			title: 'Paróquias e Horários',
			description:
				'Encontre horários de missas, confissões e adorações das comunidades mais próximas de você.',
			image: '/assets/paroquias-mobile.png',
			alt: 'Tela de Paróquias'
		},
		{
			title: 'Orações e Novenas',
			description:
				'Acesse um rico acervo de orações tradicionais e novenas para nutrir seu hábito diário de orar.',
			image: '/assets/oracoes-mobile.png',
			alt: 'Tela de Orações'
		},
		{
			title: 'Roteiros de Confissão',
			description:
				'Prepare-se bem para o sacramento da Reconciliação com um exame de consciência passo a passo.',
			image: '/assets/exame-mobile.png',
			alt: 'Tela de Exame de Consciência'
		}
	];

	let activeIndex = $state(0);
	let intervalId: any;

	function startAutoplay() {
		stopAutoplay();
		intervalId = setInterval(() => {
			activeIndex = (activeIndex + 1) % features.length;
		}, 4000);
	}

	function stopAutoplay() {
		if (intervalId) clearInterval(intervalId);
	}

	function setActive(index: number) {
		activeIndex = index;
		stopAutoplay();
	}

	onMount(() => {
		startAutoplay();
	});

	onDestroy(() => {
		stopAutoplay();
	});
</script>

<section
	id="sobre"
	class="w-full py-24 bg-bg-light text-text-dark px-6 md:px-12 overflow-hidden border-t border-border-gold/15"
>
	<div class="max-w-6xl mx-auto">
		<SectionTitle
			supertitle=""
			title="Sua vida de oração em um só lugar"
			subtitle="No Ordinarium, você encontra tudo o que precisa para viver sua vida litúrgica com profundidade."
			centered={true}
			theme="light"
		/>

		<!-- Three Column Layout -->
		<div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mt-16">
			<!-- Column 1 (Left Features) -->
			<div class="lg:col-span-4 flex flex-col gap-6 order-2 lg:order-1">
				<!-- Feature 1 -->
				<button
					type="button"
					class="text-left p-6 rounded-2xl border transition-all duration-300 cursor-pointer focus:outline-none {activeIndex ===
					0
						? 'bg-white border-border-gold/30 shadow-md translate-x-2'
						: 'border-transparent opacity-60 hover:opacity-100 hover:translate-x-1'}"
					onmouseenter={() => setActive(0)}
					onmouseleave={startAutoplay}
					onclick={() => setActive(0)}
				>
					<h3
						class="text-lg font-serif font-semibold text-text-dark mb-2 transition-colors duration-200 {activeIndex ===
						0
							? 'text-primary'
							: ''}"
					>
						{features[0].title}
					</h3>
					<p class="text-sm text-text-dark/70 leading-relaxed font-sans">
						{features[0].description}
					</p>
				</button>

				<!-- Feature 2 -->
				<button
					type="button"
					class="text-left p-6 rounded-2xl border transition-all duration-300 cursor-pointer focus:outline-none {activeIndex ===
					1
						? 'bg-white border-border-gold/30 shadow-md translate-x-2'
						: 'border-transparent opacity-60 hover:opacity-100 hover:translate-x-1'}"
					onmouseenter={() => setActive(1)}
					onmouseleave={startAutoplay}
					onclick={() => setActive(1)}
				>
					<h3
						class="text-lg font-serif font-semibold text-text-dark mb-2 transition-colors duration-200 {activeIndex ===
						1
							? 'text-primary'
							: ''}"
					>
						{features[1].title}
					</h3>
					<p class="text-sm text-text-dark/70 leading-relaxed font-sans">
						{features[1].description}
					</p>
				</button>
			</div>

			<!-- Column 2 (Center Mockup) -->
			<div class="lg:col-span-4 flex justify-center order-1 lg:order-2 py-8 lg:py-0">
				<!-- Phone Mockup Container -->
				<div
					class="relative w-[280px] h-[570px] bg-[#0b0b0c] rounded-[48px] p-3 shadow-2xl border-4 border-[#131315] outline outline-1 outline-border-gold/25"
				>
					<!-- Notch / Dynamic Island -->
					<div
						class="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-6 bg-[#0b0b0c] rounded-full z-20 flex items-center justify-center"
					>
						<div class="w-3 h-3 bg-neutral-900 rounded-full ml-auto mr-4"></div>
					</div>

					<!-- Screen Wrapper -->
					<div class="relative w-full h-full rounded-[38px] overflow-hidden bg-[#131315]">
						{#each features as feature, idx}
							<img
								src={feature.image}
								alt={feature.alt}
								class="absolute inset-0 w-full h-full object-cover object-top transition-all duration-700 ease-in-out {activeIndex ===
								idx
									? 'opacity-100 scale-100 pointer-events-auto'
									: 'opacity-0 scale-95 pointer-events-none'}"
							/>
						{/each}
					</div>
				</div>
			</div>

			<!-- Column 3 (Right Features) -->
			<div class="lg:col-span-4 flex flex-col gap-6 order-3">
				<!-- Feature 3 -->
				<button
					type="button"
					class="text-left p-6 rounded-2xl border transition-all duration-300 cursor-pointer focus:outline-none {activeIndex ===
					2
						? 'bg-white border-border-gold/30 shadow-md -translate-x-2'
						: 'border-transparent opacity-60 hover:opacity-100 hover:-translate-x-1'}"
					onmouseenter={() => setActive(2)}
					onmouseleave={startAutoplay}
					onclick={() => setActive(2)}
				>
					<h3
						class="text-lg font-serif font-semibold text-text-dark mb-2 transition-colors duration-200 {activeIndex ===
						2
							? 'text-primary'
							: ''}"
					>
						{features[2].title}
					</h3>
					<p class="text-sm text-text-dark/70 leading-relaxed font-sans">
						{features[2].description}
					</p>
				</button>

				<!-- Feature 4 -->
				<button
					type="button"
					class="text-left p-6 rounded-2xl border transition-all duration-300 cursor-pointer focus:outline-none {activeIndex ===
					3
						? 'bg-white border-border-gold/30 shadow-md -translate-x-2'
						: 'border-transparent opacity-60 hover:opacity-100 hover:-translate-x-1'}"
					onmouseenter={() => setActive(3)}
					onmouseleave={startAutoplay}
					onclick={() => setActive(3)}
				>
					<h3
						class="text-lg font-serif font-semibold text-text-dark mb-2 transition-colors duration-200 {activeIndex ===
						3
							? 'text-primary'
							: ''}"
					>
						{features[3].title}
					</h3>
					<p class="text-sm text-text-dark/70 leading-relaxed font-sans">
						{features[3].description}
					</p>
				</button>
			</div>
		</div>
	</div>
</section>
