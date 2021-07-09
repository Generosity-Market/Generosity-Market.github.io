export const makeActionCreator = type => {
    return payload => {
        return { type, payload };
    };
};
