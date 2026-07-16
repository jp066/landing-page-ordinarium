<script lang="ts">
	interface Props {
		class?: string;
		size?: number | string;
	}

	let { class: className = '', size = 24 }: Props = $props();
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	width={size}
	height={size}
	viewBox="0 0 24 24"
	fill="none"
	stroke="currentColor"
	stroke-width="2"
	stroke-linecap="round"
	stroke-linejoin="round"
	class={className}
>
	<!-- Linha de base (apoio da vela ampliado) -->
	<path d="M5 21h14" opacity="0.8" />
	
	<!-- Corpo da Vela (Aumentado: largura de 8px e altura de 13px) -->
	<path d="M8 8c1.3 0.5 2.7 0.5 4 0c1.3-0.5 2.7-0.5 4 0v13H8V8Z" />
	<!-- Gota de cera derretida (adaptada ao tamanho maior) -->
	<path d="M8 11.5c0.5 0.5 0.5 2 0 2.5" opacity="0.8" />
	
	<!-- Pavio -->
	<path d="M12 8V5" />
	
	<!-- Chama (reposicionada no topo) -->
	<path d="M12 0.5c-0.8 1.4-1.2 2.4-1.2 3.4 0 1.4 0.8 2.4 1.2 2.4s1.2-1 1.2-2.4c0-1-0.4-2-1.2-3.4Z" fill="currentColor" opacity="0.15" />
	<path d="M12 0.5c-0.8 1.4-1.2 2.4-1.2 3.4 0 1.4 0.8 2.4 1.2 2.4s1.2-1 1.2-2.4c0-1-0.4-2-1.2-3.4Z" />
</svg>

