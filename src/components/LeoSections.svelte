<script lang="ts">
	import { APP_URL } from '../lib/constants';
	import SectionTitle from './SectionTitle.svelte';
	import Button from './Button.svelte';
	import { ArrowRight } from '@lucide/svelte';

	const capabilities = [
		{
			title: 'Compreender leituras do dia',
			desc: 'Aprofunde o Evangelho e as leituras do dia com explicações claras e acessíveis.'
		},
		{
			title: 'Tirar dúvidas sobre a fé',
			desc: 'Esclareça questões sobre doutrina, sacramentos e tradições da Igreja Católica.'
		},
		{
			title: 'Encontrar orações',
			desc: 'Descubra orações e novenas para cada momento da sua vida espiritual.'
		},
		{
			title: 'Refletir sobre o Evangelho',
			desc: 'Medite a Palavra de Deus com reflexões personalizadas para o dia.'
		},
		{
			title: 'Preparar um exame de consciência',
			desc: 'Prepare-se para o sacramento da confissão com um roteiro guiado passo a passo.'
		}
	];
</script>

<section
	id="leo"
	class="w-full py-24 bg-bg-light text-text-dark px-6 md:px-12 border-t border-border-gold/15"
>
	<div class="max-w-6xl mx-auto">
		<SectionTitle
			supertitle="Leo"
			title="Seu companheiro para a caminhada espiritual"
			subtitle="Converse com o assistente virtual do Ordinarium e aprofunde sua vida de fé com respostas inteligentes e conteúdo católico confiável."
			centered={true}
			theme="light"
		/>

		<div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mt-16 items-center">
			<div class="space-y-4">
				{#each capabilities as item}
					<div
						class="flex items-start gap-4 p-4 rounded-2xl bg-white border border-border-gold/15 hover:border-primary/30 hover:shadow-md transition-all duration-300"
					>
						<div>
							<h4 class="text-base font-semibold text-text-dark">{item.title}</h4>
							<p class="text-sm text-text-dark/65 leading-relaxed">{item.desc}</p>
						</div>
					</div>
				{/each}

				<div class="pt-4">
					<Button href={`${APP_URL}/leo`} variant="primary" size="lg" class="w-full sm:w-auto">
						Converse com o Leo
						<ArrowRight class="w-4 h-4 ml-2 inline" />
					</Button>
				</div>
			</div>

			<div class="flex justify-center items-center">
				<!-- Decorative Outer Glow -->
				<div
					class="relative w-full max-w-[340px] sm:max-w-[380px] lg:max-w-[420px] aspect-[4/5] group select-none"
				>
					<!-- Ambient background glow behind the card -->
					<div
						class="absolute -inset-1 bg-gradient-to-r from-primary/10 to-primary/5 rounded-[32px] blur-xl opacity-70 group-hover:opacity-100 transition duration-700"
					></div>

					<!-- Main Card Container -->
					<div
						class="relative w-full h-full rounded-[28px] overflow-hidden bg-gradient-to-b from-[#161513] to-[#0f0e0c] border border-border-gold/20 shadow-2xl flex flex-col justify-between p-6"
					>
						<!-- Decorative grid pattern & inner glow -->
						<div
							class="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"
						></div>
						<div
							class="absolute top-1/4 left-1/2 -translate-x-1/2 w-48 h-48 bg-primary/10 rounded-full blur-3xl pointer-events-none"
						></div>

						<!-- Mockup Image - Flush to the bottom of the card -->
						<div
							class="relative w-full h-[85%] flex items-end justify-center mt-auto overflow-hidden"
						>
							<img
								src="/assets/mockup-chat.png"
								alt="Conversa com o Leo"
								class="w-[85%] h-auto max-h-full object-contain object-bottom translate-y-3 group-hover:translate-y-0.5 transition-transform duration-500 block drop-shadow-[0_15px_30px_rgba(0,0,0,0.55)]"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
