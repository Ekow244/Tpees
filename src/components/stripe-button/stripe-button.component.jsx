import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton =({price})=>{
    const priceForstripe =price * 100;
    const publishableKey='pk_test_7HQAhQq1aBLDOJPWXqBvPZL800xZi5VRwz';

   const onToken =token=>{
        console.log(token);
        alert('Payment Successfull');
    }

    return(
        <StripeCheckout
        label='Pay Now'
        name='Miren Suits Ltd.'
        billingAddress
        shippingAddress
        image=''
        description={`Your total is $${price}`}
        amount={priceForstripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
        />
    );
}

export default StripeCheckoutButton;