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

export interface AudienceItem {
	icon: Component;
	title: string;
	description: string;
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
