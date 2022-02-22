import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
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
    CardCvcElement,
    useElements,
    useStripe,
} from '@stripe/react-stripe-js';

const CheckoutForm = ({
    cart,
    clearAllCartItems,
    showForm,
    submitDonation,
    toggleCheckoutForm,
    total,
    user,
}) => {
    const stripe = useStripe();
    const elements = useElements();

    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState('');
    const [email, setEmail] = useState(user.email);
    const [addressZip, setAddresZip] = useState(user.zipcode);

    useEffect(() => {
        if (!email) {
            setEmail(user.email);
        }
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

    const handleZipChange = (event) => {
        setAddresZip(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }

        const card = elements.getElement(CardNumberElement);

        if (card === null) {
            return;
        }
        setLoading(true);
        setStatus('');

        try {
            const { token } = await stripe.createToken(card, { address_zip: addressZip });

            if (!token) {
                setLoading(false);
                setStatus('failed');
                return;
            }
            const donationDetails = {
                token,
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
                setTimeout(() => clearAllCartItems(), 3500);
                // Navigate to the "Thank You" page
                setTimeout(() => navigate('/thankyou'), 3500);
            } else if (response.status === 'failed') {
                setLoading(false);
                setStatus('failed');
            }

        } catch (error) {
            // eslint-disable-next-line no-console
            console.log({ error });
            setLoading(false);
            setStatus('failed');
        }
    };

    return (
        <div
            className="CheckoutForm"
            style={showForm && total > 0 ? { bottom: '-5%' } : { bottom: '-100%' }}
        >
            <div className="card">
                <Glyphicon
                    onClick={toggleCheckoutForm}
                    icon={['far', 'times-circle']}
                />
                <p>Would you like to complete the purchase?</p>

                <div className="stripe-field email">
                    <input
                        style={{ ...stripeOptions.styles }}
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={email}
                        onChange={handleStateChange}
                    />
                </div>

                <div className="stripe-field">
                    <CardNumberElement style={stripeOptions} />
                </div>

                <div className="card-info">
                    <div className="stripe-field">
                        <CardExpiryElement style={stripeOptions} />
                    </div>
                    <div className="stripe-field">
                        <CardCvcElement style={stripeOptions} />
                    </div>
                    <div className="stripe-field">
                        <input
                            style={{ ...stripeOptions.styles }}
                            type="number"
                            name="address_zip"
                            placeholder="Zip code"
                            value={addressZip}
                            onChange={handleZipChange}
                        />
                    </div>
                </div>

                <Button
                    type='submit'
                    bsStyle='success'
                    icon={status === 'complete' ? 'check-circle' : ''}
                    label={handleButtonText()}
                    onClick={handleSubmit}
                />

            </div>
        </div>
    );
};

const stripeOptions = {
    styles: {
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
    },
};

export default CheckoutForm;