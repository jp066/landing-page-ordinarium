<script lang="ts">
	import { HeartHandshake } from '@lucide/svelte';
	import Button from './Button.svelte';
	import { APP_URL } from '../lib/constants';
</script>

<section id="contribuir" class="w-full py-20 bg-bg-light px-6 md:px-12">
	<div class="max-w-7xl mx-auto">
		<!-- Dark Banner Container -->
		<div class="w-full bg-[#0E0E10] border border-border-gold/30 rounded-2xl p-8 md:p-12 lg:p-14 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden">
			<!-- Decorative Background Effect -->
			<div class="absolute -top-10 -left-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>

			<!-- Left Side: Icon + Text -->
			<div class="flex flex-col md:flex-row items-center md:items-start gap-6 text-center md:text-left z-10 max-w-3xl">
				<!-- Large Icon -->
				<div class="w-16 h-16 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 border border-border-gold/20">
					<HeartHandshake class="w-9 h-9" />
				</div>
				<!-- Text -->
				<div>
					<h3 class="text-2xl md:text-3xl font-serif font-medium text-text-light mb-3">
						Ajude a manter o Ordinarium para todos.
					</h3>
					<p class="text-sm md:text-base text-text-secondary leading-relaxed max-w-2xl">
						O Ordinarium é um projeto independente e colaborativo. Sua contribuição ajuda a manter o projeto no ar e a levar a fé católica mais longe.
					</p>
				</div>
			</div>

			<!-- Right Side: Actions -->
			<div class="flex flex-col sm:flex-row gap-4 shrink-0 w-full lg:w-auto z-10">
				<Button href="{APP_URL}/apoiar" variant="primary" target="_blank" rel="noopener noreferrer" class="w-full sm:w-auto font-semibold px-8 py-3.5">
					Contribuir
				</Button>
				<Button href="#sobre" variant="outline" class="w-full sm:w-auto px-8 py-3.5 border-white/10 hover:border-white/30">
					Saiba mais
				</Button>
			</div>
		</div>
	</div>
</section>
