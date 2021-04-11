module.exports = {
  presets: ['module:metro-react-native-babel-preset', '@babel/preset-flow', 'react-native'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.ts', '.android.ts', '.ts', '.ios.tsx', '.android.tsx', '.tsx', '.jsx', '.js', '.json'],
        alias: {
          '@features': './src/features',
          '@navigation': './src/navigation',
          '@components': './src/components',
          '@i18n': './src/utilities/i18n',
          '@network': './src/utilities/network',
          '@prod-config': './src/utilities/prod-config',
          '@utils': './src/utilities/utils',
          '@assets': './src/assets',
          '@redux': './src/redux',
          '^react-native$': 'react-native-web'
        }
      }
    ]
  ]
};
