import {
	BookOpen,
	MapPin,
	Clock,
	Sparkles,
	Shield,
	Heart,
	Star,
	Users,
	Flame,
	Check,
	HelpCircle,
	HeartHandshake,
	GraduationCap
} from '@lucide/svelte';
import type { NavItem, IndicatorItem, FeatureItem, ModuleItem, AudienceItem, FooterColumn } from './types';

export const navItems: NavItem[] = [
	{ label: 'Recursos', href: '#recursos' },
	{ label: 'Para quem', href: '#para-quem' },
	{ label: 'Sobre o projeto', href: '#sobre' },
	{ label: 'Contribuir', href: '#contribuir' },
	{ label: 'Contato', href: '#contato' }
];

export const indicators: IndicatorItem[] = [
	{
		icon: Heart,
		title: '100% gratuito',
		subtitle: 'Para todos os fiéis'
	},
	{
		icon: Users,
		title: 'Colaborativo',
		subtitle: 'Feito para a Igreja'
	},
	{
		icon: Sparkles,
		title: 'Sem anúncios',
		subtitle: 'Experiência limpa'
	},
	{
		icon: Shield,
		title: 'Confiável',
		subtitle: 'Dados verificados'
	}
];

export const features: FeatureItem[] = [
	{
		icon: BookOpen,
		title: 'Liturgia Diária',
		description: 'Acompanhe as leituras, orações e celebrações do dia.',
		href: '#recursos'
	},
	{
		icon: MapPin,
		title: 'Paróquias',
		description: 'Encontre paróquias perto de você com contatos, horários e mapas.',
		href: '#recursos'
	},
	{
		icon: Clock,
		title: 'Horários',
		description: 'Missas, confissões e adorações atualizadas na sua região.',
		href: '#recursos'
	},
	{
		icon: Flame,
		title: 'Orações',
		description: 'Orações tradicionais, devocionais e momentos de espiritualidade.',
		href: '#recursos'
	},
	{
		icon: HelpCircle,
		title: 'Exame de Consciência',
		description: 'Prepare-se para uma boa confissão com um passo a passo guiado.',
		href: '#recursos'
	},
	{
		icon: Star,
		title: 'Favoritos',
		description: 'Salve suas paróquias, orações e conteúdos favoritos.',
		href: '#recursos'
	}
];

export const showcaseModules = [
	{
		id: 'horarios',
		name: 'Horários',
		description: 'Encontre missas, confissões e adorações com filtros avançados.',
		image: '/assets/maps.png'
	},
	{
		id: 'paroquias',
		name: 'Paróquias',
		description: 'Mapa interativo e informações completas de paróquias em todo o Brasil.',
		image: '/assets/paroquias.png'
	},
	{
		id: 'liturgia',
		name: 'Liturgia',
		description: 'Leia e acompanhe a liturgia diária com conforto e clareza.',
		image: '/assets/liturgia.png'
	},
	{
		id: 'oracoes',
		name: 'Orações',
		description: 'Acesse orações, novenas e conteúdos para alimentar sua vida espiritual.',
		image: '/assets/oracoes.png'
	},
	{
		id: 'exame',
		name: 'Exame de Consciência',
		description: 'Prepare-se para uma boa confissão com um passo a passo guiado.',
		image: '/assets/exame.png'
	}
];

export const audiences: AudienceItem[] = [
	{
		icon: Heart,
		title: 'Fiéis',
		description: 'Acompanhe sua vida espiritual no dia a dia.'
	},
	{
		icon: GraduationCap,
		title: 'Catequistas',
		description: 'Recursos para apoiar sua missão de evangelizar.'
	},
	{
		icon: Flame,
		title: 'Sacerdotes',
		description: 'Ferramentas práticas para o ministério.'
	},
	{
		icon: HeartHandshake,
		title: 'Paróquias',
		description: 'Divulgue horários e informações da sua comunidade.'
	},
	{
		icon: Users,
		title: 'Comunidades',
		description: 'Organize grupos e compartilhe conteúdos edificantes.'
	}
];

export const footerColumns: FooterColumn[] = [
	{
		title: 'Navegação',
		links: [
			{ label: 'Recursos', href: '#recursos' },
			{ label: 'Para quem', href: '#para-quem' },
			{ label: 'Sobre o projeto', href: '#sobre' },
			{ label: 'Contribuir', href: '#contribuir' },
			{ label: 'Contato', href: '#contato' }
		]
	},
	{
		title: 'Recursos',
		links: [
			{ label: 'Horários', href: '#recursos' },
			{ label: 'Paróquias', href: '#recursos' },
			{ label: 'Liturgia', href: '#recursos' },
			{ label: 'Orações', href: '#recursos' },
			{ label: 'Exame de Consciência', href: '#recursos' }
		]
	},
	{
		title: 'Desenvolvedores',
		links: [
			{ label: 'API', href: '/api', target: '_blank', rel: 'noopener noreferrer' },
			{ label: 'Documentação', href: '/api', target: '_blank', rel: 'noopener noreferrer' },
			{ label: 'GitHub', href: 'https://github.com/jp066/ordinarium' }
		]
	}
];
