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

    // recommend
    // extends: ["plugin:vue/recommended", "@vue/prettier", "plugin:prettier/recommended"],

    // very recommend
    extends: ["plugin:vue/strongly-recommended", "@vue/prettier", "plugin:prettier/recommended"]
};
