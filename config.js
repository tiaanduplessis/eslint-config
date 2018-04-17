module.exports = {
  parserOptions: {
    ecmaVersion: 8,
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true
    },
    sourceType: "module"
  },
  env: {
    es6: true,
    browser: true,
    node: true
  },
  plugins: ["import", "promise"],
  globals: {
    document: false,
    navigator: false,
    window: false,
    global: false
  },
  rules: {
    "arrow-body-style": ["error", "as-needed"], // https://eslint.org/docs/rules/arrow-body-style
    "arrow-parens": ["error", "as-needed"], // https://eslint.org/docs/rules/arrow-parens
    "arrow-spacing": ["error", { before: true, after: true }], // https://eslint.org/docs/rules/arrow-spacing
    "new-cap": "error", // https://eslint.org/docs/rules/new-cap
    "no-param-reassign": ["error", { props: true }], // https://eslint.org/docs/rules/no-param-reassign
    "max-len": [
      "error",
      { code: 80, ignoreTrailingComments: true, ignoreTemplateLiterals: true }
    ], // https://eslint.org/docs/rules/max-len
    "max-depth": ["error", 5], // https://eslint.org/docs/rules/max-depth
    "max-nested-callback": ["error", 3], // https://eslint.org/docs/rules/max-nested-callbacks
    "comma-dangle": ["error", "never"], // https://eslint.org/docs/rules/comma-dangle
    "import/export": "error", // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/export.md
    "import/first": "error", // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/first.md
    "import/newline-after-import": "error", // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/newline-after-import.md
    "import/no-absolute-path": "error", // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-absolute-path.md
    "import/no-duplicates": "error", // // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-duplicates.md
    "import/no-extraneous-dependencies": "error", // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md
    "import/no-unresolved": "error", // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unresolved.md
    "import/no-mutable-exports": "error", // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-mutable-exports.md
    "no-confusing-arrow": "off", // https://eslint.org/docs/rules/no-confusing-arrow
    "no-useless-computed-key": "error", // https://eslint.org/docs/rules/no-useless-computed-key
    "no-useless-constructor": "error", // https://eslint.org/docs/rules/no-useless-constructor
    "no-useless-rename": "error", // https://eslint.org/docs/rules/no-useless-rename
    "no-var": "error", // https://eslint.org/docs/rules/no-var
    "object-shorthand": "error", // https://eslint.org/docs/rules/object-shorthand
    "prefer-arrow-callback": "error", // https://eslint.org/docs/rules/prefer-arrow-callback
    "prefer-const": "error", //https://eslint.org/docs/rules/prefer-const
    "prefer-rest-params": "error", // https://eslint.org/docs/rules/prefer-rest-params
    "prefer-spread": "error", // https://eslint.org/docs/rules/prefer-spread
    "prefer-template": "error", // https://eslint.org/docs/rules/prefer-template
    "getter-return": "error", // https://eslint.org/docs/rules/getter-return
    "no-eval": "error", // https://eslint.org/docs/rules/no-eval
    "rest-spread-spacing": "error", // https://eslint.org/docs/rules/rest-spread-spacing
    "sort-imports": "error", // https://eslint.org/docs/rules/sort-imports
    "template-curly-spacing": "error", // https://eslint.org/docs/rules/template-curly-spacing
    "space-infix-ops": "error" // https://eslint.org/docs/rules/space-infix-ops
  }
};
