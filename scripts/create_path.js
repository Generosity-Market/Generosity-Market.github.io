const baseUrl = 'src/components/shared';

const constructUrl = {
    component: function (comp) {
        return `${baseUrl}/src/${comp}.jsx`;
    },
    styles: function (comp) {
        return `${baseUrl}/styles/${comp}.css`;
    },
    test: function (comp) {
        return `${baseUrl}/tests/${comp}.spec.js`;
    },
    index: function () {
        return `${baseUrl}/index.js`;
    },
};

function createPath(type, comp) {
    return constructUrl[type](comp);
}

module.exports = createPath;