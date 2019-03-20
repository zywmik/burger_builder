import React from 'react';

import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import classes from './CheckoutSummary.css';

const checkoutSummary = ({ingredients, onCheckoutCancel, onCheckoutContinue}) => {
  return (
    <div className={classes.CheckoutSummary}>
      <h1>We hope it tastes well!</h1>
      <div style={{width: '100%', margin: 'auto'}}>
        <Burger ingredients={ingredients}/>
      </div>
      <Button
        btnType="Danger"
        clicked={onCheckoutCancel}>CANCEL</Button>
      <Button
        btnType="Success"
        clicked={onCheckoutContinue}>CONTINUE</Button>
    </div>
  );
}

export default checkoutSummary;