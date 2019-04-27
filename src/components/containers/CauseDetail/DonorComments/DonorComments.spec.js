import React from 'react';
import { shallow } from 'enzyme';

// Component import
import DonorComments from './DonorComments.js';

const defaultProps = {
    donations: [
        {
            name: 'Sally Givesalot',
            comment: 'Can\'t wait to hear the stories!!',
            imageURL: 'profile.jpg',
            amount: 100
        }, {
            name: 'Bob Surrent',
            comment: 'This sounds fun!',
            imageURL: 'profile3.jpg',
            amount: 50
        }, {
            name: 'Jim Giver',
            comment: 'Have a great time!',
            imageURL: 'profile2.jpg',
            amount: 25
        }
    ]
};

const wrapper = shallow(<DonorComments {...defaultProps} />);

describe('<DonorComments />', () => {

    it('renders without crashing', () => {
        expect(wrapper.exists('.DonorComments')).toBe(true);
    });
});
