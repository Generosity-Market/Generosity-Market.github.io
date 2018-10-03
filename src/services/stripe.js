// NOTE This file has not been verified to work, will need to build the microservice to test.
// TODO needs to be imported into cart footer for functionality to be tested

import PAYMENT_SERVER_URL from '../constants/server';

const CURRENCY = 'USD';

const successPayment = data => {
    console.log("successData: ", data);
    alert('Payment Successful');
};

const errorPayment = data => {
    console.log("errorData: ", data);
    alert('Payment Error');
};

export const onToken = (amount, description) => token => {
    let requestBody = {
        description: description.toString(),
        source: token.id,
        currency: CURRENCY,
        amount: amount
    };

    fetch(PAYMENT_SERVER_URL, {
        method: "POST",
        body: JSON.stringify(requestBody),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(results => results.json())
    .then(successData => {
        if (successData.success.outcome.type === 'authorized') {
            console.log("payment authorized");
            this.disableButtons(this.state.cart, amount)
        }
    })
    .catch(errorPayment)
};