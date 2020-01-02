/* eslint-disable indent */
const createFile = require('../create_file.js');
const createPath = require('../create_path.js');

function createContent(component) {
    return (
        `.${component} {

}`
    );
}

function createStyles(name) {
    const path = createPath('styles', name);
    createFile(path, createContent(name));
}

module.exports = createStyles;