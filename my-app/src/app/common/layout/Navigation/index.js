import React from 'react';
import PropType from 'prop-types';
import LinkWrapper from '../../components/LinkWrapper';
import { Container, Content, Wrapper } from './styles';

const propTypes = {
  children: PropType.node.isRequired,
};

function Navigation(props) {
  const { children } = props;

  return (
    <Container>
      <nav>
        <Content>
          My App
        </Content>
        <Content>
          <LinkWrapper to="/users">Users</LinkWrapper>
          <LinkWrapper to="/admin">Admin</LinkWrapper>
        </Content>
      </nav>
      <main>
        <Wrapper>
          { children }
        </Wrapper>
      </main>
    </Container>
  );
}

Navigation.propTypes = propTypes;

export default Navigation;
