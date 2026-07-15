import { BookMarked, Church, Clock, Sparkles, Shield, Heart, Users } from '@lucide/svelte';
import type {
	NavItem,
	IndicatorItem,
	FeatureItem,
	TestimonialItem,
	FAQItem,
	FooterColumn
} from './types';
import { ARCHDIOCESE_URL, APP_URL } from './constants';

export const navItems: NavItem[] = [
	{
		label: 'Paróquias',
		href: 'https://ordinarium.vercel.app/paroquias',
		target: '_blank',
		rel: 'noopener noreferrer'
	},
	{
		label: 'Horários',
		href: 'https://ordinarium.vercel.app/horarios',
		target: '_blank',
		rel: 'noopener noreferrer'
	},
	{ label: 'Leo', href: `${APP_URL}/leo`, target: '_blank', rel: 'noopener noreferrer' }
];

export const indicators: IndicatorItem[] = [
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
		icon: BookMarked,
		title: 'Liturgia Diária',
		description:
			'Acompanhe as leituras, orações e celebrações do dia, segundo o calendário litúrgico.',
		href: '#recursos'
	},
	{
		icon: Church,
		title: 'Paróquias',
		description: 'Encontre paróquias perto de você com contatos, horários e mapas.',
		href: '#recursos'
	},
	{
		icon: Clock,
		title: 'Horários',
		description:
			'Missas, confissões e adorações conforme informações enviadas pelas paróquias na sua região.',
		href: '#recursos'
	},
	{
		icon: Heart,
		title: 'Orações',
		description: 'Orações tradicionais e momentos de espiritualidade.',
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

export const testimonials: TestimonialItem[] = [
	{
		quote:
			'O Ordinarium mudou minha rotina de oração. Antes eu buscava liturgia em vários apps, agora está tudo em um só lugar.',
		name: 'Mariana S.',
		context: 'Paroquiana em São Paulo'
	},
	{
		quote:
			'Como catequista, preciso de fontes confiáveis e organizadas. O Ordinarium me ajuda a preparar as aulas com as leituras do dia.',
		name: 'Carlos H.',
		context: 'Catequista em Teresina'
	}
];

export const faqItems: FAQItem[] = [
	{
		question: 'O que é o Ordinarium?',
		answer:
			'O Ordinarium é um aplicativo católico que reúne liturgia diária, horários de missas, diretório de paróquias, orações e exames de consciência — tudo em um só lugar para acompanhar sua vida espiritual todos os dias.'
	},
	{
		question: 'É gratuito?',
		answer:
			'Sim, o Ordinarium é um projeto independente e sem anúncios. Você pode usar todas as funcionalidades básicas gratuitamente. Algumas ferramentas avançadas poderão ter acesso em breve.'
	},
	{
		question: 'Como encontrar minha paróquia?',
		answer:
			'No app, acesse a seção "Paróquias" e permita o acesso à sua localização. O Ordinarium mostra as paróquias mais próximas com contatos, horários e mapas integrados.'
	},
	{
		question: 'Posso usar offline?',
		answer:
			'Parte do conteúdo, como orações e liturgia do dia, pode ser acessado offline após o primeiro carregamento. Funcionalidades como mapas de paróquias precisam de conexão com a internet.'
	},
	{
		question: 'Como contribuir com o projeto?',
		answer:
			'O Ordinarium é mantido pela generosidade da comunidade. Você pode contribuir financeiramente ou ajudar com código-fonte no GitHub. Acesse a seção "Contribuir" para mais informações.'
	},
	{
		question: 'Quem está por trás do Ordinarium?',
		answer:
			'O Ordinarium é um projeto colaborativo feito por católicos, em parceria com a Arquidiocese de Teresina e outros apoiadores. Nosso objetivo é facilitar a vida de oração dos fiéis no Brasil.'
	}
];

export const footerColumns: FooterColumn[] = [
	{
		title: 'Navegação',
		links: [
			{ label: 'Recursos', href: '#recursos' },
			{ label: 'Sobre', href: '#sobre' },
			{ label: 'Parceria', href: '#parceria' },
			{ label: 'Contato', href: '#contato' }
		]
	},
	{
		title: 'Recursos',
		links: [
			{ label: 'Horários', href: '#recursos' },
			{ label: 'Paróquias', href: '#recursos' },
			{ label: 'Liturgia', href: '#recursos' },
			{ label: 'Orações', href: '#recursos' }
		]
	},
	{
		title: 'Desenvolvedores',
		links: [
			{ label: 'API', href: '/api', target: '_blank', rel: 'noopener noreferrer' },
			{ label: 'GitHub', href: 'https://github.com/jp066/ordinarium' }
		]
	},
];
