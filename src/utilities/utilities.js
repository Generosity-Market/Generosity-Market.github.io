// add any reusable utility functions
const utils = {
  scrollTo: (element) => {
    window.scroll({
      behavior: 'smooth',
      left: 0,
      top: document.getElementById(element).offsetTop
    });
  }
}

export default utils;
