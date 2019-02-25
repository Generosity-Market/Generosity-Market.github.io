import {
    addOrg,
    setOrg,
} from './actions';

import { makeFetchCreator } from 'actions/makeFetchCreator';

import {
    fetchOrgData,
    submitOrgFormData,
} from 'services';

// getting the selected organizations information
export const getOrgData = (id) => makeFetchCreator(fetchOrgData, setOrg, id);

// submits organization form
export const submitOrgForm = (args) => makeFetchCreator(submitOrgFormData, addOrg, args);