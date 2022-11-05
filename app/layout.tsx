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
					</nav>
					{children}
				</main>
			</body>
		</html>
	);
}
