/* eslint-disable no-console */
const fs = require('fs');

function createFile(path, content) {
    fs.appendFile(path, content, function (err) {
        if (err) throw err;
    });
    console.log(`${path} - File Created`);
}

module.exports = createFile;