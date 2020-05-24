import React from 'react';
import PropType from 'prop-types';
import { NavLink } from 'react-router-dom';
import './styles.css';

const propTypes = {
  to: PropType.string.isRequired,
  children: PropType.string.isRequired,
};

function LinkWrapper(props) {
  const { to, children } = props;

  return (
    <NavLink
      className="link"
      activeClassName="active"
      to={to}
    >
      {children}
    </NavLink>
  );
}

LinkWrapper.propTypes = propTypes;

export default LinkWrapper;
