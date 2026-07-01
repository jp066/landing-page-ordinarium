<script lang="ts">
	import { ExternalLink, BookOpen, FileText, Search, Shuffle, Heart, List, Activity, CalendarDays } from '@lucide/svelte';
	import Navbar from '../../components/Navbar.svelte';
	import EndpointCard from '../../components/EndpointCard.svelte';
	import Footer from '../../components/Footer.svelte';

	const prayersEndpoints = [
		{ method: 'GET', path: '/api/v1/health', desc: 'Verificar integridade da API' },
		{ method: 'GET', path: '/api/v1/prayers', desc: 'Listar todas as orações' },
		{ method: 'GET', path: '/api/v1/prayers?category={categoria}', desc: 'Filtrar orações por categoria' },
		{ method: 'GET', path: '/api/v1/prayers/search?q={termo}', desc: 'Buscar orações por termo' },
		{ method: 'GET', path: '/api/v1/prayers/random', desc: 'Obter uma oração aleatória' },
		{ method: 'GET', path: '/api/v1/prayers/{slug}', desc: 'Obter oração pelo slug' },
		{ method: 'GET', path: '/api/v1/examination', desc: 'Exame de consciência completo' },
		{ method: 'GET', path: '/api/v1/examination/categories', desc: 'Listar categorias do exame' },
		{ method: 'GET', path: '/api/v1/examination/{categoria}', desc: 'Perguntas de uma categoria' },
	];

	const liturgyEndpoints = [
		{ method: 'GET', path: '/v2/', desc: 'Liturgia do dia atual' },
		{ method: 'GET', path: '/v2/?dia={dia}&mes={mes}&ano={ano}', desc: 'Liturgia de data específica' },
		{ method: 'GET', path: '/v2/{dia}-{mes}', desc: 'Liturgia via parâmetro de rota' },
		{ method: 'GET', path: '/v2/?periodo={dias}', desc: 'Liturgia de um período (máx: 7 dias)' },
	];

	const PATH_SEARCH = '/api/v1/prayers/search?q={termo}';
	const PATH_SLUG = '/api/v1/prayers/{slug}';
	const PATH_CATEGORY = '/api/v1/examination/{categoria}';
	const QUESTION_SCHEMA = '{text, response}';

	const sidebarSections = [
		{ id: 'visao-geral', label: 'Visão Geral' },
		{ id: 'oracoes', label: 'Orações e Exame', children: [
			{ id: 'ep-health', label: 'Health Check' },
			{ id: 'ep-list', label: 'Listar Orações' },
			{ id: 'ep-search', label: 'Buscar Orações' },
			{ id: 'ep-random', label: 'Oração Aleatória' },
			{ id: 'ep-slug', label: 'Oração por Slug' },
			{ id: 'ep-examination', label: 'Exame Completo' },
			{ id: 'ep-categories', label: 'Categorias' },
			{ id: 'ep-by-category', label: 'Pergunta por Categoria' },
			{ id: 'ep-models', label: 'Modelos de Dados' },
			{ id: 'ep-errors', label: 'Códigos de Erro' },
		]},
		{ id: 'liturgia', label: 'Liturgia Diária' },
	];

	function scrollTo(id: string) {
		const el = document.getElementById(id);
		if (el) el.scrollIntoView({ behavior: 'smooth' });
	}
</script>

<svelte:head>
	<title>API | Ordinarium</title>
	<meta name="description" content="Documentação das APIs utilizadas pelo Ordinarium: API de Orações e Exame de Consciência, e referência da API de Liturgia Diária." />
</svelte:head>

<Navbar />

<main>
<div class="pt-32 pb-12 px-6 md:px-12">
	<div class="max-w-5xl mx-auto text-center">
		<span class="text-xs font-semibold tracking-widest uppercase text-primary mb-4 inline-block">Documentação</span>
		<h1 class="text-4xl md:text-5xl font-serif font-medium leading-tight text-text-light mb-6">
			API <span class="text-gradient-gold">Ordinarium</span>
		</h1>
	</div>
