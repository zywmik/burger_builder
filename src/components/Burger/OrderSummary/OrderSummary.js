import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Aux from '../../../hoc/_Aux/Aux';
import Button from '../../UI/Button/Button';


class OrderSummary extends Component {
  render() {
    const { ingredients, price, purchaseContinued, purchaseCanceled } = this.props;

    const ingredientSummary = Object.keys(ingredients)
    .map(igKey => {
      return (
        <li key={igKey}>
          <span style={{textTransform: 'capitalize'}}>
            {igKey}
          </span>: {ingredients[igKey]}
        </li>
      );
    });

    return (
      <Aux>
        <h3>Your Order</h3>
        <p>A delicious burger with the following ingredients:</p>
        <ul>
          {ingredientSummary}
        </ul>
        <p><strong>Total Price: {price}</strong></p>
        <p>Continue to Checkout?</p>
        <Button
          btnType="Danger"
          clicked={purchaseCanceled}>CANCEL</Button>
        <Button
          btnType="Success"
          clicked={purchaseContinued}>CONTINUE</Button>
      </Aux>
    );
  }
}

OrderSummary.propTypes = {
  ingredients: PropTypes.objectOf(PropTypes.number),
  price: PropTypes.number.isRequired,
  purchaseContinued: PropTypes.func,
  purchaseCanceled: PropTypes.func
}

export default OrderSummary;
