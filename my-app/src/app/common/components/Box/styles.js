import styled from 'styled-components';

export const Container = styled.div`
  .MuiPaper-root{
    padding: ${(props) => props.theme.unit}px
  }
  .MuiPaper-rounded{
    border-radius: ${(props) => props.theme.shapes.borderRadius}px;
  }
`;

Container.defaultProps = {
  'data-id': 'Box Container',
};
