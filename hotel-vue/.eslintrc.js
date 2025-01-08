module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    "vue/multi-word-component-names": "off", //关闭组件命名驼峰校验
    'no-undef': "off" ,//关闭未定义变量校验
    'no-irregular-whitespace': 'off', //关闭空格校验
    'no-extra-semi': 'off' ,//
    'no-unused-vars': 'off', //
  }
}
