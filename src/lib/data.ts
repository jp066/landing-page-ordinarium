import {
	BookMarked,
	Church,
	Clock,
	Sparkles,
	Shield,
	Heart,
	Users,
	Server,
	Code,
	BrainCircuit,
	BookOpen,
	Smartphone,
	Pencil
} from '@lucide/svelte';
import type {
	NavItem,
	IndicatorItem,
	FeatureItem,
	ModuleItem,
	TestimonialItem,
	FAQItem,
	FAQCategory,
	FooterColumn,
	SupportReason
} from './types';
import { ARCHDIOCESE_URL, APP_URL } from './constants';
export const navItems: NavItem[] = [
	{
		label: 'Paróquias',
		href: `${APP_URL}/paroquias`
	},
	{
		label: 'Horários',
		href: `${APP_URL}/horarios`
	},
	{ label: 'Leo', href: `${APP_URL}/leo` },
	{ label: 'Sugestões', href: '/roadmap' }
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
	},
	{
		id: 'leo',
		name: 'Leo',
		description:
			'Converse com o assistente virtual do Ordinarium para orações, leituras e reflexões.',
		image: '/assets/mockup-chat.png'
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
	},
	{
		quote:
			'A parte do exame de consciência me ajudou muito no meu crescimento espiritual. Recomendo para todos que buscam uma vida de fé mais profunda.',
		name: 'Ana Beatriz L.',
		context: 'Leitora em Fortaleza'
	},
	{
		quote:
			'Finalmente um app católico feito com carinho. O diretório de paróquias facilita demais quando viajo e preciso encontrar uma missa.',
		name: 'Fernando M.',
		context: 'Fiel em Brasília'
	},
	{
		quote:
			'Uso o Ordinarium toda manhã antes do trabalho. As orações e leituras do dia me preparam para enfrentar os desafios com fé.',
		name: 'Luciana P.',
		context: 'Paroquiana em Salvador'
	},
	{
		quote:
			'Como diácono, o Ordinarium se tornou minha ferramenta diária. Túdo organizado, confiável e acessível. Uma bênção para a pastoral.',
		name: 'Pe. Rafael O.',
		context: 'Diácono em Curitiba'
	}
];

export const faqItems: FAQItem[] = [
	{
		question: 'O que é o Ordinarium?',
		answer:
			'O Ordinarium é um aplicativo criado para ajudar os católicos a viverem melhor sua fé no dia a dia, reunindo recursos para oração, liturgia, formação e acompanhamento da vida espiritual. A proposta do Ordinarium é aproximar a fé da rotina dos fiéis, ajudando cada pessoa a transformar pequenos momentos do cotidiano em oportunidades de oração e crescimento espiritual.'
	},
	{
		question: 'Por que o nome Ordinarium?',
		answer:
			'Ordinarium vem do latim e está relacionado àquilo que é ordinário, comum e cotidiano. O nome representa a missão do aplicativo: ajudar os fiéis a integrarem a fé à sua vida comum, tornando a oração, a liturgia e a caminhada espiritual parte da rotina. A fé também é vivida na vida ordinária.'
	},
	{
		question: 'O que posso fazer no Ordinarium?',
		answer:
			'O Ordinarium reúne recursos para auxiliar sua caminhada espiritual, como: encontrar paróquias, consultar horários de missas e confissões, acompanhar a liturgia diária, ler a Bíblia, acessar orações, conhecer o santo do dia, realizar exames de consciência, acompanhar sua vida espiritual e conversar com o assistente Leo.'
	},
	{
		question: 'O que é o Leo?',
		answer:
			'O Leo é o assistente inteligente do Ordinarium. Ele ajuda os usuários a encontrar conteúdos, utilizar recursos da plataforma e refletir sobre diferentes aspectos da vida espiritual.'
	},
	{
		question: 'O Leo substitui um padre ou confessor?',
		answer:
			'Não. O Leo é uma ferramenta tecnológica de apoio e não substitui a confissão sacramental, a direção espiritual, um sacerdote, a comunidade ou a autoridade da Igreja Católica. Para questões importantes de natureza doutrinal, pastoral ou pessoal, recomendamos buscar a orientação de um sacerdote ou outra pessoa qualificada.'
	},
	{
		question: 'O Ordinarium é oficialmente ligado à Igreja Católica?',
		answer:
			'O Ordinarium é uma plataforma independente, desenvolvida para católicos. Não é oficialmente administrado ou mantido pela Santa Sé, por uma diocese específica ou por outra instituição da Igreja Católica, salvo quando expressamente indicado.'
	},
	{
		question: 'O Ordinarium é gratuito?',
		answer: 'Sim. O Ordinarium oferece recursos gratuitos para todos os usuários.'
	},
	{
		question: 'O Ordinarium utiliza meus dados para treinar inteligência artificial?',
		answer:
			'O Ordinarium não utiliza suas informações pessoais ou conteúdos privados para treinar modelos de inteligência artificial próprios sem uma finalidade informada ao usuário. Quando você utiliza recursos de inteligência artificial, como o Leo, determinadas informações podem ser processadas para gerar a resposta solicitada. O tratamento desses dados segue nossa Política de Privacidade e as condições aplicáveis aos serviços utilizados pelo Ordinarium.'
	}
];

