export const makeFetchCreator = (fetchType, action, args) => {
    return (dispatch) =>
        fetchType(args).then(data => dispatch(action(data)));
};
