export default {
  esm: 'rollup',
  cjs: 'rollup',
  umd: {
    name: 'umiLibBoilerplate',
    globals: {
      react: 'React',
      antd: 'antd',
      classnames: 'classnames',
      lodash: 'lodash',
    },
  },
  extractCSS: true,
  cssModules: true,
};
