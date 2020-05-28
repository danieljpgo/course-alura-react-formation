import styled from 'styled-components';

export const Container = styled.div`
  .display{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: ${(props) => props.theme.unit}px;
  }
`;

Container.defaultProps = {
  'data-id': 'Container',
};
