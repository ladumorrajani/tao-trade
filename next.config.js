/** @type {import('next').NextConfig} */
const nextConfig = {
	webpack: (config) => {
		config.module.rules.push({
			test: /\.(mp4|mov)$/i,
			loader: "file-loader",
		});

		return config;
	},
};

module.exports = nextConfig;
