
const equalStrings = (a, b) => {
    return a === b;
};

const isEqual = (a, b) => {
    // A and B are both strings...do string things instead
    if ((typeof a) === 'string' && (typeof b) === 'string') {
        return equalStrings(a, b);
    }

    // Create arrays of property names
    let aProps = Object.getOwnPropertyNames(a);
    let bProps = Object.getOwnPropertyNames(b);

    // If number of properties is different,
    // objects are not equivalent
    if (aProps.length !== bProps.length) {
        return false;
    }

    for (let i = 0; i < aProps.length; i++) {
        let propName = aProps[i];

        // if property is also an object
        if (typeof a[propName] === 'object') {
            return isEqual(a[propName], b[propName]);
        }

        // If values of same property are not equal,
        // objects are not equivalent
        if (a[propName] !== b[propName]) {
            return false;
        }
    }

    // If we made it this far, objects
    // are considered equivalent
    // console.log('Is Equal');
    return true;
};

export default isEqual;