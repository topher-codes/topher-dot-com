import Link from 'next/link';
import './globals.css';

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
					<div className="container">{children}</div>
				</main>
			</body>
		</html>
	);
}
