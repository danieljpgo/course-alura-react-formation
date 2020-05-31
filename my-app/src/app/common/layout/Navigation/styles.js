import styled from 'styled-components';

export const Container = styled.div`
    min-height: 100vh;
    font-size: 20px;
    color: #ffffff;

    nav{
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: solid 2px #ffffff;
        max-width: 980px;
        width: 100%;
        margin: 0 auto ${(props) => props.theme.unit * 2}px auto ;
    }

    main{
        height: calc(100vh - 50px);
        overflow: auto;
    }
    `;

export const Content = styled.div`
    padding: 12px 20px;
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 20px;
    `;

export const Wrapper = styled.div`
    max-width: 980px; 
    width: 100%;
    margin: auto;
    padding: 0 ${(props) => props.theme.unit * 2}px;
    @media (max-width: ${(props) => props.theme.breakpoints.small}px) {
      padding: 0 ${(props) => props.theme.unit}px;
    }

`;

Container.defaultProps = {
  'data-id': 'Navigation Container',
};

Content.defaultProps = {
  'data-id': 'Navigation Content',
};

Wrapper.defaultProps = {
  'data-id': 'Navigation Wrapper',
};
