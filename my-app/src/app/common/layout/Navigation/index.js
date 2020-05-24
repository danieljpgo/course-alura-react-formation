import React from 'react';
import PropType from 'prop-types';
import LinkWrapper from '../../components/LinkWrapper';
import './styles.css';

const propTypes = {
  children: PropType.node.isRequired,
};

function Navigation(props) {
  const { children } = props;

  return (
    <div className="container">
      <nav>
        <div className="wrapper">
          My App
        </div>
        <div className="wrapper">
          <LinkWrapper to="/users">Users</LinkWrapper>
          <LinkWrapper to="/info">Info</LinkWrapper>
        </div>
      </nav>
      <main>
        { children }
      </main>
    </div>
  );
}

Navigation.propTypes = propTypes;

export default Navigation;
