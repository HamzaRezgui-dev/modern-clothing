import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100
    const publishableKey = 'pk_test_51LHSIpE67yaHkK2zPRmzay0smJg0KzfVZXICzC4nTfdsFWQKaBDSYFenDqXmAmeDDNLQqj14SH8a3489ZNjTVJeM00h3FLQhqI'

    const onToken = token => {
        console.log(token);
        alert('Payment Successful')
    }

    return (
        <StripeCheckout
            label="Pay Now"
            name="Modern Clothing"
            billingAddress
            shippingAddress
            image=""
            description={`your total is ${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton