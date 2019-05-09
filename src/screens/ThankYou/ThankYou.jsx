import React, { Component } from 'react';
import { connect } from 'react-redux';
import { clearCart } from 'ducks/cart';
import './ThankYou.css';

// Shared UI Components
import {
    LinkButton,
} from 'components/shared';

// Convert to functional component if not using state
export class ThankYou extends Component {

    // componentWillUnmount() {
    //   this.props.clearCart();
    // }

    render() {
        // console.log(this.props);
        return (
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
}

const mapStateToProps = (state) => {
    const {
        user: {
            user,
        },
        cart: {
            cart,
        },
    } = state;

    return {
        user,
        cart,
    };
};

const mapDispatchToProps = { clearCart };


export default connect(mapStateToProps, mapDispatchToProps)(ThankYou);
