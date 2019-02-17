import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeFromCart, clearCart } from 'ducks/cart';
import { submitDonation } from 'ducks/cause';
import { Elements, StripeProvider } from 'react-stripe-elements';
import Utils from 'utilities/utilities';
import './Checkout.css';

// Checkout Components
import {
  Cart,
  CartFooter,
  CheckoutForm,
  EmptyCart,
} from 'components/Checkout';

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
      // TODO Get this from .env for production. Do not commit the live key!!!
      apiKey: "pk_test_qojWn3GnI7Cr16kIvzOjMYiA",
    };
  };

  toggleCheckoutForm = () => {
    this.setState({ showForm: !this.state.showForm });
  };

  render() {
    const {
      cart,
      // user,
      clearCart,
    } = this.props;

    return (
      <StripeProvider apiKey={this.state.apiKey}>
        <div className="Checkout">

          {!cart.length > 0 ?
            <EmptyCart /> : <Cart {...this.props} />}

          {cart.length > 0 &&
            <CartFooter
              total={Utils.getTotal(cart, 'amount')}
              toggleCheckoutForm={() => this.toggleCheckoutForm()}
              {...this.props}
            />}

          <Elements>
            <CheckoutForm
              toggleCheckoutForm={this.toggleCheckoutForm}
              showForm={this.state.showForm}
              total={Utils.getTotal(cart, 'amount')}
              submitDonation={submitDonation}
              clearCart={clearCart}
              {...this.props}
            />
          </Elements>

        </div>
      </StripeProvider>
    );
  }
};

const mapStateToProps = (state) => {
  const {
    user: { user },
    cart: { cart },
  } = state;

  return { user, cart }
};

const mapDispatchToProps = { clearCart, removeFromCart, submitDonation };


export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
