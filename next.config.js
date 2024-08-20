/** @type {import('next').NextConfig} */
const nextConfig = {
    // basePath: '',
    // distDir: 'build',
    basePath: '',
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
