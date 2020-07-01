import styled from 'styled-components';

export const Container = styled.div`
  .display{
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    grid-gap: ${(props) => props.theme.unit}px;
  }
`;

Container.defaultProps = {
  'data-id': 'Display Container',
};
