import React from 'react';
import StripCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const pushlishableKey =
    'pk_test_51HpDjaDLYIo9vwf37HblCDfLq4DAmOBHcK3RdCFGJDvj6WetDIvQn5JJzZgAlTYj6wuPZI0c3UqIiTkwOCIxrIxe00g4tLNsV3';

  const onToken = token => {
    console.log(token);
    alert('Payment Successful');
  };

  return (
    <StripCheckout
      label=' Pay Now'
      name='Blaze Clothing LLC.'
      billingAddress
      shippingAddress
      image=' https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={pushlishableKey}
    />
  );
};

export default StripeCheckoutButton;
