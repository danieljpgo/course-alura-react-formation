import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    place-items: center;
    grid-template-columns: repeat(auto-fit, minmax(30px, 1fr));
    padding: ${(props) => props.theme.unit}px
`;

Container.defaultProps = {
  'data-id': 'Container',
};
