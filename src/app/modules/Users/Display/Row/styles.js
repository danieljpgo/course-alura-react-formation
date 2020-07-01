import styled from 'styled-components';

export const Container = styled.div`
  .MuiPaper-rounded{
    border-radius: ${(props) => props.theme.shapes.borderRadius}px;
    .MuiAvatar-root{
      height: 72px;
      width: 72px;
    }
  }
`;

Container.defaultProps = {
  'data-id': 'Row Container',
};
