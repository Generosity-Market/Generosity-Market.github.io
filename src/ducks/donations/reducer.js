import update from 'immutability-helper';

import {
    UPDATE_DONATIONS,
    UPDATE_TOTAL,
} from './types';

const initialState = {
    causeList: [],
    selectedCause: '',
}

const donationReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch(type) {
        case UPDATE_DONATIONS:
            return update(state, {
                causeList: {
                    [payload.causeIndex]: {
                        Donations: {
                            $push: [payload.donation]
                        }
                    }
                }
            });
        case UPDATE_TOTAL:
            return update(state, {
                causeList: {
                    [payload.causeIndex]: {
                        totalRaised: {
                            $set: Number(state.causeList[payload.causeIndex].totalRaised) + Number(payload.amount)
                        }
                    }
                }
            });
        default:
            return state;
    }
}

export default donationReducer;