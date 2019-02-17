const scrollTo = (element) => {
    window.scroll({
        behavior: 'smooth',
        left: 0,
        top: document.getElementById(element).offsetTop
    });
};

export default scrollTo;