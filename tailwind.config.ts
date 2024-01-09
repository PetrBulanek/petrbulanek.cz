import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

const config: Config = {
	content: ['./src/app/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		screens: {
			sm: '30rem',
			md: '48rem',
			lg: '64rem',
			xl: '75rem',
			'2xl': '90rem',
		},
		iconSize: {
			24: '1.5rem',
		},
		extend: {},
	},
	corePlugins: {
		container: false,
	},
	plugins: [
		plugin(function ({ matchUtilities, theme }) {
			matchUtilities(
				{
					icon: (value) => ({
						fontSize: value,
					}),
				},
				{
					values: theme('iconSize'),
				}
			);
		}),
	],
	future: {
		hoverOnlyWhenSupported: true,
	},
};
export default config;
