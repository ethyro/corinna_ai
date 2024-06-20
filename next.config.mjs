/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'ucarecdn.com',
        },
        {
          protocol: 'https',
          hostname: 'moccasin-emu-566274.hostingersite.com',
        },
      ],
    },
  }
  


export default nextConfig;
