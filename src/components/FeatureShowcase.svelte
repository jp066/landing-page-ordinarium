<script lang="ts">
	import { inView } from '$lib/actions';
	import SectionTitle from './SectionTitle.svelte';
	import { APP_URL } from '../lib/constants';
	import { BookMarked, Church, ArrowRight } from '@lucide/svelte';
	import SilenceIcon from './SilenceIcon.svelte';
	import ExamenIcon from './ExamenIcon.svelte';

	const features = [
		{
			title: 'Liturgia Diária Oficial',
			subtitle: 'Textos homologados pela CNBB',
			description:
				'Acompanhe as leituras e salmos da missa com a tradução oficial da Igreja no Brasil. Tenha em mãos a Palavra de Deus organizada de acordo com o dia litúrgico.',
			image: '/assets/liturgia-mobile.png',
			alt: 'Tela de Liturgia Diária'
		},
		{
			title: 'Encontre Paróquias e Missas',
			subtitle: 'Horários sempre ao seu alcance',
			description:
				'Localize igrejas próximas e consulte horários atualizados de missas, confissões e adorações. Um diretório dinâmico atualizado por voluntários e secretarias.',
			image: '/assets/paroquias-mobile.png',
			alt: 'Tela de Paróquias'
		},
		{
			title: 'Silêncio para Contemplação',
			subtitle: '100% gratuito e sem anúncios',
			description:
				'O Ordinarium é um território de silêncio e recolhimento. Sem pop-ups ou banners de propaganda comercial para distrair sua atenção do diálogo com Deus.',
			image: '/assets/oracoes-mobile.png',
			alt: 'Tela de Orações'
		},
		{
			title: 'Exame de Consciência Guiado',
			subtitle: 'Preparação para uma boa Confissão',
			description:
				'Prepare-se de forma profunda para o Sacramento da Reconciliação através de um roteiro reflexivo passo a passo fundamentado na doutrina moral e no Catecismo.',
			image: '/assets/exame-mobile.png',
			alt: 'Tela de Exame de Consciência'
		}
	];
</script>

