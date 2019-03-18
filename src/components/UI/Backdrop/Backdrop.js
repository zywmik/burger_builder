import React from 'react';
import PropTypes from 'prop-types';

import classes from './Backdrop.css';

const backdrop = ({show, clicked}) => (
  show ? <div className={classes.Backdrop} onClick={clicked}></div> : null
);

backdrop.propTypes = {
  show: PropTypes.bool.isRequired,
  clickd: PropTypes.func
}

export default backdrop;
