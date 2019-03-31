import { UsaStates } from 'usa-states';

let usStates = new UsaStates();

export const isValidUsState = (state) => {
    const abbreviatedStates = usStates.arrayOf('abbreviations');

    return abbreviatedStates.includes(state);
};