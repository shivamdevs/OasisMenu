export const SITE = {
	title: 'OasisMenu',
	description: 'Lightweight and customizable context menu for React.',
	defaultLanguage: 'en-us',
} as const;

export const OPEN_GRAPH = {
	image: {
		src: 'https://github.com/shivamdevs/OasisMenu/blob/main/documentation/public/default-og-image.png?raw=true',
		alt:
			'OasisMenu logo on a starry expanse of space,' +
			' with a purple saturn-like planet floating in the right foreground',
	},
	twitter: 'shivam0dewangan',
};

export const GITHUB_EDIT_URL = `https://github.com/shivamdevs/OasisMenu/tree/main/documentation`;

export const COMMUNITY_INVITE_URL = `https://myosis.tech/invite`;

export const PROJECT_BASE_URL = "oasismenu";

// See "Algolia" section of the README for more information.
export const ALGOLIA = {
	indexName: 'XXXXXXXXXX',
	appId: 'XXXXXXXXXX',
	apiKey: 'XXXXXXXXXX',
};

export type Sidebar = Record<
	string, { text: string; link: string }[]
>;
export const SIDEBAR: Sidebar = {
	'Start Here': [
		{
			text: 'Getting Started',
			link: 'getting-started'
		},
		{
			text: 'Installation',
			link: 'installation'
		},
		{
			text: 'Demo Examples',
			link: 'demo'
		},
		{
			text: 'Components',
			link: 'components'
		},
	],
	'Components': [
		{
			text: 'OasisMenuBlock',
			link: 'components/oasismenublock'
		},
		{
			text: 'OasisMenuTrigger',
			link: 'components/oasismenutrigger'
		},
		{
			text: 'OasisMenu',
			link: 'components/oasismenu'
		},
		{
			text: 'OasisMenuItem',
			link: 'components/oasismenuitem'
		},
		{
			text: 'OasisMenuBreak',
			link: 'components/oasismenubreak'
		},
	],
	'Customization': [
		{
			text: 'Styling',
			link: 'customization'
		},
		{
			text: 'Themes',
			link: 'customization/themes'
		},
		{
			text: 'Animations',
			link: 'customization/animations'
		},
	],
	'Support': [
		{
			text: 'FAQ',
			link: 'support'
		},
		{
			text: 'Limitations',
			link: 'support/limitations'
		},
	],
};
