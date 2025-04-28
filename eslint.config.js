import eslintPluginReact from 'eslint-plugin-react'
import eslintPluginReactNative from 'eslint-plugin-react-native'
import babelParser from '@babel/eslint-parser'

export default [
  {
    plugins: {
      react: eslintPluginReact,
      'react-native': eslintPluginReactNative,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    languageOptions: {
      parser: babelParser,
      parserOptions: {
        requireConfigFile: false,
      },
      parserOptions: {
        requireConfigFile: false, // usein tarpeen @babel/eslint-parser kanssa
      },
      globals: {
        'react-native/react-native': true,
      },
    },
    rules: {
      ...eslintPluginReact.configs.recommended.rules, // react recommended -säännöt
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
    },
  },
]