export const faqPageCategories: FAQCategory[] = [
	{
		title: 'Sobre o Ordinarium',
		items: [
			{
				question: 'O que é o Ordinarium?',
				answer:
					'O Ordinarium é um aplicativo criado para ajudar os católicos a viverem melhor sua fé no dia a dia, reunindo recursos para oração, liturgia, formação e acompanhamento da vida espiritual.'
			},
			{
				question: 'Por que o nome Ordinarium?',
				answer:
					'Ordinarium vem do latim e está relacionado àquilo que é ordinário, comum e cotidiano. O nome representa a missão do aplicativo: ajudar os fiéis a integrarem a fé à sua vida comum, tornando a oração, a liturgia e a caminhada espiritual parte da rotina.'
			},
			{
				question: 'Para quem o Ordinarium foi criado?',
				answer:
					'O Ordinarium foi criado para católicos que desejam organizar e aprofundar sua vida espiritual por meio de ferramentas digitais simples, sem substituir a vivência da fé, os sacramentos ou a comunidade paroquial.'
			}
		]
	},
	{
		title: 'Recursos do aplicativo',
		items: [
			{
				question: 'O que posso fazer no Ordinarium?',
				answer:
					'O Ordinarium reúne recursos para auxiliar sua caminhada espiritual, como: encontrar paróquias, consultar horários de missas e confissões, acompanhar a liturgia diária, ler a Bíblia, acessar orações, conhecer o santo do dia, realizar exames de consciência, acompanhar sua vida espiritual e conversar com o assistente Leo.'
			},
			{
				question: 'O que é o Leo?',
				answer:
					'O Leo é o assistente inteligente do Ordinarium. Ele ajuda os usuários a encontrar conteúdos, utilizar recursos da plataforma e refletir sobre diferentes aspectos da vida espiritual.'
			},
			{
				question: 'O Leo substitui um padre ou confessor?',
				answer:
					'Não. O Leo é uma ferramenta tecnológica de apoio e não substitui a confissão sacramental, a direção espiritual, um sacerdote, a comunidade ou a autoridade da Igreja Católica.'
			},
			{
				question: 'O Ordinarium oferece confissão online?',
				answer:
					'Não. O Ordinarium pode ajudar você a encontrar horários e locais de confissão, mas a confissão sacramental acontece com um sacerdote, conforme a prática da Igreja Católica.'
			},
			{
				question: 'Posso usar o Ordinarium sem assinar o Premium?',
				answer:
					'Sim. O plano gratuito continua oferecendo diversos recursos para ajudar você a viver sua fé no cotidiano.'
			}
		]
	},
	{
		title: 'Fé e conteúdos',
		items: [
			{
				question: 'O Ordinarium é oficialmente ligado à Igreja Católica?',
				answer:
					'O Ordinarium é uma plataforma independente, desenvolvida para católicos. Não é oficialmente administrado ou mantido pela Santa Sé, por uma diocese específica ou por outra instituição da Igreja Católica, salvo quando expressamente indicado.'
			},
			{
				question: 'De onde vêm os conteúdos litúrgicos e religiosos?',
				answer:
					'Os conteúdos utilizados pelo Ordinarium são obtidos a partir de fontes definidas para cada recurso e apresentados com o objetivo de auxiliar os fiéis em sua vida espiritual.'
			},
			{
				question: 'Posso confiar nas respostas do Leo?',
				answer:
					'O Leo foi desenvolvido para auxiliar na exploração de conteúdos e recursos do Ordinarium. Como qualquer sistema de inteligência artificial, ele pode cometer erros. Suas respostas não devem ser consideradas uma substituição da orientação de um sacerdote ou de uma autoridade qualificada da Igreja.'
			}
		]
	},
	{
		title: 'Planos e assinatura',
		items: [
			{
				question: 'O Ordinarium é gratuito?',
				answer: 'Sim. O Ordinarium oferece recursos gratuitos para todos os usuários.'
			},
			{
				question: 'O que está incluído no plano gratuito?',
				answer:
					'O plano gratuito inclui recursos como: paróquias, horários de missas e confissões, liturgia diária, Bíblia, orações, santo do dia e leituras.'
			},
			{
				question: 'O que está incluído no Ordinarium Premium?',
				answer:
					'O Premium oferece recursos adicionais para acompanhar e aprofundar sua caminhada espiritual, como: favoritos, histórico de exames de consciência, plano espiritual, diário espiritual, recursos avançados do Leo e outras funcionalidades exclusivas.'
			},
			{
				question: 'Posso usar o Ordinarium sem assinar o Premium?',
				answer:
					'Sim. O plano gratuito continua oferecendo diversos recursos para ajudar você a viver sua fé no cotidiano.'
			}
		]
	},
	{
		title: 'Privacidade e segurança',
		items: [
			{
				question: 'Meus dados estão seguros?',
				answer:
					'O Ordinarium adota medidas técnicas e organizacionais para proteger os dados dos usuários e trata as informações de acordo com a legislação aplicável.'
			},
			{
				question: 'O Ordinarium utiliza meus dados para treinar inteligência artificial?',
				answer:
					'O Ordinarium não utiliza suas informações pessoais ou conteúdos privados para treinar modelos de inteligência artificial próprios sem uma finalidade informada ao usuário.'
			},
			{
				question: 'Posso excluir minha conta e meus dados?',
				answer:
					'Sim. O usuário poderá solicitar a exclusão de sua conta e dos dados pessoais associados, conforme as condições descritas na Política de Privacidade.'
			},
			{
				question: 'Como posso entrar em contato com o suporte?',
				answer:
					'Você pode entrar em contato com a equipe do Ordinarium pelos canais oficiais de suporte disponibilizados no aplicativo.'
			}
		]
	},
	{
		title: 'Aplicativo',
		items: [
			{
				question: 'O Ordinarium possui aplicativo para celular?',
				answer:
					'Sim. O Ordinarium é um aplicativo desenvolvido para dispositivos móveis, com foco em oferecer uma experiência prática e acessível para a vida espiritual cotidiana.'
			},
			{
				question: 'Preciso criar uma conta para usar o Ordinarium?',
				answer:
					'Alguns recursos podem ser acessados sem uma conta, enquanto outros recursos personalizados podem exigir cadastro. A conta permite uma experiência mais personalizada.'
			},
			{
				question: 'Encontrei um erro em uma informação ou horário de paróquia. Como posso avisar?',
				answer:
					'Você pode reportar informações incorretas diretamente pelo Ordinarium. A equipe poderá analisar o relato e atualizar os dados quando necessário.'
			}
		]
	}
];

