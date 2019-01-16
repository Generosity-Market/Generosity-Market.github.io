export const makeFetchCreator = (fetchType, action, args) => {
    return (dispatch, getState) => fetchType(args).then(data => dispatch(action(data)));
};