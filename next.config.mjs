/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'vibe.mypinata.cloud',
                port: ''
            }
        ]
    }
};

export default nextConfig;
