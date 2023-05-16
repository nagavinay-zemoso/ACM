module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
  },
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
  ],
  ignorePatterns: ['/node_modules/**', '/build/**'],
  rules: {
    'no-unused-vars': ['warn', { args: 'none', argsIgnorePattern: 'req|res|next|val' }],
    'prettier/prettier': ['error', { singleQuote: true }],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
