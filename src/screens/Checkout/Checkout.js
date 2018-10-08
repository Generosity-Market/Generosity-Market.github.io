import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeFromCart, clearCart, submitDonation } from '../../actions/actions';
import EmptyCart from './components/EmptyCart/EmptyCart';
import Cart from './components/Cart/Cart';
import CartFooter from './components/CartFooter/CartFooter';
import Utils from '../../utilities/utilities';
import './Checkout.css';

import { Elements, StripeProvider } from 'react-stripe-elements';
import CheckoutForm from './components/CheckoutForm/CheckoutForm';

class Checkout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // name: '',
      // email: '',
      // phone: '',
      // address: '',
      // city: '',
      // state: '',
      // zipCode: '',
      // public_comment: '',
      // private_comment: '',
      showForm: false,
    };
  };

  toggleCheckoutForm = () => {
    this.setState({ showForm: !this.state.showForm });
  };

  render() {
    const { cart, user } = this.props;

    return(
      <StripeProvider apiKey="pk_test_qojWn3GnI7Cr16kIvzOjMYiA">
        <div className="Checkout">

          {!cart.length > 0 ?
          <EmptyCart /> : <Cart {...this.props} /> }

          <CartFooter 
            total={Utils.getTotal(cart, 'amount')}
            toggleCheckoutForm={() => this.toggleCheckoutForm()} 
            {...this.props} 
          />

          <Elements>
            <CheckoutForm 
              toggleCheckoutForm={() => this.toggleCheckoutForm()}
              showForm={this.state.showForm}
              total={Utils.getTotal(cart, 'amount')}
              submitDonation={submitDonation}
              {...this.props}
            />
          </Elements>

        </div>
      </StripeProvider >
    );
  }
};

const mapStateToProps = (state) => {
  return { user: state.user, cart: state.cart }
};

const mapDispatchToProps = { clearCart, removeFromCart, submitDonation };


export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
