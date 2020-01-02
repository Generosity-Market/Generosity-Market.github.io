/* eslint-disable indent */
const createFile = require('../create_file.js');
const createPath = require('../create_path.js');

function updateIndex(comp) {
    const path = createPath('index');
    createFile(path, `\nexport { default as ${comp} } from './src/${comp}';`);
}

module.exports = updateIndex;