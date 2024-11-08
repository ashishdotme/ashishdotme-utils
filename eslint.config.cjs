const simpleImportSort = require("eslint-plugin-simple-import-sort")
const eslintPluginPrettierRecommended = require("eslint-plugin-prettier/recommended")

module.exports = [
    eslintPluginPrettierRecommended,
    {
        plugins: {
            "simple-import-sort": simpleImportSort,
        },
        rules: {
            "simple-import-sort/imports": "error",
            "simple-import-sort/exports": "error",
        },
    },
]
