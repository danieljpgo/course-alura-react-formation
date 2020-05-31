import React from 'react';
import PropTypes from 'prop-types';
import Box from '../Box';
import { Container, Title, Content } from './styles';


const propTypes = {
  children: PropTypes.node,
  elevation: PropTypes.number,
  title: PropTypes.string,
};
const defaultProps = {
  children: null,
  elevation: 1,
  title: 'Untitled',
};

function Presentation(props) {
  const { children, elevation, title } = props;
  return (
    <Container>
      <Title>
        {title}
      </Title>
      <Content>
        <Box elevation={elevation}>
          {children}
        </Box>
      </Content>
    </Container>
  );
}

Presentation.propTypes = propTypes;
Presentation.defaultProps = defaultProps;

export default Presentation;
