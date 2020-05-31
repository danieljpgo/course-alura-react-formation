import React from 'react';
import PropTypes from 'prop-types';
import Box from '../Box';
import { Container, Title, Content } from './styles';


const propTypes = {
  children: PropTypes.node,
  elevation: PropTypes.number,
  title: PropTypes.string,
  box: PropTypes.bool,
};
const defaultProps = {
  children: null,
  elevation: 4,
  title: 'Untitled',
  box: true,
};

function Presentation(props) {
  const {
    children,
    box,
    elevation,
    title,
  } = props;

  return (
    <Container>
      <Title>
        {title}
      </Title>
      <Content>
        {
          box
            ? (<Box elevation={elevation}>{children}</Box>)
            : children
        }

      </Content>
    </Container>
  );
}

Presentation.propTypes = propTypes;
Presentation.defaultProps = defaultProps;

export default Presentation;
