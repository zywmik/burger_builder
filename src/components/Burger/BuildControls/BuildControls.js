import React from 'react';
import PropTypes from 'prop-types';


import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' },
];

const buildControls = (props) => (
  <div className={classes.BuildControls}>
    <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
    {controls.map(ctrl => (
      <BuildControl
        key={ctrl.label}
        label={ctrl.label}
        added={() => props.ingredientAdded(ctrl.type)}
        removed={() => props.ingredientRemoved(ctrl.type)}
        disabled={props.disabled[ctrl.type]} />
    ))}
    <button
      className={classes.OrderButton}
      disabled={!props.purchasable}
      onClick={props.ordered}>ORDER NOW</button>
  </div>
);

buildControls.propTypes = {
  price: PropTypes.number.isRequired,
  purchasable: PropTypes.bool.isRequired,
  ordered: PropTypes.func.isRequired,
  ingredientAdded: PropTypes.func.isRequired,
  ingredientRemoved: PropTypes.func.isRequired,
}

export default buildControls;
