const getImageURL = (image) => {
    if (image.includes('base64')) {
        return `url(${image})`;
    } else {
        return require(`Assets/Photography/Mobile/${image}`);
    }
};

export default getImageURL;