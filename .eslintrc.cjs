/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
    root: true,

    extends: [
        "plugin:vue/vue3-essential",
        "eslint:recommended",
        "@vue/eslint-config-typescript/recommended",
        "@vue/eslint-config-prettier",
        // https://github.com/vuejs/eslint-plugin-vue#gear-configs
        'plugin:vue/base',
        'plugin:vue/essential',
        'plugin:vue/strongly-recommended',
        'plugin:vue/recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
    ],

    env: {
        "vue/setup-compiler-macros": true,
    },

    // add your custom rules here
    rules: {
        "comma-dangle": "off",
        "@typescript-eslint/comma-dangle": "off",
        "prettier/prettier": ["error", { endOfLine: "auto" }],
        "javascript.validate.enable": 0,

        // company standard
        indent: [
            'error',
            4,
            {
                'SwitchCase': 1,
            },
        ],

        'vue/html-indent': [
            'error',
            4,
            {
                attribute: 1,
                closeBracket: 0,
                alignAttributesVertically: true,
                ignores: [],
            },
        ],

        'vue/script-indent': [
            'error',
            4,
            {
                baseIndent: 1,
                switchCase: 1,
                ignores: [],
            },
        ],

        // allow single-word components
        'vue/multi-word-component-names': 0,

        // allow v-text and v-html
        'vue/no-v-text-v-html-on-component': 0,

        'semi': [
            'error',
            'always',
        ],

        'max-len': [
            'error',
            {
                'code': 120,
                'tabWidth': 4,
            },
        ],

        'comma-dangle': [
            'error',
            {
                'arrays': 'always-multiline',
                'objects': 'always-multiline',
                'imports': 'never',
                'exports': 'never',
                'functions': 'never',
            },
        ],

        // allow async-await
        'generator-star-spacing': 'off',

        // allow paren-less arrow functions
        'arrow-parens': 'off',
        'one-var': 'off',

        'no-unused-vars': 'warn',

        'vue/component-tags-order': ['warn', {
            "order": ["template", "script", "style"]
        }],

        'import/first': 'off',
        'import/named': 'error',
        'import/namespace': 'error',
        'import/default': 'error',
        'import/export': 'error',
        'import/extensions': 'off',
        'import/no-unresolved': 'off',
        'import/no-extraneous-dependencies': 'off',

        // allow console and debugger during development
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',

        'space-infix-ops': 'error',
        'no-case-declarations': 0,
        'no-undef': 'error',
        'brace-style': ['error', 'stroustrup', { allowSingleLine: true }],

        'vue/custom-event-name-casing': 'off',
        'vue/no-mutating-props': 'off',

        // allow re-throwing of error in try catch
        'no-useless-catch': 'off',

        'vue/no-v-model-argument': 'off',

        // array multilines and ensure formatting is applied
        'array-bracket-spacing': ['error', 'always'],

        // quotes handling
        quotes: [
            'error',
            'single',
            {
                avoidEscape: true,
                allowTemplateLiterals: true,
            },
        ],
    },

    overrides: [
        {
            files: ['*.vue'],
            rules: {
                indent: 'off',
            },
        },
    ],
};
