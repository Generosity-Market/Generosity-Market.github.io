module.exports = {
    '*.{js,jsx}': [
        'eslint src --fix',
        'git add',
        'npm run test -- --bail --findRelatedTests'
    ]
};