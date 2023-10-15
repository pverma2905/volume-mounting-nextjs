/** @type {import('next').NextConfig} */
const nextConfig = {
    webpackDevMiddleware: config => {
        config.watchOptions = {
            poll: 1000,
            aggregateTimeout: 300,
        }
        return config
    },
    experimental: {
        outputStandalone: true,
    },
    reactStrictMode: true,
    swcMinify: false,
    // images: {
    //     domains: [...],
    // },
}

module.exports = nextConfig
