import React, { Component } from 'react';
import './Checkout.css';

class Checkout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      state: '',
      zipCode: '',
      public_comment: '',
      private_comment: '',
    }

  }

  render() {
    return(
      <div className="Checkout">
        <h3>::Selected Cause Here::</h3>






      </div>
    );
  }
};

export default Checkout;
