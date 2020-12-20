module.exports = {
  rules: {
    "brace-style": ["error", "1tbs"],
    "no-mixed-spaces-and-tabs": 1,
    "semi": ["error", "always"],
    "array-element-newline": ["error", "consistent"],
    "indent": ["error", 2, { SwitchCase: 1 }],
    "comma-dangle": [
      "error",
      {
        arrays: "always-multiline",
        objects: "always-multiline",
        imports: "always-multiline",
        exports: "always-multiline",
        functions: "never",
      },
    ],
  }
}
