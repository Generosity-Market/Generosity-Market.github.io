import React from 'react';
import ReactDOM from 'react-dom';

// Redux imports
// import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from '../../reducers/reducer';

// Enzyme imports
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// Component import
import CauseList from './CauseList.js';

let store = createStore(
  reducers,
  compose(
      applyMiddleware(reduxThunk)
  )
);

Enzyme.configure({ adapter: new Adapter() });

const testElement =
  // <Provider store={store}>
    <CauseList store={store}/>;
  // </Provider>;

describe('<CauseList />', () => {

  it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(testElement, div);
      ReactDOM.unmountComponentAtNode(div);
  });
});
