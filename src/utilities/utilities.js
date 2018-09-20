// Reusable utility functions.
const Utils = {

    scrollTo: (element) => {
        window.scroll({
            behavior: 'smooth',
            left: 0,
            top: document.getElementById(element).offsetTop
        });
    },

    getImageURL: (image) => {
        if (image.includes('base64')) {
            return `url(${image})`;
        } else {
            return require(`../Assets/Photography/Mobile/${image}`);
        }
    },

    getIconURL: (icon) => `https://s3.amazonaws.com/generosity-market-cause-images/causeIcons/${icon}.png`,

    sharePage: () => alert("Shared"),

    removeIndexFromArray: (indexToRemove, array) => {
        return [ ...array.slice( 0, indexToRemove) , ...array.slice(indexToRemove + 1, array.length) ];
    },

    getTotal: (array, property) => {
        let initialValue = 0;
        return array.reduce(function (accumulator, currentValue) {
              return accumulator + currentValue[property];
        }, initialValue);
    },

};

export default Utils;
