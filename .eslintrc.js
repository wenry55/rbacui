module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/essential",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    ecmaVersion: 11,
    sourceType: "module",
  },
  plugins: ["vue"],
  rules: {},
};
