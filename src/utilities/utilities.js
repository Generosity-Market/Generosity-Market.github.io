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
            return require(`Assets/Photography/Mobile/${image}`);
        }
    },

    getIconURL: (icon) => require(`Assets/icons/PNG/${icon}.png`),

    sharePage: () => alert("Shared"),

    removeIndexFromArray: (indexToRemove, array) => {
        return [...array.slice(0, indexToRemove), ...array.slice(indexToRemove + 1, array.length)];
    },

    getTotal: (array, property) => {
        let initialValue = 0;
        return array.reduce(function (accumulator, currentValue) {
            return accumulator + currentValue[property];
        }, initialValue);
    },

    getRandomNumber: (length) => Math.floor((Math.random() * length)),

    isMobile: () => /iPhone|iPad|iPod|Android/i.test(navigator.userAgent),

    isTestingEnvironment: () => process.env.NODE_ENV === 'test',

    sortByKey: (array, key) => {
        return array.sort((a, b) => {
            let x = a[key];
            let y = b[key];
            return ((x < y) ? -1 : ((x > y) ? 1 : 0));
        });
    },

    getFormattedDate: (date) => new Date(date).toLocaleDateString(),

};

export default Utils;
