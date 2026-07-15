<script lang="ts">
	import SectionTitle from './SectionTitle.svelte';

	const features = [
		{
			title: 'Liturgia Diária',
			description:
				'Acompanhe as leituras, salmos e celebrações do dia, segundo o calendário litúrgico da Igreja.',
			image: '/assets/liturgia.png',
			alt: 'Tela de Liturgia Diária'
		},
		{
			title: 'Paróquias',
			description:
				'Encontre paróquias perto de você com contatos, endereços, horários de missas e mapas integrados.',
			image: '/assets/paroquias.png',
			alt: 'Tela de Paróquias'
		},
		{
			title: 'Orações',
			description:
				'Acesse orações tradicionais, novenas e conteúdos de espiritualidade para alimentar sua vida de oração.',
			image: '/assets/oracoes.png',
			alt: 'Tela de Orações'
		},
		{
			title: 'Exame de Consciência',
			description:
				'Prepare-se para uma boa confissão com um roteiro guiado, passo a passo, baseado nos ensinamentos da Igreja.',
			image: '/assets/exame.png',
			alt: 'Tela de Exame de Consciência'
		}
	];
</script>

<section class="w-full py-24 bg-bg-light px-6 md:px-12">
	<div class="max-w-6xl mx-auto">
		<SectionTitle
			title="Descubra tudo que o Ordinarium oferece"
			subtitle="Todo o conteúdo é baseado no calendário litúrgico e em fontes confiáveis da Igreja Católica."
			centered={false}
			theme="light"
		/>

		<!-- Bento Grid Layout -->
		<div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-16">
			<!-- Column 1: Liturgia Diária (Tall Card) -->
			<div
				class="group bg-white border border-border-gold/20 hover:border-primary/50 rounded-[32px] p-8 md:p-10 flex flex-col justify-between overflow-hidden min-h-[520px] lg:h-[520px] shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
			>
				<div class="mb-6">
					<h3
						class="text-xl md:text-2xl font-serif font-semibold text-text-dark mb-3 group-hover:text-primary transition-colors duration-200"
					>
						{features[0].title}
					</h3>
					<p class="text-sm text-text-dark/65 leading-relaxed font-sans">
						{features[0].description}
					</p>
				</div>
				<div
					class="relative w-full h-[280px] mt-auto rounded-2xl overflow-hidden bg-[#faf8f3] border border-border-gold/15"
				>
					<img
						src={features[0].image}
						alt={features[0].alt}
						class="absolute inset-x-0 bottom-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
					/>
				</div>
			</div>

			<!-- Column 2: Paróquias & Orações (Stacked Horizontal Cards) -->
			<div class="flex flex-col gap-6 lg:h-[520px]">
				<!-- Card 2: Paróquias -->
				<div
					class="group bg-white border border-border-gold/20 hover:border-primary/50 rounded-[32px] p-8 flex flex-row gap-6 items-center justify-between overflow-hidden h-[248px] shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
				>
					<div class="flex-1">
						<h3
							class="text-lg md:text-xl font-serif font-semibold text-text-dark mb-2 group-hover:text-primary transition-colors duration-200"
						>
							{features[1].title}
						</h3>
						<p class="text-xs md:text-sm text-text-dark/65 leading-relaxed font-sans">
							{features[1].description}
						</p>
					</div>
					<div
						class="w-[110px] sm:w-[130px] h-[180px] shrink-0 rounded-xl overflow-hidden bg-[#faf8f3] border border-border-gold/15 relative"
					>
						<img
							src={features[1].image}
							alt={features[1].alt}
							class="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
						/>
					</div>
				</div>

				<!-- Card 3: Orações -->
				<div
					class="group bg-white border border-border-gold/20 hover:border-primary/50 rounded-[32px] p-8 flex flex-row gap-6 items-center justify-between overflow-hidden h-[248px] shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
				>
					<div class="flex-1">
						<h3
							class="text-lg md:text-xl font-serif font-semibold text-text-dark mb-2 group-hover:text-primary transition-colors duration-200"
						>
							{features[2].title}
						</h3>
						<p class="text-xs md:text-sm text-text-dark/65 leading-relaxed font-sans">
							{features[2].description}
						</p>
					</div>
					<div
						class="w-[110px] sm:w-[130px] h-[180px] shrink-0 rounded-xl overflow-hidden bg-[#faf8f3] border border-border-gold/15 relative"
					>
						<img
							src={features[2].image}
							alt={features[2].alt}
							class="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
						/>
					</div>
				</div>
			</div>

			<!-- Column 3: Exame de Consciência (Tall Card) -->
			<div
				class="group bg-white border border-border-gold/20 hover:border-primary/50 rounded-[32px] p-8 md:p-10 flex flex-col justify-between overflow-hidden min-h-[520px] lg:h-[520px] shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
			>
				<div class="mb-6">
					<h3
						class="text-xl md:text-2xl font-serif font-semibold text-text-dark mb-3 group-hover:text-primary transition-colors duration-200"
					>
						{features[3].title}
					</h3>
					<p class="text-sm text-text-dark/65 leading-relaxed font-sans">
						{features[3].description}
					</p>
				</div>
				<div
					class="relative w-full h-[280px] mt-auto rounded-2xl overflow-hidden bg-[#faf8f3] border border-border-gold/15"
				>
					<img
						src={features[3].image}
						alt={features[3].alt}
						class="absolute inset-x-0 bottom-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
					/>
				</div>
			</div>
		</div>
	</div>
</section>
