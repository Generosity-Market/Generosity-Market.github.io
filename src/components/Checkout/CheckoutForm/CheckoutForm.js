import React, { Component } from 'react';
import stripeServices from 'services/stripe';
import './CheckoutForm.css';

// Shared UI Components
import {
    ActionButton,
    FontAwesome,
} from 'components/shared';

// Stripe UI Components
import {
    CardNumberElement,
    CardExpiryElement,
    CardCVCElement,
    PostalCodeElement,
    injectStripe
} from 'react-stripe-elements';


// TODO Add in the user's id if logged in, if not create a user and send the returned id...
class CheckoutForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            status: '',
            email: '',
            // first_name: '',
            // last_name: '',
            // address: {
            //     street: '',
            //     city: '',
            //     state: '',
            //     zip: '',
            // },
        };
        this.submit = this.submit.bind(this);
    }

    componentDidMount() {
        const { user } = this.props;
        if (user) {
            /* eslint-disable-next-line no-console */
            console.log();
            this.setState({ email: user.email });
        }
    }

    componentDidUpdate(prevProps) {
        if (!prevProps.user && this.props.user) {
            this.setState({ email: this.props.user.email });
        }
    }

    handleButtonText = () => {
        const { loading, status } = this.state;
        if (loading) return 'loading...';
        if (status === 'complete') return 'donation complete';
        if (status === 'failed') return 'failed';
        return `Charge $${this.props.total}`;
    }

    handleStateChange = (event) => {
        this.setState({ email: event.target.value });
    }

    submit() {
        const {
            stripe,
            total,
            cart,
            clearCart,
            submitDonation,
            user,
        } = this.props;

        this.setState({ loading: true, status: '' });
        /* eslint-disable-next-line no-console */
        console.log('Checkout props: ', this.props);

        // TODO abstract this into a service?...
        stripeServices.createToken(stripe)
            .then(token => {
                // TODO if token is undefined that means something wasnt filled in. We need to display an error message here...
                if (!token) {
                    this.setState({ loading: false, status: 'failed' });
                    return;
                }

                submitDonation({
                    body: JSON.stringify({
                        ...token,
                        cart,
                        userID: user.id,
                        amount: total * 100,
                        email: this.state.email
                    }),
                    headers: {
                        'Content-Type': 'application/json'
                    },
                })
                    .then(response => {
                        if (response.status === 'authorized') {
                            // Update the button text
                            this.setState({ loading: false, status: 'complete' });
                            // Remove the checkout form from the screen
                            setTimeout(() => this.props.toggleCheckoutForm(), 500);
                            // Navigate to the "Thank You" page
                            setTimeout(() => this.props.history.push('/thankyou'), 1000);
                            clearCart();
                        } else if (response.status === 'failed') {
                            this.setState({ loading: false, status: 'failed' });
                        }
                        return response;
                    });

            });
    }

    render() {
        const {
            showForm,
            toggleCheckoutForm,
            total,
        } = this.props;

        return (
            <div className="CheckoutForm" style={showForm && total > 0 ? { bottom: '-5%' } : { bottom: '-100%' }}>
                <div className="card">
                    <FontAwesome
                        onClick={toggleCheckoutForm}
                        icon={['far', 'times-circle']}
                    />
                    <p>Would you like to complete the purchase?</p>

                    <div className="stripe-field email">
                        <input type="email" name="email" placeholder="Email" value={this.state.email} onChange={this.handleStateChange} />
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

                    <ActionButton
                        action={this.submit}
                        actionText={this.handleButtonText()}
                        icon={this.state.status === 'complete' && 'far fa-check-circle'}
                    />
                </div>
            </div>
        );
    }
}

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