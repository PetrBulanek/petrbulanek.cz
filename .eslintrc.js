module.exports = {
	extends: [
		'next/core-web-vitals',
		'eslint:recommended',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:prettier/recommended',
	],
	rules: {
		'no-unused-vars': 'off',
		'jsx-a11y/alt-text': 'off',
	},
};
