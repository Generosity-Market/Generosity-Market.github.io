import {
    getRandomNumber,
} from 'utilities';

const lazyURL = 'https://picsum.photos/200/300?image='

export const getLazyImagePlaceholder = () => {
    const imageIds = ['1011', '1012', '900', '768', '701', '612', '539', '328', '216', '165']
    return `${lazyURL}${imageIds[getRandomNumber(imageIds.length)]}&blur`;
};