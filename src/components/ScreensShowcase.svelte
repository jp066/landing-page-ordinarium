<script lang="ts">
	import { ChevronLeft, ChevronRight } from '@lucide/svelte';
	import SectionTitle from './SectionTitle.svelte';
	import { showcaseModules } from '../lib/data';

	let carouselEl = $state<HTMLDivElement>();

	// Stacked flashcards state
	let activeIndex = $state(0);
	let dismissingIndex = $state<number | null>(null);

	const benefits = [
		{
			num: '01.',
			title: 'Colaborativo',
			desc: 'O portal cresce e se mantém atualizado com a ajuda de fiéis e paróquias de todo o país, que enviam e revisam dados voluntariamente.'
		},
		{
			num: '02.',
			title: 'Dados Verificados',
			desc: 'Liturgias diárias e horários em total sintonia com o Calendário Litúrgico oficial da Igreja e orientações paroquiais.'
		},
		{
			num: '03.',
			title: 'Acesso Fácil',
			desc: 'Criado para ajudar você a encontrar de forma intuitiva horários de missas, confissões e adorações perto de onde você estiver.'
		}
	];

	function nextCard() {
		if (dismissingIndex !== null) return;
		const oldIndex = activeIndex;
		dismissingIndex = oldIndex;
		activeIndex = (activeIndex + 1) % 4;
		setTimeout(() => {
			dismissingIndex = null;
		}, 300);
	}

	function nextSlide() {
		if (carouselEl) {
			const cardWidth = carouselEl.firstElementChild?.clientWidth || 320;
			carouselEl.scrollBy({ left: cardWidth + 24, behavior: 'smooth' }); // card width + gap
		}
	}

	function prevSlide() {
		if (carouselEl) {
			const cardWidth = carouselEl.firstElementChild?.clientWidth || 320;
			carouselEl.scrollBy({ left: -(cardWidth + 24), behavior: 'smooth' }); // card width + gap
		}
	}
</script>

<section
	id="sobre"
	class="w-full py-24 bg-bg-light text-text-dark px-6 md:px-12 border-b border-border-gold/20 overflow-hidden"
