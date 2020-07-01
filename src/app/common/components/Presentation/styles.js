import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-gap: ${(props) => props.theme.unit}px;
`;

export const Title = styled.div`
  padding: 0 ${(props) => props.theme.unit}px;
`;

export const Content = styled.div`
  
`;

Container.defaultProps = {
  'data-id': 'Presentation Container',
};

Title.defaultProps = {
  'data-id': 'Presentation Title',
};

Content.defaultProps = {
  'data-id': 'Presentation Content',
};
