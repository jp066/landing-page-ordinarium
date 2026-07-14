<script lang="ts">
	import { footerColumns } from '../lib/data';
	import { GITHUB_URL, INSTAGRAM_URL, EMAIL_CONTACT } from '../lib/constants';
</script>

<footer
	id="contato"
	class="w-full bg-[#0B0B0C] text-text-light pt-20 pb-8 px-6 md:px-12 border-t border-border-gold/20"
>
	<div class="max-w-7xl mx-auto">
		<!-- Footer Grid -->
		<div
			class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-white/5"
		>
			<!-- Column 1: Logo & Description (spans 4 columns on large screens) -->
			<div class="lg:col-span-4 flex flex-col items-start">
				<a href="/" class="flex items-center gap-2 mb-5">
					<div class="flex items-center justify-center w-8 h-8">
						<img
							src="/assets/favicon.png"
							alt="Emblema Ordinarium"
							class="w-7 h-7 object-contain"
						/>
					</div>
					<span class="font-gothic text-xl font-bold tracking-wide text-primary"> Ordinarium </span>
				</a>

				<p class="text-xs md:text-sm text-text-secondary leading-relaxed mb-6 max-w-sm">
					Ferramentas digitais para conectar você à vida litúrgica e à missão da Igreja Católica.
				</p>

				<!-- Social Links -->
				<div class="flex items-center gap-4">
					<a
						href={GITHUB_URL}
						target="_blank"
						rel="noopener noreferrer"
						class="w-8 h-8 rounded-full bg-white/5 hover:bg-primary/20 hover:text-primary flex items-center justify-center text-text-secondary transition-fast"
						aria-label="GitHub"
					>
						<svg
							viewBox="0 0 24 24"
							class="w-4 h-4 fill-none stroke-current"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						>
							<path
								d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
							/>
							<path d="M9 18c-4.51 2-5-2-7-2" />
						</svg>
					</a>
					<a
						href={INSTAGRAM_URL}
						target="_blank"
						rel="noopener noreferrer"
						class="w-8 h-8 rounded-full bg-white/5 hover:bg-primary/20 hover:text-primary flex items-center justify-center text-text-secondary transition-fast"
						aria-label="Instagram"
					>
						<svg
							viewBox="0 0 24 24"
							class="w-4 h-4 fill-none stroke-current"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						>
							<rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
							<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
							<line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
						</svg>
					</a>
					<a
						href="mailto:{EMAIL_CONTACT}"
						class="w-8 h-8 rounded-full bg-white/5 hover:bg-primary/20 hover:text-primary flex items-center justify-center text-text-secondary transition-fast"
						aria-label="E-mail"
					>
						<svg
							viewBox="0 0 24 24"
							class="w-4 h-4 fill-none stroke-current"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						>
							<rect width="20" height="16" x="2" y="4" rx="2" />
							<path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
						</svg>
					</a>
				</div>
			</div>

			<!-- Columns 2, 3, 4: Dynamic Links (spans 8 columns on large screens) -->
			<div class="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8">
				{#each footerColumns as col}
					<div class="flex flex-col">
						<span class="text-xs font-semibold text-text-light uppercase tracking-wider mb-4">
							{col.title}
						</span>
						<nav class="flex flex-col gap-3">
							{#each col.links as link}
								<a
									href={link.href}
									{...link.target
										? { target: link.target, rel: link.rel || 'noopener noreferrer' }
										: {}}
									class="text-xs md:text-sm text-text-secondary hover:text-primary transition-fast"
								>
									{link.label}
								</a>
							{/each}
						</nav>
					</div>
				{/each}
			</div>
		</div>

		<!-- Bottom footer bar -->
		<div
			class="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left"
		>
			<div class="flex flex-col sm:flex-row items-center gap-2 sm:gap-6">
				<span class="text-xs text-text-secondary">
					&copy; 2026 Ordinarium. Todos os direitos reservados.
				</span>
				<div class="flex items-center gap-4">
					<a
						href="/privacidade"
						class="text-xs text-text-secondary hover:text-primary transition-fast"
					>
						Privacidade
					</a>
					<a href="/termos" class="text-xs text-text-secondary hover:text-primary transition-fast">
						Termos
					</a>
				</div>
			</div>

			<!-- Dedication -->
			<span class="text-xs text-text-secondary flex items-center gap-1">
				Desenvolvido por <a
					href="https://www.linkedin.com/in/joao-pedro-matos-dev/"
					target="_blank"
					rel="noopener noreferrer"
					class="text-primary hover:underline transition-fast">João Pedro Matos</a
				>
			</span>
		</div>
	</div>
</footer>
