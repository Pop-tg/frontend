// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

const autoPreprocess = require('svelte-preprocess')

/** @type {import("snowpack").SnowpackUserConfig } */

module.exports = {
  optimize: {
    bundle: true,
    minify: true,
    sourcemap: false,
    treeshake: true,
    target: 'es2018'
  },
  workspaceRoot: '../',
  mount: {
    public: { url: '/', static: true },
    src: { url: '/dist' }
  },
  plugins: [
    [
      '@snowpack/plugin-svelte',
      {
        preprocess: autoPreprocess({
          sourceMap: false
        })
      }
    ],
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
