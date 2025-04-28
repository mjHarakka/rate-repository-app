// eslint.config.js
import js from '@eslint/js'
import react from 'eslint-plugin-react'
import reactNative from 'eslint-plugin-react-native'
import babelParser from '@babel/eslint-parser'

export default [
  js.configs.recommended,
  {
    plugins: {
      react,
      'react-native': reactNative,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    languageOptions: {
      parser: babelParser, // Tässä määritetään babelParser, joka osaa käsitellä JSX:ää
      parserOptions: {
        requireConfigFile: false, // Tämä varmistaa, että Babel ei vaadi erillistä konfiguraatiotiedostoa
      },
    },
    rules: {
      ...react.configs.recommended.rules,
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
    },
  },
]
