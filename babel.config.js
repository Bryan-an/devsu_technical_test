module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    '@babel/plugin-proposal-export-namespace-from',
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@/screens': './src/screens',
          '@/navigation': './src/navigation',
          '@/components': './src/components',
          '@/services': './src/services',
          '@/hooks': './src/hooks',
          '@/utils': './src/utils',
          '@/config': './src/config',
          '@/assets': './src/assets',
          '@/types': './src/types',
          '@/constants': './src/constants',
        },
      },
    ],
  ],
};
