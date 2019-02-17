const removeIndexFromArray = (indexToRemove, array) => {
    return [...array.slice(0, indexToRemove), ...array.slice(indexToRemove + 1, array.length)];
};

export default removeIndexFromArray;