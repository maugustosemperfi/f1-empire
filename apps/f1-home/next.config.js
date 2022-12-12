//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { withNx } = require('@nrwl/next/plugins/with-nx');
const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
  webpack(config, options) {
    if (!options.isServer) {
      config.plugins.push(
        new NextFederationPlugin({
          name: 'f1Home',
          remotes: {
            f1Home: `f1Home@http://localhost:3001/_next/static/chunks/remoteEntry.js`,
          },
          filename: 'static/chunks/remoteEntry.js',
          extraOptions: {},
          exposes: {
            './home': './pages/index.tsx',
            // "./pages-map": "./pages-map.js",
          },
          shared: {
            // whatever else
          },
        })
      );
    }

    return config;
  },
};

module.exports = withNx(nextConfig);