<section id="recursos" use:inView class="w-full py-24 bg-bg-light px-6 md:px-12">
	<div class="max-w-6xl mx-auto">
		<SectionTitle
			title="Construído para apoiar sua vida cristã"
			subtitle="Uma experiência projetada com reverência, foco na oração e conexão real com a sua comunidade."
			centered={false}
			theme="light"
		/>

		<!-- Staggered Bento Grid Layout -->
		<div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-16">
			<!-- Card 1: Liturgia Diária (Wide Card - 2/3) -->
			<a
				use:inView
				href={APP_URL}
				target="_blank"
				rel="noopener noreferrer"
				class="group block bg-white border border-border-gold/20 hover:border-primary/40 rounded-[32px] p-8 md:p-10 flex flex-col lg:flex-row justify-between items-stretch overflow-hidden min-h-[480px] lg:col-span-2 lg:h-[440px] shadow-sm hover:shadow-xl hover:shadow-[0_0_30px_-5px_rgba(212,168,79,0.15)] hover:-translate-y-0.5 transition-all duration-300 text-left no-underline reveal reveal-delay-1"
			>
				<div class="flex-1 flex flex-col justify-between pr-0 lg:pr-8 mb-8 lg:mb-0">
					<div>
						<!-- Icon badge -->
						<div
							class="w-12 h-12 rounded-2xl bg-bg-light border border-border-gold/30 flex items-center justify-center text-primary mb-6 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-white group-hover:border-primary"
						>
							<BookMarked class="w-6 h-6" />
						</div>
						<span class="text-[10px] font-bold tracking-wider uppercase text-primary/80 block mb-1">
							{features[0].subtitle}
						</span>
						<h3
							class="text-xl md:text-2xl font-serif font-semibold text-text-dark mb-3 flex items-center gap-2 group-hover:text-primary transition-colors duration-200"
						>
							{features[0].title}
							<ArrowRight
								class="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-primary"
							/>
						</h3>
						<p class="text-sm text-text-dark/65 leading-relaxed font-sans max-w-md">
							{features[0].description}
						</p>
					</div>
					<!-- Bullet points -->
					<div class="mt-6 flex flex-col gap-2">
						<div class="flex items-center gap-2 text-xs text-text-dark/60 font-sans">
							<span class="w-1.5 h-1.5 rounded-full bg-primary/60"></span>
							Primeira Leitura, Salmo e Evangelho completos
						</div>
						<div class="flex items-center gap-2 text-xs text-text-dark/60 font-sans">
							<span class="w-1.5 h-1.5 rounded-full bg-primary/60"></span>
							Santo do dia com relatos biográficos detalhados
						</div>
						<div class="flex items-center gap-2 text-xs text-text-dark/60 font-sans">
							<span class="w-1.5 h-1.5 rounded-full bg-primary/60"></span>
							Indicação de cores e solenidades do calendário
						</div>
					</div>
				</div>

				<!-- Mockup side -->
				<div
					class="relative w-full lg:w-1/2 flex items-end justify-center lg:justify-end min-h-[260px] lg:min-h-0 pt-6 -mb-10"
				>
					<!-- Glow effect background -->
					<div
						class="absolute bottom-0 right-1/2 translate-x-1/2 lg:translate-x-0 lg:right-10 w-64 h-64 rounded-full bg-gradient-to-tr from-primary/10 to-transparent blur-3xl opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
					></div>

					<!-- iPhone Mockup (Large) -->
					<div
						class="w-[170px] h-[240px] bg-[#0b0b0c] rounded-t-[28px] border-x-2 border-t-2 border-[#131315] outline outline-1 outline-border-gold/20 relative shadow-2xl transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-2 lg:mr-10 shrink-0"
					>
						<!-- Notch -->
						<div
							class="absolute top-1.5 left-1/2 -translate-x-1/2 w-14 h-2.5 bg-[#0b0b0c] rounded-full z-20 flex items-center justify-center"
						>
							<div class="w-1.5 h-1.5 bg-[#1c1c1e] rounded-full ml-auto mr-3"></div>
						</div>
						<!-- Screen wrapper -->
						<div
							class="w-full h-full rounded-t-[22px] overflow-hidden bg-[#131315] border border-neutral-900"
						>
							<img
								src={features[0].image}
								alt={features[0].alt}
								class="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-500"
							/>
						</div>
					</div>
				</div>
			</a>

			<!-- Card 2: Paróquias (Narrow Card - 1/3) -->
			<a
				use:inView
				href={APP_URL}
				target="_blank"
				rel="noopener noreferrer"
				class="group block bg-white border border-border-gold/20 hover:border-primary/40 rounded-[32px] p-8 flex flex-col justify-between overflow-hidden min-h-[480px] lg:col-span-1 lg:h-[440px] shadow-sm hover:shadow-xl hover:shadow-[0_0_30px_-5px_rgba(212,168,79,0.15)] hover:-translate-y-0.5 transition-all duration-300 text-left no-underline reveal reveal-delay-2"
			>
				<div>
					<!-- Icon badge -->
					<div
						class="w-12 h-12 rounded-2xl bg-bg-light border border-border-gold/30 flex items-center justify-center text-primary mb-6 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-white group-hover:border-primary"
					>
						<Church class="w-6 h-6" />
					</div>
					<span class="text-[10px] font-bold tracking-wider uppercase text-primary/80 block mb-1">
						{features[1].subtitle}
					</span>
					<h3
						class="text-xl font-serif font-semibold text-text-dark mb-3 flex items-center gap-2 group-hover:text-primary transition-colors duration-200"
					>
						{features[1].title}
						<ArrowRight
							class="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-primary"
						/>
					</h3>
					<p class="text-sm text-text-dark/65 leading-relaxed font-sans">
						{features[1].description}
					</p>
				</div>

				<!-- Mockup side -->
				<div class="relative w-full flex items-end justify-center pt-6 -mb-10">
					<!-- Glow effect background -->
					<div
						class="absolute bottom-0 w-44 h-44 rounded-full bg-gradient-to-tr from-primary/10 to-transparent blur-2xl opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
					></div>

					<!-- iPhone Mockup -->
					<div
						class="w-[160px] h-[220px] bg-[#0b0b0c] rounded-t-[28px] border-x-2 border-t-2 border-[#131315] outline outline-1 outline-border-gold/20 relative shadow-2xl transition-all duration-500 group-hover:scale-105 group-hover:-rotate-1 shrink-0"
					>
						<!-- Notch -->
						<div
							class="absolute top-1.5 left-1/2 -translate-x-1/2 w-14 h-2.5 bg-[#0b0b0c] rounded-full z-20 flex items-center justify-center"
						>
							<div class="w-1.5 h-1.5 bg-[#1c1c1e] rounded-full ml-auto mr-3"></div>
						</div>
						<!-- Screen wrapper -->
						<div
							class="w-full h-full rounded-t-[22px] overflow-hidden bg-[#131315] border border-neutral-900"
						>
							<img
								src={features[1].image}
								alt={features[1].alt}
								class="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-500"
							/>
						</div>
					</div>
				</div>
			</a>

			<!-- Card 3: Orações (Narrow Card - 1/3) -->
			<a
				use:inView
				href={APP_URL} target="_blank"
				rel="noopener noreferrer"
				class="group block bg-white border border-border-gold/20 hover:border-primary/40 rounded-[32px] p-8 flex flex-col justify-between overflow-hidden min-h-[480px] lg:col-span-1 lg:h-[440px] shadow-sm hover:shadow-xl hover:shadow-[0_0_30px_-5px_rgba(212,168,79,0.15)] hover:-translate-y-0.5 transition-all duration-300 text-left no-underline reveal reveal-delay-3"
			>
				<div>
					<!-- Icon badge -->
					<div
						class="w-12 h-12 rounded-2xl bg-bg-light border border-border-gold/30 flex items-center justify-center text-primary mb-6 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-white group-hover:border-primary"
					>
						<SilenceIcon class="w-6 h-6" />
					</div>
					<span class="text-[10px] font-bold tracking-wider uppercase text-primary/80 block mb-1">
						{features[2].subtitle}
					</span>
					<h3
						class="text-xl font-serif font-semibold text-text-dark mb-3 flex items-center gap-2 group-hover:text-primary transition-colors duration-200"
					>
						{features[2].title}
						<ArrowRight
							class="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-primary"
						/>
					</h3>
					<p class="text-sm text-text-dark/65 leading-relaxed font-sans">
						{features[2].description}
					</p>
				</div>

				<!-- Mockup side -->
				<div class="relative w-full flex items-end justify-center pt-6 -mb-10">
					<!-- Glow effect background -->
					<div
						class="absolute bottom-0 w-44 h-44 rounded-full bg-gradient-to-tr from-primary/10 to-transparent blur-2xl opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
					></div>

					<!-- iPhone Mockup -->
					<div
						class="w-[160px] h-[220px] bg-[#0b0b0c] rounded-t-[28px] border-x-2 border-t-2 border-[#131315] outline outline-1 outline-border-gold/20 relative shadow-2xl transition-all duration-500 group-hover:scale-105 group-hover:rotate-1 shrink-0"
					>
						<!-- Notch -->
						<div
							class="absolute top-1.5 left-1/2 -translate-x-1/2 w-14 h-2.5 bg-[#0b0b0c] rounded-full z-20 flex items-center justify-center"
						>
							<div class="w-1.5 h-1.5 bg-[#1c1c1e] rounded-full ml-auto mr-3"></div>
						</div>
						<!-- Screen wrapper -->
						<div
							class="w-full h-full rounded-t-[22px] overflow-hidden bg-[#131315] border border-neutral-900"
						>
							<img
								src={features[2].image}
								alt={features[2].alt}
								class="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-500"
							/>
						</div>
					</div>
				</div>
			</a>

			<!-- Card 4: Exame de Consciência (Wide Card - 2/3) -->
			<a
				use:inView
				href={APP_URL}
				target="_blank"
				rel="noopener noreferrer"
				class="group block bg-white border border-border-gold/20 hover:border-primary/40 rounded-[32px] p-8 md:p-10 flex flex-col lg:flex-row justify-between items-stretch overflow-hidden min-h-[480px] lg:col-span-2 lg:h-[440px] shadow-sm hover:shadow-xl hover:shadow-[0_0_30px_-5px_rgba(212,168,79,0.15)] hover:-translate-y-0.5 transition-all duration-300 text-left no-underline reveal reveal-delay-4"
			>
				<div class="flex-1 flex flex-col justify-between pr-0 lg:pr-8 mb-8 lg:mb-0">
					<div>
						<!-- Icon badge -->
						<div
							class="w-12 h-12 rounded-2xl bg-bg-light border border-border-gold/30 flex items-center justify-center text-primary mb-6 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-white group-hover:border-primary"
						>
							<ExamenIcon class="w-6 h-6" />
						</div>
						<span class="text-[10px] font-bold tracking-wider uppercase text-primary/80 block mb-1">
							{features[3].subtitle}
						</span>
						<h3
							class="text-xl md:text-2xl font-serif font-semibold text-text-dark mb-3 flex items-center gap-2 group-hover:text-primary transition-colors duration-200"
						>
							{features[3].title}
							<ArrowRight
								class="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-primary"
							/>
						</h3>
						<p class="text-sm text-text-dark/65 leading-relaxed font-sans max-w-md">
							{features[3].description}
						</p>
					</div>
					<!-- Bullet points -->
					<div class="mt-6 flex flex-col gap-2">
						<div class="flex items-center gap-2 text-xs text-text-dark/60 font-sans">
							<span class="w-1.5 h-1.5 rounded-full bg-primary/60"></span>
							Checklist dinâmico e privado para auxiliar a memória
						</div>
						<div class="flex items-center gap-2 text-xs text-text-dark/60 font-sans">
							<span class="w-1.5 h-1.5 rounded-full bg-primary/60"></span>
							Perguntas claras sobre deveres morais e Mandamentos
						</div>
						<div class="flex items-center gap-2 text-xs text-text-dark/60 font-sans">
							<span class="w-1.5 h-1.5 rounded-full bg-primary/60"></span>
							Orações complementares de contrição e preparação
						</div>
					</div>
				</div>

				<!-- Mockup side -->
				<div
					class="relative w-full lg:w-1/2 flex items-end justify-center lg:justify-end min-h-[260px] lg:min-h-0 pt-6 -mb-10"
				>
					<!-- Glow effect background -->
					<div
						class="absolute bottom-0 right-1/2 translate-x-1/2 lg:translate-x-0 lg:right-10 w-64 h-64 rounded-full bg-gradient-to-tr from-primary/10 to-transparent blur-3xl opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
					></div>

					<!-- iPhone Mockup (Large) -->
					<div
						class="w-[170px] h-[240px] bg-[#0b0b0c] rounded-t-[28px] border-x-2 border-t-2 border-[#131315] outline outline-1 outline-border-gold/20 relative shadow-2xl transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-2 lg:mr-10 shrink-0"
					>
						<!-- Notch -->
						<div
							class="absolute top-1.5 left-1/2 -translate-x-1/2 w-14 h-2.5 bg-[#0b0b0c] rounded-full z-20 flex items-center justify-center"
						>
							<div class="w-1.5 h-1.5 bg-[#1c1c1e] rounded-full ml-auto mr-3"></div>
						</div>
						<!-- Screen wrapper -->
						<div
							class="w-full h-full rounded-t-[22px] overflow-hidden bg-[#131315] border border-neutral-900"
						>
							<img
								src={features[3].image}
								alt={features[3].alt}
								class="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-500"
							/>
						</div>
					</div>
				</div>
			</a>
		</div>
	</div>
</section>
