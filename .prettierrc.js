module.exports = {
	plugins: ['prettier-plugin-tailwindcss'],
	printWidth: 120,
	tabWidth: 4,
	singleQuote: true,
	useTabs: true,
	trailingComma: 'es5',
	proseWrap: 'always',
	tailwindConfig: './tailwind.config.ts',
	tailwindFunctions: ['clsx', 'cva'],
};
