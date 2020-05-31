import React from 'react';
import PropType from 'prop-types';
import LinkWrapper from '../../components/LinkWrapper';
import { Container, Content, Wrapper } from './styles';

const title = 'Untitle';

const propTypes = {
  children: PropType.node.isRequired,
};

function Navigation(props) {
  const { children } = props;

  return (
    <Container>
      <nav>
        <Content>
          {title}
        </Content>
        <Content>
          <LinkWrapper to="/users">users</LinkWrapper>
          <LinkWrapper to="/admin">admin</LinkWrapper>
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
