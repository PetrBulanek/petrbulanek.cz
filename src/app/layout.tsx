import type { Metadata } from 'next';
import { Noto_Sans } from 'next/font/google';
import { ReactNode } from 'react';
import '../styles/globals.css';

const noto_Sans = Noto_Sans({
	weight: ['400', '600'],
	subsets: ['latin'],
	display: 'swap',
});

export const metadata: Metadata = {
	metadataBase: new URL('https://www.petrbulanek.cz/'),
	title: {
		default: 'Petr Bulánek',
		template: '%s | Petr Bulánek',
	},
};

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="cs">
			<head>
				<link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
				<link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
				<link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
				<link rel="manifest" href="/favicons/site.webmanifest" />
				<link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#15803d" />
				<link rel="shortcut icon" href="/favicons/favicon.ico" />
				<meta name="msapplication-TileColor" content="#bae6fd" />
				<meta name="msapplication-config" content="/favicons/browserconfig.xml" />
				<meta name="theme-color" content="#15803d" />
			</head>

			<body className={noto_Sans.className}>{children}</body>
		</html>
	);
}
