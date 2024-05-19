module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'prettier',
  ],
  plugins: ['@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  parserOptions: {
    sourceType: 'module',
  },
  rules: {
    'no-restricted-syntax': [
      'error',
      {
        selector:
          "TSAsExpression[typeAnnotation.type='TSTypeReference'] > TSAsExpression[typeAnnotation.type='TSUnknownKeyword']",
        message: 'No type assertion by unknown',
      },
    ],
    eqeqeq: 'error',
    'no-param-reassign': 'error',
    'object-shorthand': ['error', 'always'],
    'prefer-template': 'error',
    '@typescript-eslint/consistent-type-imports': 'error',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-non-null-assertion': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/explicit-function-return-type': 'error',
    complexity: ['error', 5],
    'max-depth': ['error', 2],
    'max-nested-callbacks': ['error', 3],
    'max-lines': ['error', 200],
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
        destructuredArrayIgnorePattern: '^_',
      },
    ],
  },
  overrides: [
    {
      files: ['*.js'],
      rules: { '@typescript-eslint/no-var-requires': ['off'] },
    },
    {
      files: ['packages/server/api/**/controller.ts', 'packages/server/api/**/hooks.ts'],
      rules: { '@typescript-eslint/explicit-function-return-type': ['off'] },
    },
  ],
};
