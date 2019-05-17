/* eslint-disable no-console */
const createJSX = require('./react/create_jsx.js');
const createStyles = require('./react/create_styles.js');
const createTestFile = require('./react/create_test_file.js');
const updateIndex = require('./react/update_index.js');

function create_component(comp) {
    // Creates files in src/components/shared/ directory
    createJSX(comp); // In src/ directory
    createStyles(comp); // In styles/ directory
    createTestFile(comp); // In tests/ directory
    updateIndex(comp); // Updates src/components/shared/index.js
    console.log(`${comp} component created!`);
}

if (!process.argv[2]) {
    console.log('Error: Give Component name please!');
} else {
    create_component(process.argv[2]);
}