</div>

<div class="max-w-6xl mx-auto px-6 md:px-12 pb-24">
	<div class="flex gap-10 relative">

		<!-- Sidebar -->
		<aside class="sidebar w-56 shrink-0">
			<nav class="sticky top-28 flex flex-col gap-1 py-2">
				{#each sidebarSections as section}
					{#if section.children}
						<span class="text-xs font-semibold text-primary uppercase tracking-wider pt-4 pb-1 px-3">{section.label}</span>
						{#each section.children as child}
							<button
								onclick={() => scrollTo(child.id)}
								class="text-left text-xs text-text-secondary hover:text-primary transition-fast px-3 py-1.5 rounded-lg hover:bg-primary/5 border-l-2 border-transparent hover:border-primary/40"
							>
								{child.label}
							</button>
						{/each}
					{:else}
						<button
							onclick={() => scrollTo(section.id)}
							class="text-left text-xs text-text-secondary hover:text-primary transition-fast px-3 py-1.5 rounded-lg hover:bg-primary/5 border-l-2 border-transparent hover:border-primary/40"
						>
							{section.label}
						</button>
					{/if}
				{/each}
			</nav>
		</aside>

		<!-- Content -->
		<div class="flex-1 min-w-0">

			<!-- Visão Geral -->
			<section id="visao-geral" class="scroll-mt-24 pb-16">
				<div class="flex flex-col mb-8">
					<span class="text-xs font-semibold tracking-widest uppercase text-primary mb-3">Visão Geral</span>
				</div>

				<div class="grid md:grid-cols-2 gap-6">
					<div class="bg-bg-dark-card border border-border-gold/20 rounded-xl p-6 hover:border-primary/40 transition-normal">
						<div class="flex items-center gap-3 mb-4">
							<div>
								<h3 class="font-serif text-lg font-medium text-text-light">API de Liturgia Diária</h3>
								<p class="text-xs text-text-secondary">Mantida por <a href="https://github.com/Dancrf" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">Dancrf</a></p>
							</div>
						</div>
						<p class="text-sm text-text-secondary leading-relaxed mb-4">
							API pública que fornece as orações e leituras do dia da Santa Missa. Projeto open-source no GitHub.
						</p>
						<a href="https://liturgia.up.railway.app/v2/" target="_blank" rel="noopener noreferrer" class="text-xs text-primary font-mono hover:underline inline-flex items-center gap-1">
							liturgia.up.railway.app <ExternalLink class="w-3 h-3" />
						</a>
					</div>
				</div>
			</section>

			<!-- API de Orações -->
			<section id="oracoes" class="scroll-mt-24 pb-16">
				<div class="flex flex-col mb-8">
					<span class="text-xs font-semibold tracking-widest uppercase text-primary mb-3">API Própria</span>
					<h2 class="text-3xl md:text-4xl font-serif font-medium leading-tight text-text-light max-w-3xl">
						Orações e Exame de Consciência
					</h2>
					<p class="mt-4 text-base text-text-secondary max-w-2xl leading-relaxed">
						Base URL: <code class="text-primary bg-primary-dim px-2 py-0.5 rounded text-sm font-mono">https://api.ordinarium.com.br</code>
					</p>
				</div>

				<!-- Endpoints Table -->
				<div class="bg-bg-dark-card border border-border-gold/20 rounded-xl overflow-hidden mb-10">
					<div class="p-5 border-b border-border-gold/20 flex items-center gap-2">
						<List class="w-4 h-4 text-primary" />
						<h3 class="text-sm font-semibold text-text-light uppercase tracking-wider">Endpoints</h3>
					</div>
					<div class="overflow-x-auto">
						<table class="w-full text-sm">
							<thead>
								<tr class="border-b border-border-gold/10">
									<th class="text-left p-4 text-text-secondary font-medium uppercase tracking-wider text-xs">Método</th>
									<th class="text-left p-4 text-text-secondary font-medium uppercase tracking-wider text-xs">Rota</th>
									<th class="text-left p-4 text-text-secondary font-medium uppercase tracking-wider text-xs">Descrição</th>
								</tr>
							</thead>
							<tbody>
								{#each prayersEndpoints as ep}
									<tr class="border-b border-border-gold/10 last:border-0 hover:bg-white/[0.02] transition-fast">
										<td class="p-4">
											<span class="inline-block px-2 py-0.5 rounded text-xs font-mono font-bold bg-green-900/30 text-green-400">GET</span>
										</td>
										<td class="p-4 font-mono text-xs text-text-light">{ep.path}</td>
										<td class="p-4 text-text-secondary text-xs">{ep.desc}</td>
									</tr>
								{/each}
							</tbody>
						</table>
					</div>
				</div>

				<!-- Endpoint Cards -->
				<EndpointCard
					id="ep-health"
					icon={Activity}
					title="Health Check"
					desc="Verificar se a API está funcionando."
					path="/api/v1/health"
					curl='curl https://api.ordinarium.com.br/api/v1/health'
					response={`{
  "status": "healthy",
  "project": "Ordinarium Prayers API",
  "version": "1.0.0"
}`}
				/>

				<EndpointCard
					id="ep-list"
					icon={BookOpen}
					title="Listar Orações"
					desc="Retorna todas as orações cadastradas. Suporta filtro opcional por categoria."
					path="/api/v1/prayers"
					curl='curl https://api.ordinarium.com.br/api/v1/prayers'
					response={`[
  {
    "id": 1,
    "slug": "sinal-da-cruz",
    "title": "Sinal da Cruz",
    "category": "Orações Fundamentais",
    "text": "Pelo sinal da Santa Cruz...",
    "source": "Tradição da Igreja",
    "language": "pt-BR"
  }
]`}
				>
					{#snippet children()}
						<div class="mt-3">
							<p class="text-xs text-text-secondary mb-1">Filtrar por categoria:</p>
							<pre class="bg-gray-950 border border-border-gold/10 rounded-lg p-3 overflow-x-auto"><code class="text-xs font-mono text-green-400">curl "https://api.ordinarium.com.br/api/v1/prayers?category=Orações Marianas"</code></pre>
						</div>
					{/snippet}
				</EndpointCard>

				<EndpointCard
					id="ep-search"
					icon={Search}
					title="Buscar Orações"
					desc="Pesquisa case-insensitive por título, texto ou categoria (ignorando acentos)."
					path={PATH_SEARCH}
					curl='curl "https://api.ordinarium.com.br/api/v1/prayers/search?q=espirito"'
					response={`[
  {
    "id": 8,
    "slug": "vinde-espirito-santo",
    "title": "Vinde Espírito Santo",
    "category": "Orações ao Espírito Santo",
    "text": "Vinde, Espírito Santo, enchei os corações...",
    "source": "Liturgia das Horas",
    "language": "pt-BR"
  }
]`}
				/>

				<EndpointCard
					id="ep-random"
					icon={Shuffle}
					title="Oração Aleatória"
					desc="Retorna uma oração selecionada aleatoriamente."
					path="/api/v1/prayers/random"
					curl='curl https://api.ordinarium.com.br/api/v1/prayers/random'
					response={`{
  "id": 6,
  "slug": "salve-rainha",
  "title": "Salve Rainha",
  "category": "Orações Marianas",
  "text": "Salve, Rainha, Mãe de misericórdia...",
  "source": "Tradição da Igreja (Hermann de Reichenau)",
  "language": "pt-BR"
}`}
				/>

				<EndpointCard
					id="ep-slug"
					icon={FileText}
					title="Oração por Slug"
					desc="Retorna os detalhes completos de uma oração pelo seu slug único."
					path={PATH_SLUG}
					curl='curl https://api.ordinarium.com.br/api/v1/prayers/pai-nosso'
					response={`{
  "id": 2,
  "slug": "pai-nosso",
  "title": "Pai Nosso",
  "category": "Orações Fundamentais",
  "text": "Pai nosso que estais nos céus...",
  "source": "Mateus 6, 9-13 / Catecismo",
  "language": "pt-BR"
}`}
				/>

				<EndpointCard
					id="ep-examination"
					icon={Heart}
					title="Exame de Consciência Completo"
					desc="Retorna todas as categorias do exame de consciência com suas perguntas reflexivas."
					path="/api/v1/examination"
					curl='curl https://api.ordinarium.com.br/api/v1/examination'
					response={`[
  {
    "category": "Introdução",
    "questions": [
      {
        "text": "Busco sinceramente aproximar-me de Deus...",
        "response": false
      }
    ]
  }
]`}
				/>

				<EndpointCard
					id="ep-categories"
					icon={List}
					title="Categorias do Exame"
					desc="Lista apenas os nomes das categorias disponíveis."
					path="/api/v1/examination/categories"
					curl='curl https://api.ordinarium.com.br/api/v1/examination/categories'
					response={`[
  "Introdução",
  "Amor a Deus",
  "Vida sacramental",
  "Família",
  "Trabalho",
  "Caridade",
  "Pureza",
  "Justiça",
  "Encerramento"
]`}
				/>

				<EndpointCard
					id="ep-by-category"
					icon={FileText}
					title="Perguntas por Categoria"
					desc="Retorna as perguntas de uma categoria específica do exame de consciência."
					path={PATH_CATEGORY}
					curl='curl "https://api.ordinarium.com.br/api/v1/examination/Família"'
					response={`{
  "category": "Família",
  "questions": [
    "Fui desobediente, desrespeitoso ou desatencioso com meus pais...",
    "Tenho sido paciente, amoroso e compreensivo com meu cônjuge..."
  ]
}`}
				/>

				<!-- Modelos de Dados -->
				<div id="ep-models" class="scroll-mt-24 mt-12 bg-bg-dark-card border border-border-gold/20 rounded-xl p-6 md:p-8">
					<h3 class="font-serif text-xl font-medium text-text-light mb-6">Modelos de Dados</h3>

					<div class="space-y-6">
						<div>
							<h4 class="text-sm font-semibold text-primary mb-2">Prayer</h4>
							<table class="w-full text-sm">
								<thead>
									<tr class="border-b border-border-gold/10">
										<th class="text-left p-2 text-text-secondary font-medium text-xs uppercase tracking-wider">Campo</th>
										<th class="text-left p-2 text-text-secondary font-medium text-xs uppercase tracking-wider">Tipo</th>
										<th class="text-left p-2 text-text-secondary font-medium text-xs uppercase tracking-wider">Descrição</th>
									</tr>
								</thead>
								<tbody>
									<tr class="border-b border-border-gold/10"><td class="p-2 font-mono text-xs text-text-light">id</td><td class="p-2 text-xs text-text-secondary">integer</td><td class="p-2 text-xs text-text-secondary">ID único da oração</td></tr>
									<tr class="border-b border-border-gold/10"><td class="p-2 font-mono text-xs text-text-light">slug</td><td class="p-2 text-xs text-text-secondary">string</td><td class="p-2 text-xs text-text-secondary">Identificador URL-friendly</td></tr>
									<tr class="border-b border-border-gold/10"><td class="p-2 font-mono text-xs text-text-light">title</td><td class="p-2 text-xs text-text-secondary">string</td><td class="p-2 text-xs text-text-secondary">Título da oração</td></tr>
									<tr class="border-b border-border-gold/10"><td class="p-2 font-mono text-xs text-text-light">category</td><td class="p-2 text-xs text-text-secondary">string</td><td class="p-2 text-xs text-text-secondary">Categoria temática</td></tr>
									<tr class="border-b border-border-gold/10"><td class="p-2 font-mono text-xs text-text-light">text</td><td class="p-2 text-xs text-text-secondary">string</td><td class="p-2 text-xs text-text-secondary">Texto completo da oração</td></tr>
									<tr class="border-b border-border-gold/10"><td class="p-2 font-mono text-xs text-text-light">source</td><td class="p-2 text-xs text-text-secondary">string</td><td class="p-2 text-xs text-text-secondary">Origem/fonte da oração</td></tr>
									<tr><td class="p-2 font-mono text-xs text-text-light">language</td><td class="p-2 text-xs text-text-secondary">string</td><td class="p-2 text-xs text-text-secondary">Idioma (padrão: pt-BR)</td></tr>
								</tbody>
							</table>
						</div>

						<div>
							<h4 class="text-sm font-semibold text-primary mb-2">ExaminationCategory</h4>
							<table class="w-full text-sm">
								<thead>
									<tr class="border-b border-border-gold/10">
										<th class="text-left p-2 text-text-secondary font-medium text-xs uppercase tracking-wider">Campo</th>
										<th class="text-left p-2 text-text-secondary font-medium text-xs uppercase tracking-wider">Tipo</th>
										<th class="text-left p-2 text-text-secondary font-medium text-xs uppercase tracking-wider">Descrição</th>
									</tr>
								</thead>
								<tbody>
									<tr class="border-b border-border-gold/10"><td class="p-2 font-mono text-xs text-text-light">category</td><td class="p-2 text-xs text-text-secondary">string</td><td class="p-2 text-xs text-text-secondary">Nome da categoria</td></tr>
									<tr><td class="p-2 font-mono text-xs text-text-light">questions</td><td class="p-2 text-xs text-text-secondary">array</td><td class="p-2 text-xs text-text-secondary">Perguntas reflexivas (<code class="text-primary">{QUESTION_SCHEMA}</code>)</td></tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>

				<!-- Códigos de Erro -->
				<div id="ep-errors" class="scroll-mt-24 mt-6 bg-bg-dark-card border border-border-gold/20 rounded-xl p-6 md:p-8">
					<h3 class="font-serif text-xl font-medium text-text-light mb-4">Códigos de Erro</h3>
					<div class="overflow-x-auto">
						<table class="w-full text-sm">
							<thead>
								<tr class="border-b border-border-gold/10">
									<th class="text-left p-3 text-text-secondary font-medium uppercase tracking-wider text-xs">Status</th>
									<th class="text-left p-3 text-text-secondary font-medium uppercase tracking-wider text-xs">Descrição</th>
								</tr>
							</thead>
							<tbody>
								<tr class="border-b border-border-gold/10">
									<td class="p-3"><span class="font-mono text-xs text-yellow-400">404</span></td>
									<td class="p-3 text-xs text-text-secondary">Oração ou categoria não encontrada</td>
								</tr>
								<tr>
									<td class="p-3"><span class="font-mono text-xs text-red-400">422</span></td>
									<td class="p-3 text-xs text-text-secondary">Parâmetros inválidos (ex: query string vazia)</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</section>

			<!-- API de Liturgia Diária -->
			<section id="liturgia" class="scroll-mt-24 pb-8">
				<div class="flex flex-col mb-8">
					<span class="text-xs font-semibold tracking-widest uppercase text-primary mb-3">API de Terceiros</span>
					<h2 class="text-3xl md:text-4xl font-serif font-medium leading-tight text-text-light max-w-3xl">
						Liturgia Diária
					</h2>
					<p class="mt-4 text-base text-text-secondary max-w-2xl leading-relaxed">
						API pública mantida por <a href="https://github.com/Dancrf" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">Dancrf</a>. Código fonte disponível no <a href="https://github.com/Dancrf/liturgia-diaria" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">GitHub</a>.
					</p>
				</div>

				<div class="bg-bg-dark-card border border-border-gold/20 rounded-xl p-6 md:p-8 mb-8">
					<p class="text-sm text-text-secondary leading-relaxed mb-4">
						Esta API fornece as orações e leituras do dia da Santa Missa (liturgia diária). Suporta consulta por data específica, período de dias, e versões alternativas de leituras.
					</p>
					<div class="flex flex-wrap gap-3">
						<a href="https://liturgia.up.railway.app/v2/" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 text-xs text-primary border border-border-gold rounded-lg px-3 py-1.5 hover:bg-primary/10 transition-fast">
							liturgia.up.railway.app/v2 <ExternalLink class="w-3 h-3" />
						</a>
						<a href="https://github.com/Dancrf/liturgia-diaria/blob/main/docs/v2/README.md" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 text-xs text-text-secondary border border-border-gold/30 rounded-lg px-3 py-1.5 hover:text-primary hover:border-primary transition-fast">
							Documentação v2 <ExternalLink class="w-3 h-3" />
						</a>
						<a href="https://github.com/Dancrf/liturgia-diaria/blob/main/docs/v3/README.md" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 text-xs text-text-secondary border border-border-gold/30 rounded-lg px-3 py-1.5 hover:text-primary hover:border-primary transition-fast">
							Documentação v3 (beta) <ExternalLink class="w-3 h-3" />
						</a>
					</div>
				</div>

				<div class="bg-bg-dark-card border border-border-gold/20 rounded-xl overflow-hidden mb-8">
					<div class="p-5 border-b border-border-gold/20 flex items-center gap-2">
						<List class="w-4 h-4 text-primary" />
						<h3 class="text-sm font-semibold text-text-light uppercase tracking-wider">Endpoints (v2)</h3>
					</div>
					<div class="overflow-x-auto">
						<table class="w-full text-sm">
							<thead>
								<tr class="border-b border-border-gold/10">
									<th class="text-left p-4 text-text-secondary font-medium uppercase tracking-wider text-xs">Método</th>
									<th class="text-left p-4 text-text-secondary font-medium uppercase tracking-wider text-xs">Rota</th>
									<th class="text-left p-4 text-text-secondary font-medium uppercase tracking-wider text-xs">Descrição</th>
								</tr>
							</thead>
							<tbody>
								{#each liturgyEndpoints as ep}
									<tr class="border-b border-border-gold/10 last:border-0 hover:bg-white/[0.02] transition-fast">
										<td class="p-4">
											<span class="inline-block px-2 py-0.5 rounded text-xs font-mono font-bold bg-green-900/30 text-green-400">GET</span>
										</td>
										<td class="p-4 font-mono text-xs text-text-light">{ep.path}</td>
										<td class="p-4 text-text-secondary text-xs">{ep.desc}</td>
									</tr>
								{/each}
							</tbody>
						</table>
					</div>
				</div>

				<div class="bg-bg-dark-card border border-border-gold/20 rounded-xl p-6 md:p-8">
					<h3 class="font-serif text-lg font-medium text-text-light mb-4">Exemplo de resposta</h3>
					<pre class="bg-gray-950 border border-border-gold/10 rounded-lg p-4 overflow-x-auto"><code class="text-xs font-mono text-green-400 leading-relaxed">{'{'}
  "data": "19/04/2025",
  "liturgia": "Sábado Santo - Vigília Pascal",
  "cor": "Branco",
  "oracoes": {'{'}
    "coleta": "...",
    "oferendas": "...",
    "comunhao": "..."
  {'}'},
  "leituras": {'{'}
    "primeiraLeitura": [...],
    "salmo": [...],
    "segundaLeitura": [...],
    "evangelho": [...]
  {'}'},
  "antifonas": {'{'}
    "entrada": "...",
    "comunhao": "..."
  {'}'}
{'}'}</code></pre>
					<p class="text-xs text-text-secondary mt-4">Consulte a <a href="https://github.com/Dancrf/liturgia-diaria/blob/main/docs/v2/README.md" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">documentação oficial</a> para detalhes completos de todos os campos.</p>
				</div>
			</section>

		</div>
	</div>
</div>

</main>

<Footer />
