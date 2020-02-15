import React, { Component } from 'react';
import { connect } from 'react-redux';
import { clearCart } from 'ducks/cart';
import '../styles/ThankYou.css';

// Shared UI Components
import { Button } from '@jgordy24/stalls-ui';

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

                <Button
                    bsStyle='success'
                    bsSize='lg'
                    label='Find a cause'
                    href='/causes'
                />

            </div>
        );
    }
}

const mapStateToProps = ({ cart, user }) => ({ cart, user });

const mapDispatchToProps = { clearCart };


export default connect(mapStateToProps, mapDispatchToProps)(ThankYou);
