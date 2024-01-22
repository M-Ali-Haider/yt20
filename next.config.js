/** @type {import('next').NextConfig} */
const nextConfig = {
    distDir: 'build',
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'i.ytimg.com',
                // port: '',
                // pathname: '/account123/**',
            },
        ],
    },
}

module.exports = nextConfig
