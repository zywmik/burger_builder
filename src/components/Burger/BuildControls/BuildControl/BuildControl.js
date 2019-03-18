import React from 'react';
import PropTypes from 'prop-types';

import classes from './BuildControl.css';

const buildControl = ({label, added, removed, disabled}) => {
  return (
    <div className={classes.BuildControl}>
      <div className={classes.Label}>{label}</div>
      <button className={classes.Less} onClick={removed} disabled={disabled}>Less</button>
      <button className={classes.More} onClick={added}>More</button>
    </div>
  )
}

buildControl.propTypes = {
  label: PropTypes.string.isRequired,
  added: PropTypes.func,
  removed: PropTypes.func,
  disabled: PropTypes.bool
}

export default buildControl;
