import React, { useState, useEffect } from 'react';
import stripeServices from 'services/stripe';
import './CheckoutForm.css';

// Shared UI Components
import {
    Button,
    Glyphicon,
} from '@jgordy24/stalls-ui';

// Stripe UI Components
import {
    CardNumberElement,
    CardExpiryElement,
    CardCVCElement,
    PostalCodeElement,
    injectStripe
} from 'react-stripe-elements';

const CheckoutForm = ({
    cart,
    clearCart,
    history,
    showForm,
    stripe,
    submitDonation,
    toggleCheckoutForm,
    total,
    user,
}) => {
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState('');
    const [email, setEmail] = useState(user.email);

    useEffect(() => {
        setEmail(user.email);
    }, [user.email]);

    const handleButtonText = () => {
        if (loading) return 'submitting payment...';
        if (status === 'complete') return 'donation complete';
        if (status === 'failed') return 'failed';
        return `Charge $${total}`;
    };

    const handleStateChange = (event) => {
        setEmail(event.target.value);
    };

    const submit = async () => {
        setLoading(true);
        setStatus('');

        try {
            const token = await stripeServices.createToken(stripe);

            if (!token) {
                setLoading(false);
                setStatus('failed');
                return;
            }
            const donationDetails = {
                ...token,
                cart,
                user_id: user.id,
                id: user.id,
                amount: total * 100,
                email,
            };
            const response = await submitDonation(donationDetails);

            if (response.status === 'Success') {
                // Update the button text
                setLoading(false);
                setStatus('complete');
                // Remove the checkout form from the screen
                setTimeout(() => toggleCheckoutForm(), 3250);
                setTimeout(() => clearCart(), 3500);
                // Navigate to the "Thank You" page
                setTimeout(() => history.push('/thankyou'), 3500);
            } else if (response.status === 'failed') {
                setLoading(false);
                setStatus('failed');
            }

        } catch (error) {
            setLoading(false);
            setStatus('failed');
        }
    };

    return (
        <div className="CheckoutForm" style={showForm && total > 0 ? { bottom: '-5%' } : { bottom: '-100%' }}>
            <div className="card">
                <Glyphicon
                    onClick={toggleCheckoutForm}
                    icon={['far', 'times-circle']}
                />
                <p>Would you like to complete the purchase?</p>

                <div className="stripe-field email">
                    <input type="email" name="email" placeholder="Email" value={email} onChange={handleStateChange} />
                </div>

                <div className="stripe-field">
                    <CardNumberElement style={stripeStyles} />
                </div>

                <div className="card-info">
                    <div className="stripe-field">
                        <CardExpiryElement style={stripeStyles} />
                    </div>
                    <div className="stripe-field">
                        <CardCVCElement style={stripeStyles} />
                    </div>
                    <div className="stripe-field">
                        <PostalCodeElement style={stripeStyles} />
                    </div>
                </div>

                <Button
                    bsStyle='success'
                    icon={status === 'complete' && 'check-circle'}
                    label={handleButtonText()}
                    onClick={submit}
                />
            </div>
        </div>
    );
};

const stripeStyles = {
    base: {
        color: '#707070',
        fontSize: '18px',
        fontSmoothing: 'antialiased',
        '::placeholder': {
            color: '#AAA',
        },
    },
    invalid: {
        color: '#e5424d',
        ':focus': {
            color: '#303238',
        },
    },
};

export default injectStripe(CheckoutForm);