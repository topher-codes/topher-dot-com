import Link from 'next/link';

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html>
			<head></head>
			<body>
				<main>
					<nav>
						<Link href="/">Home</Link>
						<Link href="/blog">Blog</Link>
						<Link href="/projects">Projects</Link>
					</nav>
					{children}
				</main>
			</body>
		</html>
	);
}
