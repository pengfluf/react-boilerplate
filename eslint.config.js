import js from '@eslint/js';
import globals from 'globals';

import tseslint from 'typescript-eslint';

import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import importSort from 'eslint-plugin-simple-import-sort';
import eslintConfigPrettier from 'eslint-config-prettier';

const base = {
  settings: {
    react: { version: '18.3' },
  },
  extends: [
    js.configs.recommended,
    ...tseslint.configs.strictTypeChecked,
    eslintConfigPrettier,
  ],

  languageOptions: {
    ecmaVersion: 2020,
    globals: globals.browser,
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },

  plugins: {
    react,
    'react-hooks': reactHooks,
    'react-refresh': reactRefresh,
    'jsx-a11y': jsxA11y,
    'simple-import-sort': importSort,
  },

  rules: {
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
    ...reactHooks.configs.recommended.rules,

    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'react/react-in-jsx-scope': 'off',

    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: true,
        argsIgnorePattern: '^_',
        caughtErrors: 'none',
      },
    ],

    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: true,
        argsIgnorePattern: '^_',
        caughtErrors: 'none',
      },
    ],

    '@typescript-eslint/no-misused-promises': [
      'error',
      { checksVoidReturn: false },
    ],
    '@typescript-eslint/no-floating-promises': [
      'error',
      {
        ignoreIIFE: true,
      },
    ],

    '@typescript-eslint/explicit-function-return-type': [
      'error',
      { allowExpressions: true },
    ],

    '@typescript-eslint/restrict-template-expressions': [
      'error',
      { allowNumber: true },
    ],

    '@typescript-eslint/prefer-reduce-type-parameter': 'off',

    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          // Node.js builtins prefixed with `node:`.
          ['^node:'],
          // Packages. `react` related packages come first.
          ['^react', '^@?\\w'],
          // Internal packages.
          [
            '^(@|@api|@assets|@components|@constants|@store|@test|@customTypes|@pages|@utils)(/.*|$)',
          ],
          // Side effect imports.
          ['^\\u0000'],
          // Parent imports. Put `..` last.
          ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
          // Other relative imports. Put same-folder imports and `.` last.
          ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
          // Style imports.
          ['^.+\\.css$'],
        ],
      },
    ],
    'simple-import-sort/exports': 'error',
  },
};

export default tseslint.config(
  { ignores: ['dist', '!*.js', 'node_modules', '*env.d.ts'] },
  { ...base, files: ['**/*.{ts,tsx}'] },
  {
    ...base,
    files: ['**/__tests__/**.test.{ts,tsx}'],
    rules: {
      ...base.rules,
      '@typescript-eslint/unbound-method': 'off',
    },
  },
);
