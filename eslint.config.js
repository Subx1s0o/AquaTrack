import js from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import tseslintParser from '@typescript-eslint/parser';
import prettier from 'eslint-config-prettier';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tailwindcss from 'eslint-plugin-tailwindcss';
import globals from 'globals';

export default [
  {
    ignores: ['dist'],
  },
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      parser: tseslintParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
        ...globals.es2020,
      },
    },
    plugins: {
      '@typescript-eslint': tseslint,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      tailwindcss,
      react,
    },
    settings: {
      react: {
        version: 'detect',
      },
      tailwindcss: {"callees": ["cn"] }
    },
    rules: {
      ...js.configs.recommended.rules,
      ...tseslint.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...tailwindcss.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      ...prettier.rules,

      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: false },
      ],
      '@typescript-eslint/no-unused-vars': 'error',
      'tailwindcss/classnames-order': 'off',
      'react/react-in-jsx-scope': 'off',
      'newline-before-return': 'off',
      'tailwindcss/no-custom-classname': 'error',
      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: 'typeLike',
          format: ['PascalCase'],
        },
      ],
      'react/boolean-prop-naming': [
        'error',
        {
          rule: '^is[A-Z]([A-Za-z0-9]?)+',
          validateNested: true,
        },
      ],
      'react/destructuring-assignment': [
        'error',
        'always',
        {
          destructureInSignature: 'always',
        },
      ],
    },
  },
];
