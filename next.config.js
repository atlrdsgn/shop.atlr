const withBundleAnalyzer = require('@next/bundle-analyzer')
const path = require('path');

/**
 * @type {import('next').NextConfig}
 */
const config = {
    reactStrictMode: false,
    swcMinify: true,
    images: {
        formats: ['image/avif', 'image/webp'],
    },
    experimental: {
        appDir: true,
    },
    sassOptions: {
        includePaths: [path.join(__dirname, 'src/css')],
    },
}

module.exports = (_phase, { defaultConfig: _ }) => {
    const plugins = [withBundleAnalyzer({ enabled: process.env.ANALYZE === 'true' })]
    return plugins.reduce((acc, plugin) => plugin(acc), {...config })
}