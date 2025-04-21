/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  sassOptions: {
    implementation: 'sass-embedded',
  }
};

export default nextConfig;
