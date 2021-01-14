import { theme } from './src/config/theme/themeVariables';
module.exports = {
    css: {
      loaderOptions: {
        less: {
          lessOptions: {
            modifyVars: {
              ...theme
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  };