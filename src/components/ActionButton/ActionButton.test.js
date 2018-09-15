import React from 'react';
import ReactDOM from 'react-dom';

// Enzyme imports
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// Component import
import ActionButton from './index.js';

Enzyme.configure({ adapter: new Adapter() });

const defaultProps = {
    action: ()=>{},
    actionText: 'submit',
    classname: 'submit',
    icon: '',
};

const testElement = <ActionButton {...defaultProps} />;

describe('<ActionButton />', () => {


    it('should render without crashing', () => {
        const wrapper = shallow(testElement);
        const div = document.createElement('div');
        ReactDOM.render(wrapper, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    let wrapper;
    beforeAll(() => {
        wrapper = mount(<ActionButton {...defaultProps}/>);
    });

    it('should have the classname passed as props', () => {
        expect(wrapper.find('.submit').hasClass('submit')).toBe(true);
    });

    it('should render the text passed through props', () => {
        expect(wrapper.text()).toBe('submit');
    });

    describe('when clicked', () => {
        const action = jest.fn();
        beforeAll(() => {
            wrapper = mount(<ActionButton {...defaultProps} action={action}/>);
            wrapper.find('.submit').simulate('click');
        });

        it('should call the callback action function', () => {
            expect(action).toHaveBeenCalled();
        })
    });
});