>
	<div class="max-w-7xl mx-auto">
		<!-- prettier-ignore -->
		<SectionTitle
			supertitle=""
			title='De uma simples ideia para buscar confissões, nasceu o <span class="font-gothic text-xl font-bold tracking-wide text-primary">Ordinarium</span>'
			subtitle='Conheça a história, a missão e a proposta do <span class="font-gothic text-xl font-bold tracking-wide text-primary">Ordinarium</span> para a comunidade católica.'
			centered={true}
			theme="light"
		/>
		<!-- About the Project Info Block -->
		<div
			class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mt-12 mb-16 pb-16 border-b border-border-gold/20 text-left"
		>
			<div class="lg:col-span-7 flex flex-col justify-center">
				<p class="text-sm text-text-dark/75 leading-relaxed mb-4 font-sans">
					O que começou com a simples necessidade (e a raiva rsrs) de buscar horários de confissões
					cresceu e se tornou um companheiro espiritual completo. Hoje, o <span
						class="font-gothic text-xl font-bold tracking-wide text-primary">Ordinarium</span
					> é um portal independente e sem fins lucrativos que une liturgia diária, orações tradicionais
					e o diretório de paróquias para apoiar sua caminhada de fé todos os dias.
				</p>
				<p class="text-sm text-text-dark/75 leading-relaxed font-sans">
					Desenvolvido inteiramente por fiéis voluntários para servir às comunidades, o portal é
					totalmente gratuito e livre de anúncios. Nosso único propósito é colocar os meios digitais
					a serviço do anúncio do Evangelho, facilitando a oração e a busca pelos sacramentos na sua
					região.
				</p>
			</div>

			<div
				id="benefits"
				class="lg:col-span-5 flex flex-col items-center lg:items-start select-none"
			>
				<div class="relative w-full max-w-[340px] h-[220px]">
					{#each benefits as card, idx}
						{@const order = (idx - activeIndex + 4) % 4}
						{@const isDismissed = idx === dismissingIndex}

						<!-- svelte-ignore a11y_click_events_have_key_events -->
						<!-- svelte-ignore a11y_no_static_element_interactions -->
						<div
							onclick={nextCard}
							class="absolute inset-0 bg-[#FDFCF7] border border-primary/30 rounded-xl p-5 shadow-md hover:shadow-lg transition-all duration-300 ease-out cursor-pointer select-none"
							style="
								z-index: {isDismissed ? 50 : 40 - order};
								transform: {isDismissed
								? 'translateX(120%) rotate(8deg)'
								: `translateY(${order * 10}px) scale(${1 - order * 0.04})`};
								opacity: {isDismissed ? 0 : order > 2 ? 0 : 1 - order * 0.2};
								pointer-events: {order === 0 && dismissingIndex === null ? 'auto' : 'none'};
							"
						>
							<!-- Header -->
							<div class="flex items-center justify-between border-b border-primary/10 pb-2.5">
								<span class="font-mono text-xs font-bold text-primary">{card.num}</span>
							</div>
							<!-- Content -->
							<h4 class="text-base font-serif font-semibold text-text-dark mt-3.5">
								{card.title}
							</h4>
							<p class="text-[11px] text-text-dark/70 leading-relaxed font-sans mt-1.5">
								{card.desc}
							</p>
						</div>
					{/each}
				</div>

				<!-- Hint below the cards -->
				<button
					onclick={nextCard}
					class="mt-6 text-xs text-primary hover:text-primary-hover font-semibold flex items-center gap-1.5 transition-fast animate-pulse"
				>
					<span>Clique no card para passar</span>
					<svg viewBox="0 0 24 24" class="w-3.5 h-3.5 fill-none stroke-current" stroke-width="2">
						<path d="M5 12h14M12 5l7 7-7 7" />
					</svg>
				</button>
			</div>
		</div>

		<!-- Carousel Subheading -->
		<div class="text-center mb-8">
			<span class="text-xs font-semibold tracking-widest uppercase text-primary mb-2 block">
				Feito para <span class="font-bold">você</span>
			</span>
		</div>

		<!-- Carousel Container -->
		<div class="relative mt-4 group">
			<!-- Navigation Buttons -->
			<button
				class="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-white border border-border-gold/40 text-text-dark flex items-center justify-center shadow-lg hover:bg-primary hover:text-bg-dark hover:border-primary transition-all duration-300 -ml-4 lg:-ml-6 cursor-pointer"
				onclick={prevSlide}
				aria-label="Slide anterior"
			>
				<ChevronLeft class="w-6 h-6" />
			</button>

			<button
				class="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-white border border-border-gold/40 text-text-dark flex items-center justify-center shadow-lg hover:bg-primary hover:text-bg-dark hover:border-primary transition-all duration-300 -mr-4 lg:-mr-6 cursor-pointer"
				onclick={nextSlide}
				aria-label="Próximo slide"
			>
				<ChevronRight class="w-6 h-6" />
			</button>

			<!-- Outer Carousel Viewport -->
			<div class="w-full overflow-hidden px-1">
				<div
					bind:this={carouselEl}
					class="flex overflow-x-auto scroll-smooth gap-6 no-scrollbar snap-x snap-mandatory"
				>
					{#each showcaseModules as module}
						<!-- Slide Card -->
						<div
							class="w-[280px] sm:w-[320px] md:w-[340px] shrink-0 flex flex-col items-center bg-bg-light-card border border-border-gold/30 rounded-2xl p-5 shadow-md hover:shadow-xl hover:border-primary/50 transition-all duration-300 snap-start"
						>
							<!-- Mockup Image Wrapper (Actual Screenshot) -->
							<div
								class="w-full aspect-[4/3] rounded-xl overflow-hidden bg-bg-dark border border-border-gold/20 mb-5 relative group/img"
							>
								<img
									src={module.image}
									alt={module.name}
									class="w-full h-full object-cover object-top transition-transform duration-500 group-hover/img:scale-105"
								/>
							</div>

							<!-- Card Text Details -->
							<div class="w-full text-left">
								<h3 class="text-lg font-serif font-semibold text-text-dark mb-1">
									{module.name}
								</h3>
								<p class="text-xs text-text-dark/70 leading-relaxed min-h-[40px]">
									{module.description}
								</p>
							</div>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>
