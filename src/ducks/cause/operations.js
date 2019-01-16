import {
    addCause,
    causeSelected,
    setData,
} from './actions';

import Services from '../../services/services';
import { makeFetchCreator } from '../../actions/makeFetchCreator';

const {
    fetchCauseList,
    fetchSingleCause,
    submitFormData,
} = Services;

export {
    addCause,
    causeSelected
} from './actions';

// calling the api for the entire causelist
export const getCauseList = () => makeFetchCreator(fetchCauseList, setData, null);

// getting a single cause by the id passed
export const getSingleCause = (id) => makeFetchCreator(fetchSingleCause, causeSelected, id);

// publishing the submitted cause page
export const submitCauseForm = (args) => makeFetchCreator(submitFormData, addCause, args);