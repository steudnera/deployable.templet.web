// 部署配置

module.exports = {
  images: 'src/images',
  font: 'src/fonts',
  modules: [{
    name: 'sample',
    entry: 'src/app/sample/app.js',
    output: 'sample-app.js',
  }]
}
