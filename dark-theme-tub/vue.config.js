module.exports = {
  assetsDir: undefined,
  publicPath: 'Dark-Theme-TUB/',
  outputDir: '../docs/',
  runtimeCompiler: undefined,
  productionSourceMap: undefined,
  parallel: undefined,
  css: undefined,

  pluginOptions: {
    prerenderSpa: {
      registry: undefined,
      renderRoutes: [
        '/',
        '/preview',
        '/todo'
      ],
      useRenderEvent: true,
      headless: true,
      onlyProduction: true
    }
  }
}
