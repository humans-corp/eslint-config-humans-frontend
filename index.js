module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "plugin:prettier/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/recommended",
  ].concat([
    "./rules/best-practices",
    "./rules/ecma",
    "./rules/possible-errors",
    "./rules/react",
    "./rules/stylistic-issues",
    "./rules/typescript",
    "./rules/variables",
  ].map(require.resolve)),
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
};
