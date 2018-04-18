/**
 * 部署配置
 * @author muffin
 */

module.exports = {
  images: 'src/images',
  font: 'src/fonts',
  modules: [{
    name: 'sample',
    entry: 'src/app/sample/app.js',
    output: 'sample-app.js',
  }]
}
