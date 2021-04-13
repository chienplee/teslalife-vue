module.exports = {
  presets: ['@vue/cli-plugin-babel/preset'],
  plugins: [
    'babel-plugin-styled-components',
    ['import', { libraryName: 'ant-design-vue', libraryDirectory: 'es', style: true }, 'ant-design-vue'],
  ],
};
