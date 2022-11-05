/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	experimental: { appDir: true },
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'scontent-sea1-1.xx.fbcdn.net',
				port: '',
				pathname: '/**',
			},
			{
				protocol: 'https',
				hostname: 'lh3.googleusercontent.com',
				port: '',
				pathname: '/**',
			},
		],
	},
};

module.exports = nextConfig;
