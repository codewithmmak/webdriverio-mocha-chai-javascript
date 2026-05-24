const js = require('@eslint/js');
const globals = require('globals');

module.exports = [
    {
        ignores: ['node_modules/**', 'allure-report/**', 'allure-results/**', 'mochawesome-report/**']
    },
    js.configs.recommended,
    {
        files: ['**/*.js'],
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'commonjs',
            globals: {
                ...globals.node,
                ...globals.mocha,
                browser: 'readonly',
                $: 'readonly',
                $$: 'readonly',
                expect: 'readonly'
            }
        },
        rules: {
            'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
            'no-console': 'off'
        }
    },
    {
        files: ['test/pageobjects/**/*.js', 'test/specs/example.e2e.js'],
        languageOptions: {
            sourceType: 'module'
        }
    }
];
