import React, { Component } from 'react';
import { CardNumberElement, CardExpiryElement, CardCVCElement, PostalCodeElement, injectStripe } from 'react-stripe-elements';
import './CheckoutForm.css';
import stripeServices from '../../../../services/stripe';
// import Services from '../../../../services/services';
import FontAwesome from '../../../../components/FontAwesome/FontAwesome';
import ActionButton from '../../../../components/ActionButton';

class CheckoutForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            status: '',
            email: '',
        }
        this.submit = this.submit.bind(this);
    };

    handleButtonText = () => {
        const { loading, status } = this.state;
        if (loading) return "loading...";
        if (status === 'complete') return "√ purchase complete";
        if (status === 'failed') return "failed";
        return `Donate $${ this.props.total }`;
    }

    handleStateChange = (event) => {
        this.setState({ email: event.target.value })
    }

    submit(event) {
        const { stripe, total, cart, submitDonation } = this.props;
        this.setState({ loading: true, status: '' });

        // TODO abstract this into a service...
        stripeServices.createToken(stripe)
        .then(token => {
            // TODO if token is undefined that means something wasnt filled in. We need to display an error message here...
            if (!token) {
                this.setState({loading: false, status: 'failed' })
                return;
            }

            submitDonation({
                body: JSON.stringify({...token, amount: total * 100, cart, email: this.state.email}),
                headers: {
                    "Content-Type": "application/json"
                },
            })
            .then(response => {
                if  (response.status === 'authorized') {
                    // Update the button text
                    this.setState({ loading: false, status: 'complete' });
                    // Remove the checkout form from the screen
                    setTimeout(() => this.props.toggleCheckoutForm(), 500);
                    // Navigate to the "Thank You" page
                    setTimeout(() => this.props.history.push('/thankyou'), 600);
                } else if (response.status === 'failed') {
                    this.setState({ loading: false, status: 'failed' })
                }
                return response;
            });

        })
    };

    render() {
        const { toggleCheckoutForm, showForm, total, cart } = this.props;
        console.log(this.props);

        return (
            <div className="CheckoutForm" style={showForm && total > 0  ? {bottom: '-5%'} : {bottom: '-100%'}}>
                <div className="card">
                    <FontAwesome onClick={toggleCheckoutForm} classname='far fa-times-circle'/>
                    <p>Would you like to complete the purchase?</p>

                    <div className="stripe-field email">
                        <input type="email" name="email" placeholder="Email" value={this.state.email} onChange={this.handleStateChange} />
                    </div>

                    <div className="stripe-field">
                        <CardNumberElement style={stripeStyles} />
                    </div>

                    <div className="card-info">
                        <div className="stripe-field">
                            <CardExpiryElement style={stripeStyles}/>
                        </div>
                        <div className="stripe-field">
                            <CardCVCElement style={stripeStyles}/>
                        </div>
                        <div className="stripe-field">
                            <PostalCodeElement style={stripeStyles}/>
                        </div>
                    </div>

                    <ActionButton  
                        action={this.submit}
                        actionText={this.handleButtonText()}
                    />
                </div>
            </div>
        )
    };
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