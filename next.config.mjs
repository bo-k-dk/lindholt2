/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns:[
        {
            protocol: 'https',
            hostname: 'images.pexels.com'
        },
        {
            protocol: 'http',
            hostname: 'i.boliga.org'
        } 
    ]
    }
};

export default nextConfig;
