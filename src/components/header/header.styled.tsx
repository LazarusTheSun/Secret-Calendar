import styled from 'styled-components';

import breakpoints from '../../constants/breakpoints.json';

export const StyledHeader = styled.header`
    @media screen and (min-width: ${breakpoints.s}px) {
        padding-top: 30px;
    }

    @media screen and (max-width: ${breakpoints.s - 1}px) {
        padding-top: 24px;
    }
`;

export const StyledHeaderWrapper = styled.div`
    display: flex;
    align-items: center;

    @media screen and (min-width: ${breakpoints.l}px) {
        margin: 0 auto;
        padding: 0 60px;
        max-width: 1920px;
    }

    @media screen and (max-width: ${breakpoints.l - 1}px) {
        justify-content: center;
    }
`;

export const StyledLogoWrapper = styled.a`
    display: block;

    & > svg {
        width: 100%;
        height: 100%;
    }

    @media screen and (min-width: ${breakpoints.m}px) {
        width: 360px;
        height: 64px;
    }

    @media screen and (min-width: ${breakpoints.s}px) and (max-width: ${breakpoints.m - 1}px) {
        width: 328px;
        height: 64px;
    }

    @media screen and (max-width: ${breakpoints.s - 1}px) {
        width: 248px;
        height: 48px;
    }
`;