import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import classes from './NavigationItem.css';

const navigationItem = ({link, children, exact}) => (
  <li className={classes.NavigationItem}>
    <NavLink
      to={link}
      exact={exact}
      activeClassName={classes.active}>{children}</NavLink>
  </li>
);

navigationItem.propTypes = {
  link: PropTypes.string.isRequired,
  active: PropTypes.bool
}

export default navigationItem;
