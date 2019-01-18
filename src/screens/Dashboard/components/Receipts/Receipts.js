import React, { Component } from 'react';
import Heading from '../../../../components/Heading/Heading';
import './Receipts.css';

// TODO turn this into functional component if we arent using state...
class Receipts extends Component {
  // constructor(props) {
  //   super(props)

  // }

  // TODO use hardcoded elements until api data is available.
  render() {
    // console.log("Receipts Props: ", this.props.cause);
    return(
      <div className="Receipts">
        <Heading text={'My Receipts'}/>

        <div className="slider">
          <div className="receipt">
            <p>$18</p>
          </div>
          <div className="receipt">
            <p>$143</p>
          </div>
          <div className="receipt">
            <p>$9</p>
          </div>
        </div>

      </div>
    );
  }
}

export default Receipts;
