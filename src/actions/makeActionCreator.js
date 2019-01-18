export const makeActionCreator = actionType => {
    return payload => {
        return { type: actionType, payload: payload };
    };
};
