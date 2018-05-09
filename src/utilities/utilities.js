// add any reusable utility functions
const Utils = {
  scrollTo: (element) => {
    window.scroll({
      behavior: 'smooth',
      left: 0,
      top: document.getElementById(element).offsetTop
    });
  }
}

export default Utils;
