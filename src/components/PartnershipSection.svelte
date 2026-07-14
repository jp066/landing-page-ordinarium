<script lang="ts">
	import { ArrowRight } from '@lucide/svelte';
	import Button from './Button.svelte';
</script>

<section id="parceria" class="w-full py-24 bg-bg-light px-6 md:px-12">
	<div class="max-w-7xl mx-auto">
		<!-- Header -->
		<div class="flex flex-col items-center text-center mb-16">
			<h2
				class="text-3xl md:text-4xl font-serif font-medium leading-tight text-text-dark max-w-3xl"
			>
				Em parceria com a Arquidiocese de Teresina
			</h2>
			<p class="mt-4 text-base md:text-lg max-w-2xl leading-relaxed text-text-dark/70">
				O Ordinarium caminha em parceria com a Arquidiocese de Teresina, unindo tecnologia e missão
				pastoral para aproximar os fiéis da vida da Igreja.
			</p>
		</div>

		<!-- Content Grid -->
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
			<!-- Left: Coat of Arms -->
			<div class="flex justify-center lg:justify-end order-2 lg:order-1">
				<div class="relative">
					<!-- Decorative glow -->
					<div
						class="absolute inset-0 bg-primary/5 rounded-full blur-[60px] pointer-events-none"
					></div>
				<!-- Coat of arms container -->
				<div
					class="relative flex items-center justify-center gap-4 md:gap-6"
				>
					<img
					src="/assets/logo.png"
					alt="Logo Ordinarium"
						class="w-66 h-66 md:w-72 md:h-72 object-contain drop-shadow-[0_0_8px_rgba(212,168,79,0.2)]"
					/>
					<img
						src="/assets/brasao-arquidiocese.png"
						alt="Brasão da Arquidiocese de Teresina"
						class="w-56 h-56 md:w-72 md:h-72 object-contain"
					/>
				</div>
				</div>
			</div>

			<!-- Right: Content -->
			<div class="flex flex-col items-start order-1 lg:order-2 animate-fade-in-up">
				<!-- Description -->
				<p class="text-base md:text-lg text-text-dark/80 leading-relaxed mb-8 max-w-lg">
					Uma colaboração que fortalece a presença digital da Igreja e facilita o acesso dos fiéis
					aos recursos litúrgicos e pastorais.
				</p>

				<!-- CTA -->
				<Button
					href="/parceria/arquidiocese-de-teresina"
					variant="primary"
					class="group !px-6 !py-3 font-semibold"
				>
					Conhecer parceria
					<ArrowRight class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
				</Button>
			</div>
		</div>
	</div>
</section>
