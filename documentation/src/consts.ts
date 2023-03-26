export const SITE = {
	title: 'OasisMenu',
	description: 'Lightweight and customizable context menu for React.',
	defaultLanguage: 'en-us',
} as const;

export const OPEN_GRAPH = {
	image: {
		src: 'https://github.com/withastro/astro/blob/main/.github/assets/banner.png?raw=true',
		alt:
			'astro logo on a starry expanse of space,' +
			' with a purple saturn-like planet floating in the right foreground',
	},
	twitter: 'shivam0dewangan',
};

export const GITHUB_EDIT_URL = `https://github.com/shivamdevs/OasisMenu/tree/main/documentation`;

export const COMMUNITY_INVITE_URL = `https://myosis.tech/invite`;

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
	'Examples': [
		{
			text: 'Demo',
			link: 'examples'
		},
		{
			text: 'Git Clone',
			link: 'examples/git'
		},
	],
};
