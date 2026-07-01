<script lang="ts">
	import { ArrowRight, ChevronDown } from '@lucide/svelte';
	import { indicators } from '../lib/data';
	import { APP_URL } from '../lib/constants';
	import Button from './Button.svelte';
	import HeroMockup from './HeroMockup.svelte';
</script>

<section id="hero" class="relative min-h-screen pt-32 pb-20 flex flex-col justify-center items-center overflow-hidden bg-bg-dark text-text-light px-6 md:px-12">
	<!-- Decorative background glows -->
	<div class="absolute top-[20%] left-[10%] w-[30vw] h-[30vw] bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
	<div class="absolute bottom-[10%] right-[10%] w-[40vw] h-[40vw] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>

	<div class="max-w-7xl mx-auto w-full flex flex-col justify-between flex-1">
		
		<!-- Hero Grid -->
		<div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center mt-6 lg:mt-12">
			
			<!-- Left Column: Content -->
			<div class="lg:col-span-6 flex flex-col items-start text-left animate-fade-in-up">
				<!-- Supertag -->

				<!-- Title -->
				<h1 class="text-4xl md:text-5xl lg:text-6xl font-serif font-medium leading-tight text-text-light tracking-tight mb-6">
					Tudo o que você <br class="hidden sm:inline" />
					precisa para viver <br class="hidden sm:inline" />
					a <span class="text-primary font-semibold relative after:absolute after:bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-primary/30">fé católica</span>,<br />
					em um só lugar.
				</h1>

				<!-- Description -->
				<p class="text-base md:text-lg text-text-secondary leading-relaxed mb-8 max-w-lg">
					O Ordinarium reúne liturgia diária, horários de missas, diretório de paróquias, orações, exame de consciência e outras ferramentas para acompanhar sua vida espiritual todos os dias.
				</p>

				<!-- CTA Buttons -->
				<div class="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-12 lg:mb-0">
					<Button href={APP_URL} variant="primary" class="group !px-8 !py-4 font-semibold w-full sm:w-auto">
						Abrir aplicativo
						<ArrowRight class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
					</Button>
					<Button href="#recursos" variant="outline" class="!px-8 !py-4 w-full sm:w-auto">
						Explorar recursos
					</Button>
				</div>
			</div>

			<!-- Right Column: Mockup -->
			<div class="lg:col-span-6 w-full flex justify-center items-center lg:pl-4">
				<HeroMockup />
			</div>
		</div>

		<!-- Indicators Row -->
		<div class="border-t border-border-gold/30 mt-20 pt-10">
			<div class="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
				{#each indicators as item}
					<div class="flex items-start gap-3 group">
						<div class="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary shrink-0 transition-colors group-hover:bg-primary/20">
							<item.icon class="w-5 h-5" />
						</div>
						<div class="flex flex-col">
							<span class="text-sm font-semibold text-text-light tracking-wide group-hover:text-primary transition-colors">
								{item.title}
							</span>
							<span class="text-xs text-text-secondary mt-0.5">
								{item.subtitle}
							</span>
						</div>
					</div>
				{/each}
			</div>
		</div>

	</div>
</section>
