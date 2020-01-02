/* eslint-disable indent */
const createFile = require('../create_file.js');
const createPath = require('../create_path.js');

function createContent(component) {
    return (
        `import React from 'react';
import PropTypes from 'prop-types';
import '../styles/${component}.css';

const ${component} = (props) => {

    // NOTE: To use state in a functional component, use React Hooks API
    // FIRST: replace the 'import React' line with...
    // import React, { useState } from 'react';

    // THEN: uncomment the next line:
    // const [ state, setState ] = useState('');

    // NOTE: for more information on how to use React Hooks, see the documentation
    // https://reactjs.org/docs/hooks-intro.html

    console.log('${component} -> props', props);

    return (
        <div className="${component}">${component}</div>
    );
};

// TODO: Unless you need to use lifecycle methods,
// write your component in functional form as above and delete
// this section.
// NOTE: Now you can also use React Hooks for state in functional components, see comment above...
//
// class ${component} extends React.Component {
//  constructor(props) {
//      super(props);
//
//      this.state = {
//        //  ...state
//      }
//  }
//
//   render() {
//     return <div className="${component}">${component}</div>;
//   }
// }

${component}.propTypes = {
    /**
     * The classname to apply to the root node
     */
    classname: PropTypes.string.isRequired,
};

${component}.defaultProps = {
    className: '',
};

export default ${component};`
    );
}

function createJSX(name) {
    const path = createPath('component', name);
    createFile(path, createContent(name));
}

module.exports = createJSX;