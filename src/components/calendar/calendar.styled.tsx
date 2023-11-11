import styled from 'styled-components';

import breakpoints from '../../constants/breakpoints.json';

export const StyledCalendar = styled.div<{rows: number; columns: number}>`
    display: grid;
    align-items: flex-start;

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

export const StyledTile = styled.div<{row: string; column: string;}>`
    ${({row, column}) => `
        grid-column: ${column};
        grid-row: ${row};
    `}
`;

export const StyledImageWrapper = styled.div<{isRounded: boolean}>`
    width: 100%;

    ${({isRounded}) => isRounded && `
        overflow: hidden;
        border-radius: 16px;
    `}
`

export const StyledImage = styled.img`
    display: block;
    width: 100%;
    user-select: none;
`