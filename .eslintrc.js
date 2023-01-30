module.exports = {
  extends: ["./.d-eslint", "prettier"],
  parser: "@babel/eslint-parser",
  parserOptions: {
    requireConfigFile: false,
    babelOptions: {
      presets: ["@babel/preset-react"]
    }
  },
  ignorePatterns: [".next/"]
};
