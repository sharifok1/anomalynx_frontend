// next.config.js
module.exports = {
    webpack: (config, { isServer }) => {
      // Add a rule to handle .mp4 files
      config.module.rules.push({
        test: /\.(mp4)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              publicPath: '/_next',
              name: 'static/media/[name].[hash].[ext]',
            },
          },
        ],
      });
  
      return config;
    },
  };
  