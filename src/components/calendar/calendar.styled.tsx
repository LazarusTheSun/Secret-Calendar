import styled from 'styled-components';

import breakpoints from '../../constants/breakpoints.json';

export const StyledCalendar = styled.div<{rows: number; columns: number}>`
    display: grid;
    align-items: flex-start;

    ${({rows, columns}) => `
        grid-template-columns: repeat(${columns}, 1fr);
        grid-template-rows: repeat(${rows}, 1fr);
    `}

    @media screen and (min-width: ${breakpoints.m}px) {
        margin-top: 100px;
    }

    @media screen and (min-width: ${breakpoints.s}px) and (max-width: ${breakpoints.m - 1}px) {
        margin-top: 80px;
    }

    @media screen and (min-width: ${breakpoints.s}px) {
        grid-gap: 12px;
    }

    @media screen and (max-width: ${breakpoints.s - 1}px) {
        grid-gap: 6px;
        margin-top: 64px;
    }
`;
