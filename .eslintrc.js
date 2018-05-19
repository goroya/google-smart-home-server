module.exports = {
    root: true,
    env: {
        browser: true,
        node: true
    },
    parserOptions: {
        parser: 'babel-eslint'
    },
    extends: [
        "eslint:recommended",
        "plugin:node/recommended",
        "plugin:vue/recommended",
        "plugin:prettier/recommended"
    ],
    plugins: [
        "node",
        'vue',
        "prettier"
    ],
    rules: {
        "semi": ["error", "never"],
        "no-console": "off",
        "node/no-unsupported-features": "off",
        "vue/max-attributes-per-line": "off",
        "prettier/prettier": ["error", { "semi": false }],
        "no-unused-vars": "off",
        "no-process-exit": "off",
        "no-unreachable": "off",
    }
};