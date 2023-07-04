/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    // Webpack ERROR : Module not found: Can't resolve
    webpack5: true,
    webpack: (config) => {
        config.resolve.fallback = { fs: false };

        return config;
    },
};

module.exports = nextConfig;
