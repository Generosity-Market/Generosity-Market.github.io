import {
    addOrg,
    setOrg,
} from './actions';

import Services from 'services/services';
import { makeFetchCreator } from 'actions/makeFetchCreator';

const {
    fetchOrgData,
    submitFormData,
} = Services;

// getting the selected organizations information
export const getOrgData = (id) => makeFetchCreator(fetchOrgData, setOrg, id);

// submits organization form
export const submitOrgForm = (args) => makeFetchCreator(submitFormData, addOrg);