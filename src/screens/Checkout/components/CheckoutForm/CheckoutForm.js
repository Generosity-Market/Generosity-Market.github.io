import React, { Component } from 'react';
import { CardNumberElement, CardExpiryElement, CardCVCElement, PostalCodeElement, injectStripe } from 'react-stripe-elements';
import './CheckoutForm.css';
import FontAwesome from '../../../../components/FontAwesome/FontAwesome';
import ActionButton from '../../../../components/ActionButton';

class CheckoutForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            complete: false,
            loading: false,
        }
        this.submit = this.submit.bind(this);
    };

    async submit(event) {
        const { stripe, total } = this.props;
        this.setState({ loading: true });
        // User clicked submit
        // TODO abstract this into a service...
        let { token } = await stripe.createToken({ name: "Name" });
        console.log(token);
        let response = await fetch("/charge", {
            method: "POST",
            headers: { "Content-Type": "text/plain" },
            body: token.id,
            amount: total,
        });

        // TODO Do something with the response...
        // if (response.ok) console.log("Purchase Complete!");
        if (response.ok) this.setState({ complete: true, loading: false });
    };

    render() {
        const { toggleCheckoutForm, showForm, total } = this.props;
        // console.log(this.props);

        if (this.state.complete) return <h1>Purchase Complete</h1>;

        return (
            <div className="CheckoutForm" style={showForm ? {bottom: '-5%'} : {bottom: '-100%'}}>
                <div className="card">
                    <FontAwesome onClick={toggleCheckoutForm} classname='far fa-times-circle'/>
                    <p>Would you like to complete the purchase?</p>
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

                    <ActionButton action={this.submit} actionText={`Donate $${total}`}/>
                </div>
            </div>
        )
    };
};

const stripeStyles = {
    base: {
        color: '#1e301b',
        fontSize: '18px',
        fontSmoothing: 'antialiased',
        '::placeholder': {
            color: '#606060',
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