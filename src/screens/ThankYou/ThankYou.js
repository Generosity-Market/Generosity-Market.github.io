import React, { Component } from 'react';
import { connect } from 'react-redux';
import { clearCart } from '../../actions/actions';
import './ThankYou.css';

import LinkButton from '../../components/LinkButton/LinkButton';

class ThankYou extends Component {

  // componentWillUnmount() {
  //   this.props.clearCart();
  // }

  render() {
    console.log(this.props);
    return(
      <div className='ThankYou'>
        <div className='message'>
          <h1>Thank You</h1>
          <p>for supporting such great causes!</p>
        </div>
        <LinkButton 
          linkText={'Find a cause'}
          href={'/causes'}
          classname='find-cause'
        />
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return { user: state.user, cart: state.cart }
};

const mapDispatchToProps = { clearCart };


export default connect(mapStateToProps, mapDispatchToProps)(ThankYou);