export const footerColumns: FooterColumn[] = [
	{
		title: 'Navegação',
		links: [
			{ label: 'Recursos', href: '/#recursos' },
			{ label: 'Sobre', href: '/#sobre' },
			{ label: 'Perguntas frequentes', href: '/faq' },
			{ label: 'Apoiar', href: '/apoiar' },
			{ label: 'Contato', href: '/#contato' }
		]
	},
	{
		title: 'Recursos',
		links: [
			{ label: 'Horários', href: '/#recursos' },
			{ label: 'Paróquias', href: '/#recursos' },
			{ label: 'Liturgia', href: '/#recursos' },
			{ label: 'Orações', href: '/#recursos' }
		]
	},
	{
		title: 'Desenvolvedores',
		links: [
			{ label: 'API', href: '/api' },
			{
				label: 'GitHub',
				href: 'https://github.com/masteryogo/ordinarium',
				target: '_blank',
				rel: 'noopener noreferrer'
			}
		]
	}
];

export const supportReasons: SupportReason[] = [
	{
		icon: Server,
		title: 'Infraestrutura',
		description:
			'Manter servidores, serviços em nuvem e ferramentas essenciais para o funcionamento contínuo do aplicativo.'
	},
	{
		icon: Code,
		title: 'Novas funcionalidades',
		description:
			'Desenvolver recursos que ampliam as possibilidades do Ordinarium e atendem melhor às necessidades dos usuários.'
	},
	{
		icon: Smartphone,
		title: 'Experiência do usuário',
		description:
			'Melhorar a interface, o desempenho e a usabilidade para que cada interação seja mais simples e agradável.'
	},
	{
		icon: BrainCircuit,
		title: 'Inteligência artificial',
		description:
			'Manter e aprimorar os recursos de IA, como o Leo, que oferecem assistência espiritual personalizada.'
	},
	{
		icon: BookOpen,
		title: 'Produção de conteúdos',
		description:
			'Organizar, revisar e disponibilizar conteúdos litúrgicos, orações e textos para alimentar a vida espiritual dos fiéis.'
	},
	{
		icon: Pencil,
		title: 'Manutenção e melhorias',
		description:
			'Corrigir problemas, atualizar dependências e garantir que o Ordinarium permaneça estável e seguro.'
	}
];
