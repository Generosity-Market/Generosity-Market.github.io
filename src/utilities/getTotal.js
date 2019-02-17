const getTotal = (array, property) => {
    let initialValue = 0;
    return array.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue[property];
    }, initialValue);
};

export default getTotal;