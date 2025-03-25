---
outline: deep
---

# Eslint

Eslint 是使用工具加强对代码的约束，工程在.eslintrc.js里配置了 eslint，vue，typescript 总结的一些规范，eslint 会依据这些规范约束开发者的编码行为，在开发的过程中，若遇到一些没有必要的约束，可以讨论后在 rules 里关闭此约束。

参考配置：

.eslintrc.js:

```javascript
module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:promise/recommended',
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended'
  ],
  env: {
    browser: true,
    es2021: true,
    node: true,
    'vue/setup-compiler-macros': true
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 2020,
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    },
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
    extraFileExtensions: ['.vue']
  },
  plugins: ['vue', '@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unsafe-return': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-useless-constructor': 'off',
    '@typescript-eslint/restrict-template-expressions': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-dynamic-delete': 'off',
    '@typescript-eslint/promise-function-async': 'off',
    '@typescript-eslint/no-this-alias': 'off',
    'promise/always-return': 'off',
    'no-global-assign': 'off',
    'no-multi-str': 'off',
    'class-methods-use-this': 'off',
    'no-console': 'off',
    'vue/no-v-html': 'off'
  }
}
```