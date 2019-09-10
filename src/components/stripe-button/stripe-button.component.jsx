import React,{Component} from 'react';
import StripeCheckout from 'react-stripe-checkout';
//import './stripe-component.styles.scss';

const StripeCheckoutButton = ({price}) => {
  
      const priceForStripe = 100 * price;
      const publishablekey = "pk_test_lPjfNs2fqULmWkTb5gVdEtQB00OBN0X8Og"
        
     const onToken = token => {
          console.log(token)
          alert(token)
        }
      return (<StripeCheckout 
      label="Pay me"
      name="Akshay private limited"
      billingAddress
      shippingAddress
      allowRememberMe
      image='https://svgshare.com/i/CUz.svg'
      description={`your total is $${price}`}
      amount={priceForStripe}
      panelLabel="pay now"
      token={onToken}
      stripeKey={publishablekey}
      />)
    }

export default StripeCheckoutButton;