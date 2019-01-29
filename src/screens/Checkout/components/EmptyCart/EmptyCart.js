import React from 'react';
import './EmptyCart.css';

// Shared UI Components
import {
  LinkButton,
} from 'components/shared';

const EmptyCart = (props) => (
  <div className="EmptyCart">

    <div className="basket-icon">
      <div>
        <img src={require('Assets/icons/basket.png')} alt="basket icon" />
      </div>
    </div>

    <div className="empty-message">
      <h3>Your basket is empty</h3>
      <h4>Fill it by supporting some great causes</h4>
    </div>

    <LinkButton
      href="/causes"
      classname="find-cause"
      linkText="Find a Cause"
    />

  </div>
);

export default EmptyCart;
