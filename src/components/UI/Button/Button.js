import React from 'react';
import PropTypes from 'prop-types';

import classes from './Button.css';

const button = ({btnType, clicked, children}) => (
  <button
    className={[classes.Button, classes[btnType]].join(' ')}
    onClick={clicked}>{children}</button>
);

button.propTypes = {
  btnType: PropTypes.string.isRequired,
  clicked: PropTypes.func
}

export default button;
