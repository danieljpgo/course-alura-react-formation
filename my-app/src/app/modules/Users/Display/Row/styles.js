import styled from 'styled-components';

export const Container = styled.div`
  .MuiPaper-rounded{
    border-radius: ${(props) => props.theme.shapes.borderRadius}px
  }
`;

Container.defaultProps = {
  'data-id': 'Row',
};
