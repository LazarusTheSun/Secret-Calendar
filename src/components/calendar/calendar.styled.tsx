import styled from 'styled-components';

import breakpoints from '../../constants/breakpoints.json';

export const StyledCalendar = styled.div<{rows: number; columns: number}>`
    display: grid;
    align-items: flex-start;
    margin-top: 100px;

    ${({rows, columns}) => `
        grid-template-columns: repeat(${columns}, 1fr);
        grid-template-rows: repeat(${rows}, 1fr);
    `}

    @media screen and (min-width: ${breakpoints.s}px) {
        grid-gap: 12px;
    }

    @media screen and (max-width: ${breakpoints.s - 1}px) {
        grid-gap: 6px;
    }
`;
