import { Container } from '@/components/Container';
import { Divider } from '@/components/Divider';
import { ExtLink } from '@/components/ExtLink';
import { List } from '@/components/List';
import { Muted } from '@/components/Muted';
import { Section } from '@/components/Section';
import { SectionHeading } from '@/components/SectionHeading';
import { SectionSubheading } from '@/components/SectionSubheading';
import { CakeIcon } from '@/components/icons/Cake';
import { EnvelopeIcon } from '@/components/icons/Envelope';
import { LocationIcon } from '@/components/icons/Location';
import { PhoneIcon } from '@/components/icons/Phone';
import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
	title: 'Životopis',
};

export default function Zivotopis() {
	return (
		<>
			<header className="bg-sky-200 py-8 print:bg-transparent print:py-0">
				<Container className="grid items-center gap-x-8 gap-y-4 text-center print:gap-x-8 print:text-left md:grid-cols-[2fr,1fr] md:text-left lg:gap-x-16 lg:gap-y-8 lg:print:gap-x-8 lg:print:gap-y-4">
					<div className="space-y-2 print:space-y-2 md:space-y-4 md:print:space-y-2">
						<h1 className="text-3xl font-semibold tracking-wider text-green-700 print:text-4xl md:text-5xl md:print:text-4xl">
							Ing. Petr Bulánek
						</h1>
						<p className="text-xl font-semibold tracking-wider print:text-xl md:text-2xl md:print:text-xl">
							Senior frontend vývojář
						</p>
					</div>

					<div className="flex justify-center print:col-start-2 print:row-start-1 print:row-end-3 md:col-start-2 md:row-start-1 md:row-end-3">
						<figure className="inline-flex overflow-hidden rounded-full print:w-36">
							<Image src="/img/petr-bulanek.jpg" width="256" height="256" alt="Petr Bulánek" />
						</figure>
					</div>

					<ul className="grid justify-center gap-2 print:grid-cols-2 print:justify-start print:gap-2 md:grid-cols-2 md:justify-start md:gap-4 md:print:gap-2">
						{[
							{
								Icon: PhoneIcon,
								value: '(+420) 721 698 765',
							},
							{
								Icon: EnvelopeIcon,
								value: <a href="mailto:bulanek.petr@gmail.com">bulanek.petr@gmail.com</a>,
							},
							{
								Icon: LocationIcon,
								value: 'Praha',
							},
							{
								Icon: CakeIcon,
								value: 'srpen 1991',
							},
						].map(({ Icon, value }, idx) => (
							<li key={idx} className="flex items-center gap-x-2">
								<Icon />
								<span>{value}</span>
							</li>
						))}
					</ul>
				</Container>
			</header>

			<Container className="hidden print:my-4 print:block">
				<Divider />
			</Container>

			<main>
				<Container className="space-y-8 py-8 print:space-y-4 print:py-0 lg:space-y-16 lg:py-16 lg:print:space-y-4 lg:print:py-0">
					<Section>
						<div className="space-y-4 text-lg print:space-y-2 print:text-base print:leading-[1.2]">
							<p>
								Jsem seniorní frontend vývojář s&nbsp;více než&nbsp;
								<strong>desetiletou zkušeností s&nbsp;vývojem webů</strong>. Designy z&nbsp;Figmy
								(či&nbsp;jiného nástroje) převedu do&nbsp;
								<strong>perfektně přístupných a&nbsp;rychlých komponent</strong>. Kladu důraz na&nbsp;
								<strong>kvalitní výstup</strong>. Pixel perfect je mi vlastní, ale&nbsp;o&nbsp;designu
								přemýšlím a&nbsp;vše by mělo sedět s&nbsp;design systémem. Vyřeším i&nbsp;interaktivitu
								a&nbsp;případné animace. Knihovnu UI komponent či&nbsp;celé stránky většinou prezentuji
								ve&nbsp;Storybooku.
							</p>

							<p>
								Mám zkušenosti z&nbsp;velkých projektů (přes&nbsp;1000&nbsp;hodin práce
								na&nbsp;frontendu), kde&nbsp;spolupracuje více vývojářů. Nebojím se výzev a&nbsp;weby,
								na&nbsp;kterých jsem pracoval, mají velký dosah (miliony návštěvníků měsíčně).
								Komunikuji s&nbsp;klienty (i&nbsp;v&nbsp;angličtině) a&nbsp;umím navrhnout
								a&nbsp;obhájit vhodné řešení.
							</p>

							<p>
								Poradím si s&nbsp;různými technologiemi a&nbsp;knihovnami. Co&nbsp;neumím, to se rád
								naučím. Denně se vzdělávám a&nbsp;navštěvuji konference. Zeptám se, když něčemu
								nerozumím. Rád pomůžu vyřešit juniornějším kolegům jejich problém. Nebojím se diskuze,
								a&nbsp;když je něco nesmysl, řeknu to. Umím dát zpětnou vazbu kolegům i&nbsp;šéfům.
							</p>
						</div>
					</Section>

					<Divider className="lg:hidden lg:print:block" />

					<div className="grid gap-x-8 gap-y-8 print:grid-cols-[22fr,8fr] print:gap-x-8 print:gap-y-4 md:grid-cols-[2fr,1fr] md:print:grid-cols-[22fr,8fr] lg:gap-x-16 lg:print:gap-x-8">
						<div className="space-y-8 print:space-y-4">
							<Section>
								<SectionHeading>Pracovní zkušenosti</SectionHeading>

								<div className="space-y-6 print:space-y-3">
									{[
										{
											heading: 'Senior frontend vývojář',
											company: <ExtLink href="https://superkoders.com/">SUPERKODERS</ExtLink>,
											period: 'červenec 2014 - současnost',
											description: (
												<>
													<li>
														Kódování responzivních šablon pro&nbsp;středně velké
														a&nbsp;velké projekty (webové aplikace, e&#8209;shopy,
														prezentační weby) s&nbsp;důrazem na&nbsp;precizní výsledek,
														uživatelský prožitek, přístupnost a&nbsp;rychlost načítání.
													</li>
													<li>
														Tvorba design systémů a&nbsp;knihoven UI&nbsp;komponent
														prezentovaných ve&nbsp;Storybooku.
													</li>
													<li>
														Přímá komunikace s&nbsp;klienty, diskuze nad&nbsp;možnostmi
														řešení, realizace dlouhodobých projektů.
													</li>
													<li>
														Práce v&nbsp;týmu, vedení a&nbsp;supervize juniorních kolegů.
													</li>
													<li>
														Vývoj a&nbsp;posouvání interních nástrojů (tooling - Webpack,
														Gulp, PostCSS, linting,&hellip;) pro&nbsp;zefektivnění práce
														celého týmu.
													</li>
												</>
											),
										},

										{
											heading: 'Webový vývojář',
											company: <ExtLink href="https://kapesnisvet.cz/">Kapesní svět</ExtLink>,
											period: 'březen 2012 - únor 2014',
											description: (
												<>
													<li>
														Vývoj frontendových částí webů a&nbsp;webových aplikací
														s&nbsp;využitím technologií HTML, CSS, JavaScript.
													</li>
													<li>
														Programování jednodušší funkcionality backendové části webových
														aplikací - PHP (Nette), MySQL.
													</li>
												</>
											),
										},
										{
											heading: 'Webový vývojář',
											company: 'Na volné noze',
											period: 'prosinec 2011 - červenec 2014',
											description: (
												<>
													<li>
														Implementace menších webových stránek pro&nbsp;firmy
														i&nbsp;soukromé osoby.
													</li>
													<li>
														Kódování šablon s&nbsp;důrazem na&nbsp;validitu, použitelnost
														a&nbsp;SEO.
													</li>
												</>
											),
										},
									].map(({ heading, company, period, description }, idx) => (
										<div
											key={idx}
											className="relative space-y-2 pl-8 before:absolute before:-bottom-10 before:left-0 before:top-[0.625rem] before:ml-[0.3125rem] before:w-[2px] before:bg-green-700 last:before:hidden print:pl-0 print:before:hidden"
										>
											<div className="space-y-1">
												<div className="grid items-baseline gap-x-1 print:flex lg:flex">
													<SectionSubheading className="relative before:absolute before:-left-8 before:top-[0.625rem] before:h-3 before:w-3 before:rounded-full before:bg-green-700 print:before:hidden">
														{heading}
													</SectionSubheading>

													<Muted>({period})</Muted>
												</div>

												<p className="font-semibold">{company}</p>
											</div>

											<List>{description}</List>
										</div>
									))}
								</div>
							</Section>

							<Divider className="print:hidden" />

							<div className="break-after-page" />

							<Section>
								<SectionHeading>Referenční projekty</SectionHeading>

								<div className="space-y-6 print:space-y-3">
									{[
										{
											heading: (
												<ExtLink href="https://www.megaubytovanie.sk/">Megaubytovanie</ExtLink>
											),
											stack: ['React', 'Next.js', 'TypeScript', 'Tailwind', 'Storybook'],
											date: '2022 - současnost',
											description: (
												<>
													<li>
														Tvorba design systému a&nbsp;knihovny UI&nbsp;komponent (stovky
														komponent a&nbsp;desítky stránek) v&nbsp;Reactu.
													</li>
													<li>Implementace komponent v&nbsp;Next.js aplikaci.</li>
													<li>
														Agilní vývoj, JIRA, scrum (dvoutýdenní sprinty), spolupráce
														s&nbsp;několika React (Next.js) a&nbsp;backend (Symfony)
														vývojáři, přímá komunikace s&nbsp;klientem.
													</li>
												</>
											),
										},
										{
											heading: <ExtLink href="https://www.bezrealitky.cz/">Bezrealitky</ExtLink>,
											stack: [
												'React',
												'TypeScript',
												'CSS Modules',
												'React Bootstrap',
												'Storybook',
											],
											date: '2021 - současnost',
											description: (
												<>
													<li>
														Tvorba design systému a&nbsp;knihovny UI&nbsp;komponent
														s&nbsp;využitím knihovny React&nbsp;Bootstrap.
													</li>
													<li>
														Agilní vývoj, postupné zpřesňování a&nbsp;rozšiřování zadání.
													</li>
													<li>
														Optimalizace rychlosti načítání a&nbsp;důraz na&nbsp;technické
														SEO.
													</li>
												</>
											),
										},
										{
											heading: (
												<>
													Český rozhlas -{' '}
													<ExtLink href="https://www.mujrozhlas.cz/">MůjRozhlas</ExtLink>,{' '}
													<ExtLink href="https://www.irozhlas.cz/">iRozhlas</ExtLink>
												</>
											),
											stack: ['React', 'TypeScript', 'Twig', 'Sass', 'Styled JSX', 'Storybook'],
											date: '2017 - současnost',
											description: (
												<>
													<li>
														Tvorba šablon s&nbsp;velkým důrazem na&nbsp;přístupnost
														a&nbsp;rychlost načítání.
													</li>
													<li>
														Knihovna UI&nbsp;komponent v&nbsp;šablonovacím jazyku Twig
														(Drupal).
													</li>
													<li>
														Části aplikace v&nbsp;Reactu - program, přehrávač živého
														vysílání a&nbsp;pořadů.
													</li>
												</>
											),
										},
										// {
										// 	heading: 'Přední česká banka (TOP 3)',
										// 	stack: ['Twig', 'JavaScript', 'Stimulus', 'Sass'],
										// 	date: '2015 - současnost',
										// 	description: (
										// 		<>
										// 			<li>
										// 				Příprava statických šablon v&nbsp;šablonovacím jazyku Twig
										// 				s&nbsp;důrazem na&nbsp;precizní implementaci designu
										// 				pro&nbsp;vyšší jednotky různých projektů.
										// 			</li>
										// 			<li>Javascriptové komponenty pomocí frameworku Stimulus.</li>
										// 		</>
										// 	),
										// },
										{
											heading: 'ESET',
											stack: ['React', 'Handlebars', 'Material UI', 'Tailwind', 'Storybook'],
											date: '2023',
											description: (
												<>
													<li>
														Pomoc klientovi nalézt nejvhodnější technické řešení pro
														&nbsp;přípravu design systému použitelného napříč jeho projekty.
													</li>
													<li>
														Tvorba knihovny UI&nbsp;komponent v&nbsp;Reactu
														a&nbsp;Handlebars s&nbsp;využitím knihovny Material&nbsp;UI.
													</li>
												</>
											),
										},
										{
											heading: (
												<ExtLink href="https://designsystem.gov.cz/">
													Design systém gov.cz
												</ExtLink>
											),
											stack: [
												'React',
												'Stencil.js',
												'Web Components',
												'TypeScript',
												'Nx',
												'Sass',
												'Storybook',
											],
											date: '2022 - 2023',
											description: (
												<>
													<li>
														Návrh technického řešení a&nbsp;diskuze s&nbsp;klientem
														s&nbsp;ohledem na&nbsp;použití komponent v&nbsp;různých
														technologiích (React, Angular, Vue).
													</li>
													<li>Veký důraz na&nbsp;přístupnost.</li>
													<li>
														Kódování knihovny UI&nbsp;komponent s&nbsp;pomocí frameworku
														Stencil.js a&nbsp;přípravou portu do&nbsp;Reactu.
													</li>
												</>
											),
										},
										// {
										// 	heading: 'Americká streamovací platforma (obdoba Netflixu)',
										// 	stack: ['React', 'Next.js', 'TypeScript', 'Sass'],
										// 	date: '2021',
										// 	description: (
										// 		<>
										// 			<li>
										// 				Kódování a&nbsp;implementace UI&nbsp;komponent v&nbsp;Reactu
										// 				a&nbsp;Next.js.
										// 			</li>
										// 			<li>
										// 				Spolupráce většího množství vývojářů, komunikace
										// 				v&nbsp;angličtině.
										// 			</li>
										// 		</>
										// 	),
										// },
										{
											heading: (
												<ExtLink href="https://www.iranintl.com/">Iran International</ExtLink>
											),
											stack: ['React', 'Next.js', 'TypeScript', 'AMP', 'Styled JSX'],
											date: '2021',
											description: (
												<>
													<li>
														Kódování a&nbsp;implementace AMP&nbsp;komponent v&nbsp;Next.js
														pro&nbsp;zpravodajský televizní kanál se&nbsp;sídlem
														v&nbsp;Londýně.
													</li>
													<li>
														Velký důraz na&nbsp;rychlost načítání kvůli pomalému
														internetovému připojení a&nbsp;slabému výkonu zařízení většiny
														uživatelů.
													</li>
													<li>Podpora jazyků čtených zprava doleva.</li>
													<li>
														Agilní vývoj, spolupráce většího množství vývojářů, komunikace
														v&nbsp;angličtině.
													</li>
												</>
											),
										},
										// {
										// 	heading: <ExtLink href="https://www.tsbohemia.cz/">T.S. Bohemia</ExtLink>,
										// 	stack: ['JavaScript', 'Sass'],
										// 	date: '2019 - 2021',
										// 	description: (
										// 		<>
										// 			<li>
										// 				Kompletní redesign celého webu bez&nbsp;možnosti úprav
										// 				na&nbsp;straně HTML pouze pomocí JS a&nbsp;CSS.
										// 			</li>
										// 		</>
										// 	),
										// },
										// {
										// 	heading: <ExtLink href="https://www.invia.cz/">Invia</ExtLink>,
										// 	stack: ['React', 'Twig', 'JavaScript', 'Sass'],
										// 	date: '2016 - 2021',
										// 	description: (
										// 		<>
										// 			<li>
										// 				Kódování a&nbsp;napojování UI&nbsp;komponent - šablony v Twigu s
										// 				interkativními komponentami v Reactu (vyhledávání, objednávkový
										// 				formulář,&hellip;).
										// 			</li>
										// 			<li>Spolupráce několika frontend a&nbsp;backend vývojářů.</li>
										// 		</>
										// 	),
										// },
										// {
										// 	heading: (
										// 		<ExtLink href="https://www.vut.cz/">
										// 			Vysoké učení technické v Brně
										// 		</ExtLink>
										// 	),
										// 	stack: ['Twig', 'JavaScript', 'Sass'],
										// 	date: '2017 - 2019',
										// 	description: (
										// 		<>
										// 			<li>
										// 				Tvorba design systému a&nbsp;knihovny UI&nbsp;komponent
										// 				pro&nbsp;univerzitní weby.
										// 			</li>
										// 		</>
										// 	),
										// },
									].map(({ heading, stack, date, description }, idx) => (
										<div key={idx} className="space-y-2">
											<div className="space-y-1">
												<div className="grid items-baseline gap-x-1 print:flex lg:flex">
													<SectionSubheading>{heading}</SectionSubheading>
													<Muted asChild>
														<p>({date})</p>
													</Muted>
												</div>

												<p className="font-semibold">{stack?.join(', ')}</p>
											</div>

											<List>{description}</List>
										</div>
									))}
								</div>
							</Section>
						</div>

						<Divider className="print:hidden md:hidden" />

						<div className="space-y-8 print:space-y-4">
							<Section>
								<SectionHeading>Dovednosti</SectionHeading>

								<div className="grid gap-4 print:grid-cols-1 print:gap-2 lg:grid-cols-2 lg:print:grid-cols-1">
									<div className="space-y-1">
										<SectionSubheading>JavaScript</SectionSubheading>

										<List simpleInPrint>
											<li>DOM a&nbsp;Web&nbsp;API</li>
											<li>TypeScript</li>
											<li>React</li>
											<li>Next.js</li>
											<li>Storybook</li>
											<li>Astro</li>
											<li>Node.js a&nbsp;npm ekosystém</li>
										</List>
									</div>

									<div className="space-y-1">
										<SectionSubheading>CSS</SectionSubheading>

										<List simpleInPrint>
											<li>Sass</li>
											<li>BEM</li>
											<li>Tailwind</li>
											<li>CSS Modules</li>
											<li>Styled Components</li>
											<li>PostCSS</li>
											<li>Animace</li>
										</List>
									</div>

									<div className="space-y-1">
										<SectionSubheading>HTML</SectionSubheading>

										<List simpleInPrint>
											<li>Přístupnost</li>
											<li>Technické SEO</li>
											<li>Twig</li>
											<li>Handlebars</li>
											<li>Nunjucks</li>
										</List>
									</div>

									<div className="space-y-1">
										<SectionSubheading>Ostatní</SectionSubheading>

										<List simpleInPrint>
											<li>Optimalizace rychlosti</li>
											<li>GIT</li>
											<li>SVG</li>
											<li>Figma, Sketch, Adobe nástroje</li>
										</List>
									</div>
								</div>
							</Section>

							<Divider className="print:hidden" />

							<div className="break-after-page" />

							<Section>
								<SectionHeading>Vlastnosti</SectionHeading>

								<List>
									<li>Aktivní přístup, řešení problémů, kritické myšlení</li>
									<li>Spolehlivost, samostatnost, preciznost</li>
									<li>Spolupráce a&nbsp;týmovost, komunikativnost, flexibilita</li>
									<li>Organizační schopnosti, zodpovědnost, efektivita</li>
								</List>
							</Section>

							<Divider />

							<Section>
								<SectionHeading>Jazyky</SectionHeading>

								<List>
									<li>
										<strong>Čeština</strong> (rodilý mluvčí, vynikající psaný a&nbsp;mluvený projev)
									</li>
									<li>
										<strong>Angličtina</strong> (slovem i&nbsp;písmem na&nbsp;velice dobré úrovni)
									</li>
									<li>
										<strong>Němčina</strong> (základní znalost)
									</li>
								</List>
							</Section>

							<Divider />

							<Section>
								<SectionHeading>Vzdělání</SectionHeading>

								<ul>
									<li className="space-y-1">
										<SectionSubheading size="sm">
											<ExtLink href="https://www.uhk.cz/cs/fakulta-informatiky-a-managementu/fim">
												Fakulta informatiky a&nbsp;managementu
											</ExtLink>
											,<br /> Univerzita Hradec Králové
										</SectionSubheading>

										<Muted asChild>
											<p>(2010 - 2015)</p>
										</Muted>

										<p>Inženýr (Ing.), Systémové inženýrství a&nbsp;informatika</p>
									</li>
								</ul>
							</Section>
						</div>

						<div className="space-y-8 print:hidden print:space-y-4">
							<Divider />

							<Section>
								<SectionHeading>Přednášky</SectionHeading>

								<List>
									{[
										{
											heading: (
												<ExtLink href="https://www.youtube.com/watch?v=6vCvyuZZ6g8">
													Proč je iRozhlas / SUPER
												</ExtLink>
											),
											date: '(březen 2018)',
										},
										{
											heading: (
												<ExtLink href="https://www.youtube.com/watch?v=aOsjChUrlYU">
													CSS 2018
												</ExtLink>
											),
											date: '(prosinec 2017)',
										},
									].map(({ heading, date }, idx) => (
										<li key={idx}>
											{heading} <Muted>{date}</Muted>
										</li>
									))}
								</List>
							</Section>

							<Divider />

							<Section>
								<SectionHeading>Články</SectionHeading>

								<List>
									{[
										{
											heading: (
												<ExtLink href="https://superkoders.com/techmeetup-conference-2023">
													Co nás zaujalo na TechMeetup Conference 2023
												</ExtLink>
											),
											date: 'listopad 2023',
										},
										{
											heading: (
												<ExtLink href="https://medium.com/superkoders/letem-frontendov%C3%BDm-sv%C4%9Btem-vol-8-b047cdf66e12">
													Letem frontendovým světem, vol. 8
												</ExtLink>
											),
											date: 'březen 2023',
										},
										{
											heading: (
												<ExtLink href="https://medium.com/superkoders/6-d%C5%AFvodu-pro%C4%8D-vym%C4%9Bnit-spotlight-za-raycast-a-zv%C3%BD%C5%A1it-t%C3%ADm-svoji-produktivitu-9c802bf8a59d">
													6 důvodu proč vyměnit Spotlight za Raycast a zvýšit tím svoji
													produktivitu
												</ExtLink>
											),
											date: 'říjen 2022',
										},
										{
											heading: (
												<ExtLink href="https://medium.com/superkoders/nov%C3%BD-web-bezrealitky-jin%C3%AD-kod%C3%A9%C5%99i-si-na-n%C4%9Bj-netroufli-my-jsme-jej-sestavili-jako-knihovnu-react-544622de7cbf">
													Nový web Bezrealitky: jiní kodéři si na něj netroufli, my jsme jej
													sestavili jako knihovnu react komponent
												</ExtLink>
											),
											date: 'červen 2022',
										},
										{
											heading: (
												<ExtLink href="https://medium.com/superkoders/novinky-v-google-fonts-css-api-v2-2a2b97a22765">
													Novinky v Google Fonts CSS API v2
												</ExtLink>
											),
											date: 'červen 2020',
										},
										{
											heading: (
												<ExtLink href="https://medium.com/superkoders/vut-cb66993e7a75">
													VUT v Brně — case study
												</ExtLink>
											),
											date: 'červen 2018',
										},
										{
											heading: (
												<ExtLink href="https://medium.com/superkoders/irozhlas-web-rychlej%C5%A1%C3%AD-ne%C5%BE-zpravodajstv%C3%AD-7fe0396741b5">
													iRozhlas — web rychlejší než zpravodajství
												</ExtLink>
											),
											date: 'květen 2017',
										},
									].map(({ heading, date }, idx) => (
										<li key={idx}>
											{heading} <Muted>({date})</Muted>
										</li>
									))}
								</List>
							</Section>
						</div>
					</div>
				</Container>
			</main>
		</>
	);
}
