import React from 'react';
import { connect } from 'react-redux';
import { clearAllCartItems } from 'ducks/cart';
import '../styles/ThankYou.css';

// Shared UI Components
import { Button } from '@jgordy24/stalls-ui';

export const ThankYou = (/* props */) => {
    // console.log('Props: ', props);

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
};

const mapStateToProps = ({ cart, user }) => ({ cart, user });

const mapDispatchToProps = { clearAllCartItems };


export default connect(mapStateToProps, mapDispatchToProps)(ThankYou);
