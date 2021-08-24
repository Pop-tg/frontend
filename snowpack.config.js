// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */

module.exports = {
  workspaceRoot: '../',
  mount: {
    public: { url: '/', static: true },
    src: { url: '/dist' }
  },
  plugins: [
    ['@snowpack/plugin-svelte', {}],
    ['@snowpack/plugin-typescript', {}]
  ],
  packageOptions: {},
  devOptions: {},
  buildOptions: {},
  alias: {
    '@': './src',
    '@api': '../api/src'
  }
}
