module.exports = function (api) {
  api.cache(false);
  return {
    overrides: [
      {
        test: './external',
        extends: './external/babel.config.js'
      },
      {
        test: './main',
        extends: './main/babel.config.js'
      }
    ]
  };
};