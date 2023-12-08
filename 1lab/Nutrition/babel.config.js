module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ["module-resolver", {
        "alias": {
          "@components": "./src/components",
          "@screens": "./src/screens",
          "@features": "./src/features",
          "@utils": "./src/utils",
          "@context": "./src/context",
          "@store": "./src/store",
          "@models": "./src/models"
        },
        "extensions": [
          ".js",
          ".jsx",
        ]
      }]
    ],
  };
};
