import styled from 'styled-components';

import breakpoints from '../../constants/breakpoints.json';

export const StyledLayoutWrapper = styled.div`
    margin: 0 auto;

    @media screen and (min-width: ${breakpoints.xl}px) {
        max-width: 1172px;
    }

    @media screen and (min-width: ${breakpoints.s}px) and (max-width: ${breakpoints.xl - 1}px) {
        max-width: 580px;
    }
    
    @media screen and (min-width: ${breakpoints.xxs}px) and (max-width: ${breakpoints.s - 1}px) {
        max-width: 320px;
    }

    @media screen and (max-width: ${breakpoints.xxs - 1}px) {
        padding: 0 25px;
        max-width: 100%;
    }
`;
