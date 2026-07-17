<script lang="ts">
	import { ArrowRight } from '@lucide/svelte';
	import Button from './Button.svelte';
</script>

<section id="parceria" class="w-full py-24 bg-bg-light px-6 md:px-12">
	<div class="max-w-5xl mx-auto">
		<h2 class="text-3xl md:text-4xl font-serif font-medium text-text-dark text-center mb-12">
			Nossos Parceiros
		</h2>
		<!-- Arquidiocese highlight -->
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
			<!-- Left: Coat of arms -->
			<div class="flex justify-center lg:justify-end order-2 lg:order-1">
				<img
					src="/assets/brasao-arquidiocese.png"
					alt="Brasão da Arquidiocese de Teresina"
					class="w-48 h-48 md:w-56 md:h-56 object-contain"
				/>
			</div>

			<!-- Right: Content -->
			<div class="flex flex-col items-start order-1 lg:order-2">
				<span class="text-xs font-semibold tracking-widest uppercase text-primary mb-3">
					Apoio
				</span>
				<h3 class="text-2xl md:text-3xl font-serif font-medium text-text-dark mb-4">
					Arquidiocese de Teresina
				</h3>
				<p class="text-sm text-text-dark/70 leading-relaxed mb-6 max-w-md">
					Uma parceria que fortalece a presença digital da Igreja e facilita o acesso dos fiéis aos
					recursos litúrgicos e pastorais. A Arquidiocese de Teresina éfundadora do Ordinarium e
					acompanha de perto o desenvolvimento do projeto.
				</p>
				<Button
					href="/parceria/arquidiocese-de-teresina"
					variant="primary"
					class="group font-semibold"
				>
					Conhecer a parceria
					<ArrowRight class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
				</Button>
			</div>
		</div>

		<!-- Logo strip 
		<div class="mt-20 pt-12 border-t border-border-gold/15">
			<p class="text-xs font-semibold tracking-widest uppercase text-text-dark/40 text-center mb-8">
				Parceiros e Apoiadores
			</p>
			<div class="flex flex-wrap justify-center gap-10 items-center">
				<a
					href="https://www.instagram.com/dompodcast/"
					target="_blank"
					rel="noopener noreferrer"
					class="flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity duration-200"
				>
					<img src="/assets/dom-podcast.png" alt="Dom Podcast" class="w-10 h-10 object-contain" />
					<span class="text-sm text-text-dark/70 font-sans">Dom Podcast</span>
				</a>
			</div>
		</div>-->
	</div>
</section>
