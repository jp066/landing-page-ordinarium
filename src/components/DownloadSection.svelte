<script lang="ts">
	import { APP_URL } from '../lib/constants';
</script>

<section class="w-full py-12 px-6 md:px-12 bg-white">
	<div class="max-w-6xl mx-auto">
		<div
			class="download-section relative rounded-[32px] overflow-hidden px-8 py-20 md:px-16 md:py-28 flex flex-col items-center text-center"
		>
			<div class="relative z-10 max-w-2xl">
				<h2 class="text-3xl md:text-4xl font-serif font-medium text-white mb-4">
					Leve a fé para onde você estiver
				</h2>
				<p class="text-sm md:text-base text-white/60 leading-relaxed mb-10">
					O Ordinarium estará disponível em breve nas lojas. Liturgia, orações, paróquias e muito
					mais direto no seu celular.
				</p>

				<div class="flex flex-col sm:flex-row gap-4 justify-center">
					<div
						class="flex items-center gap-3 px-6 py-3.5 rounded-full border bg-white/20 text-white/40 cursor-not-allowed"
					>
						<svg class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
							<path
								d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"
							/>
						</svg>
						<div class="text-left">
							<p class="text-[10px] leading-none text-white">Em breve na</p>
							<p class="text-sm font-semibold text-white">App Store</p>
						</div>
					</div>

					<div
						class="flex items-center gap-3 px-6 py-3.5 rounded-full border bg-white/20 text-white/40 cursor-not-allowed"
					>
						<svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path
								d="M3.61 1.67L13.47 12 3.61 22.33C3.26 22.09 3 21.58 3 20.87V4.13C3 3.42 3.26 2.91 3.61 2.67L3.61 1.67Z"
								fill="#00C3FF"
							/>
							<path
								d="M16.49 15.02L13.47 12L16.49 8.98L20.13 11.02C20.85 11.43 20.85 12.57 20.13 12.98L16.49 15.02Z"
								fill="#FFCE00"
							/>
							<path
								d="M3.61 1.67L13.47 12L16.49 8.98L5.85 2.85C5.35 2.55 4.72 2.55 4.22 2.85L3.61 1.67Z"
								fill="#00E676"
							/>
							<path
								d="M3.61 22.33L13.47 12L16.49 15.02L5.85 21.15C5.35 21.45 4.72 21.45 4.22 21.15L3.61 22.33Z"
								fill="#FF3A44"
							/>
						</svg>
						<div class="text-left">
							<p class="text-[10px] leading-none text-white">Em breve no</p>
							<p class="text-sm font-semibold text-white">Google Play</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.download-section {
		background-image: url('/assets/mockup.png');
	}

	.download-section::before {
		content: '';
		position: absolute;
		inset: 0;
		background: rgba(11, 11, 12, 0.592);
	}
</style>
