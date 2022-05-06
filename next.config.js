/** @type {import('next').NextConfig} */
module.exports = {
	eslint: {
		ignoreDuringBuilds: true,
	},
	typescript: {
		ignoreBuildErrors: true,
	},
	pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js'],
};
