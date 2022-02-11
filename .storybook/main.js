const path = require('path');

module.exports = {
  stories: [
    "../src/**/*.story.@(js|jsx|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  framework: "@storybook/react",
  webpackFinal: async (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, '../src'),
      '@atoms': path.resolve(__dirname, '../src/components/atoms'),
      '@molecures': path.resolve(__dirname, '../src/components/molecures'),
      '@organisms': path.resolve(__dirname, '../src/components/organisms'),
      '@templates': path.resolve(__dirname, '../src/components/templates'),
    }

    return config
  },
  babel: async (options) => ({
    ...options,
    presets: [...options.presets, "@emotion/babel-preset-css-prop"],
  }),
}