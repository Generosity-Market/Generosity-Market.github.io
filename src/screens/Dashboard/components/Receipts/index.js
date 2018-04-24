import React, { Component } from 'react';
import './Receipts.css';

class Receipts extends Component {

  // TODO use hardcoded elements until api data is available.
  render() {
    return(
      <div className="Receipts">
      
        <h4>Donations & Receipts</h4>

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
