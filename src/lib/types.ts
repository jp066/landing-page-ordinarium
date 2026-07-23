import type { Component } from 'svelte';

export interface NavItem {
	label: string;
	href: string;
	target?: string;
	rel?: string;
}

export interface IndicatorItem {
	icon: Component;
	title: string;
	subtitle: string;
}

export interface FeatureItem {
	icon: Component;
	title: string;
	description: string;
	href: string;
}

export interface ModuleItem {
	image: string;
	name: string;
	description: string;
}

export interface TestimonialItem {
	quote: string;
	name: string;
	context: string;
}

export interface FAQItem {
	question: string;
	answer: string;
}

export interface FAQCategory {
	title: string;
	items: FAQItem[];
}

export interface FooterLink {
	label: string;
	href: string;
	target?: string;
	rel?: string;
}

export interface FooterColumn {
	title: string;
	links: FooterLink[];
}

export interface SupportReason {
	icon: Component;
	title: string;
	description: string;
}
