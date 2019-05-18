const { override, fixBabelImports, addLessLoader } = require('customize-cra');

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd-mobile',
    style: 'css',
  }),
  // less的配置
  addLessLoader(),
  //配置别名
  // addWebpackAlias({
  //   '@': path.resolve(__dirname, './src')
  // })
)
