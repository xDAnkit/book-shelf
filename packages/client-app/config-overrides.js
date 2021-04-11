const path = require('path');
const {override, addBabelPlugins, babelInclude} = require('customize-cra');
const {alias, configPaths} = require('react-app-rewire-alias');

module.exports = override(
  ...addBabelPlugins('@babel/plugin-proposal-class-properties'),
  ...addBabelPlugins('@babel/plugin-transform-react-jsx'),
  babelInclude([
    path.resolve(__dirname, 'node_modules/react-native-elements'),
    path.resolve(__dirname, 'node_modules/react-native-vector-icons'),
    path.resolve(__dirname, 'node_modules/react-native-ratings'),
    path.resolve(__dirname, 'src'),
    path.resolve('node_modules/react-native-animatable'),
  ]),
);

module.exports = function override(config) {
  config.module.rules.push({
    test: /\.ttf$/,
    loader: 'file-loader',
    include: path.resolve(__dirname, './static/media/[name].[ext]'),
  });

  return config;
};

module.exports = function override(config) {
  return alias(configPaths('./tsconfig.paths.json'))(config);
};
