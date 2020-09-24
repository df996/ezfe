module.exports = {
  pages: {
    index: {
      entry: 'examples/main.ts',
      template: 'examples/index.html',
      filename: 'index.html',
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    }
  },

  devServer: {
    port: 8899
  }
}
