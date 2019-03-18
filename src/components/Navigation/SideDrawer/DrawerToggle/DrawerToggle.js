import React from 'react';
import PropTypes from 'prop-types';

import classes from './DrawerToggle.css';

const drawerToggle = ({toggleMenu}) => {
  return (
  <div className={classes.DrawerToggle} onClick={toggleMenu}>
    <div></div>
    <div></div>
    <div></div>
  </div>
  );
}

drawerToggle.propTypes = {
  toggleMenu: PropTypes.func
}

export default drawerToggle;
