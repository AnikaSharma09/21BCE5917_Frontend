module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://your-api-endpoint.com/:path*'
      }
    ];
  }
};
