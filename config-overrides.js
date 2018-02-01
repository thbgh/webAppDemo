/**
 * @Author: THB
 * @Date:   2018-01-03 11:48:07 AM Wednesday
 * @Email:  thbwork2016@gmail.com
 * @Project: Mart
 * @Filename: config-overrides.js
 * @Last modified by:   THB
 * @Last modified time: 2018-01-15 17:45:42 PM Monday
 */

 const { injectBabelPlugin } = require('react-app-rewired');
 const rewireLess = require('react-app-rewire-less');

 module.exports = function override(config, env) {
    // do stuff with the webpack config...
    // config = injectBabelPlugin(['import', { libraryName: 'antd', libraryDirectory: 'es', style: 'css' }], config);
    // -   config = injectBabelPlugin(['import', { libraryName: 'antd', style: 'css' }], config);
    config = injectBabelPlugin(['import', { libraryName: 'antd-mobile', style: true }], config);
    config = rewireLess.withLoaderOptions({ modifyVars: { "@primary-color": "#1DA57A" },})(config, env);
    return config;
  };
