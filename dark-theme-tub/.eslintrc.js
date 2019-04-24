module.exports = {
    root: true,

    env: {
        node: true
    },

    rules: {
        "no-console": "off",
        "no-debugger": "off"
    },

    parserOptions: {
        parser: "babel-eslint"
    },

    // recommend linting
    // extends: ["plugin:vue/recommended", "@vue/prettier", "plugin:prettier/recommended"],

    // very recommend linting
    extends: [
        "plugin:vue/strongly-recommended",
        "eslint:recommended",
        "@vue/prettier",
        "plugin:prettier/recommended"
    ]
};
