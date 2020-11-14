module.exports = {
  "env": {
    "browser": true,
    "es2021": true,
    "node": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:prettier/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 12,
    "sourceType": "module"
  },
  "plugins": [
    "react",
    "@typescript-eslint"
  ],
  "rules": {
    "no-console": "warn",
    "indent": ["error", 2],
    "arrow-parens": ["error", "as-needed"],
    "brace-style": ["error", "1tbs"],
    "array-element-newline": ["error", "consistent"],
    "react/prop-types": 0,
    "semi": ["error", "always"],
    "@typescript-eslint/explicit-module-boundary-types": 0,
    "react/display-name": 0,
    "comma-dangle": ["error", {
      "arrays": "always-multiline",
      "objects": "always-multiline",
      "imports": "never",
      "exports": "never",
      "functions": "never"
    }]
  }
};
