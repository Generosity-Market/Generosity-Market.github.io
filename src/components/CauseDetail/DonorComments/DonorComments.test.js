import React from 'react';
import ReactDOM from 'react-dom';

// Enzyme imports
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// Component import
import DonorComments from './DonorComments.js';

Enzyme.configure({ adapter: new Adapter() });

const defaultProps = {
  donations: [
    {
      name: "Sally Givesalot",
      comment: "Can't wait to hear the stories!!",
      imageURL: "profile.jpg",
      amount: 100
    }, {
      name: "Bob Surrent",
      comment: "This sounds fun!",
      imageURL: "profile3.jpg",
      amount: 50
    }, {
      name: "Jim Giver",
      comment: "Have a great time!",
      imageURL: "profile2.jpg",
      amount: 25
    }
  ]
};

const testElement = <DonorComments {...defaultProps} />;

describe('<DonorComments />', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(testElement, div);
  });
});
