import { defineConfig } from 'eslint/config'
import react from 'eslint-plugin-react'
import reactNative from 'eslint-plugin-react-native'
import babelParser from '@babel/eslint-parser'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import js from '@eslint/js'
import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
})

export default defineConfig([
  {
    // Do NOT use Babel to parse the config file itself.
    files: ['**/*.js', '**/*.jsx'], // only parse source files with Babel
    languageOptions: {
      parser: babelParser,
      parserOptions: {
        requireConfigFile: false,
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...reactNative.environments['react-native']['react-native'],
      },
    },

    plugins: {
      react,
      'react-native': reactNative,
    },

    settings: {
      react: {
        version: 'detect',
      },
    },
    extends: [compat.extends('plugin:react/recommended')],
    ...compat.extends('eslint:recommended', 'plugin:react/recommended')[0],
    rules: {
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
    },

    // Use `extends` from compat helper
  },
])
