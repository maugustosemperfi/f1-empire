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
          name: 'f1Track',
          filename: 'static/chunks/remoteEntry.js',
          remotes: {
            f1Home: `f1Home@http://localhost:3001/_next/static/chunks/remoteEntry.js`,
          },
          extraOptions: {
          }
        })
      );
    }

    return config;
  },
};

module.exports = withNx(nextConfig);
