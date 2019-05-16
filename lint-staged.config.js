module.exports = {
    linters: {
        '*.{js, jsx, css}': [
            'eslint src --fix',
            'git add',
            'npm run test -- --bail --findRelatedTests',
        ]
    }
};