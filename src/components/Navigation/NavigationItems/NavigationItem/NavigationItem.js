import React from 'react';
import PropTypes from 'prop-types';

import classes from './NavigationItem.css';

const navigationItem = ({link, children, active }) => (
  <li className={classes.NavigationItem}>
    <a
      href={link}
      className={active ? classes.active : null}>{children}</a>
  </li>
);

navigationItem.propTypes = {
  link: PropTypes.string.isRequired,
  active: PropTypes.bool
}

export default navigationItem;
