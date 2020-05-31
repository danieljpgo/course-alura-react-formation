import React from 'react';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import { Container } from './styles';


const propTypes = {
  children: PropTypes.node,
  elevation: PropTypes.number,
};
const defaultProps = {
  children: null,
  elevation: 1,
};

function Box(props) {
  const { children, elevation } = props;

  return (
    <Container>
      <Paper elevation={elevation}>
        {children}
      </Paper>
    </Container>
  );
}

Box.propTypes = propTypes;
Box.defaultProps = defaultProps;

export default Box;
