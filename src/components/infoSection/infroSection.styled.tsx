import styled from 'styled-components';

import breakpoints from '../../constants/breakpoints.json';
import colors from '../../constants/colors.json';

import { hexToRgb } from '../../utils/hexToRgb';

export const StyledSection = styled.section`
    @media screen and (min-width: ${breakpoints.s}px) {
        margin-top: 80px;
    }

    @media screen and (max-width: ${breakpoints.s - 1}px) {
        margin-top: 64px;
    }
`;

export const StyledWrapper = styled.div`
    display: grid;

    @media screen and (min-width: ${breakpoints.xl}px) {
        grid-template-columns: repeat(2, 1fr);
        align-items: flex-start;
        grid-gap: 24px;
    }

    @media screen and (max-width: ${breakpoints.xl - 1}px) {
        grid-template-columns: 100%;
        grid-gap: 32px;
    }
`;

export const StyledContentWrapper = styled.div`
    display: flex;
    flex-direction: column;

    @media screen and (min-width: ${breakpoints.m}px) {
       & > * + * {
            margin-top: 24px;
       }
    }

    @media screen and (max-width: ${breakpoints.m - 1}px) {
        & > * + * {
            margin-top: 12px;
        }
    }
`

export const StyledInfo = styled.div`
    padding: 20px; 
    border-radius: 12px;
    background-color: ${hexToRgb(colors.minorGray, 0.6)};
`;

export const StyledInfoWrapper = styled.div`
    display: flex;

    @media screen and (min-width: ${breakpoints.s}px) {
        align-items: center;

        & > * + * {
            margin-left: 12px; 
        }
    }

    @media screen and (max-width: ${breakpoints.s - 1}px) {
        flex-direction: column;
        align-items: flex-start;

        & > * + * {
            margin-top: 12px; 
        }
    }
`;

export const StyledIconWrapper = styled.div<{width: number; height: number;}>`
    ${({width, height}) => `
        min-width: ${width}px;
        width: ${width}px;
        height: ${height}px;
    `}

    & > img {
        width: 100%;
    }
`

export const StyledColumn = styled.div`
    display: flex;
    align-items: flex-start;

    @media screen and (min-width: ${breakpoints.xl}px) {
        & > * + * {
            margin-left: 12px;
        }
    }

    @media screen and (max-width: ${breakpoints.xl - 1}px) {
        flex-direction: column;

        & > * + * {
            margin-top: 12px;
        }
    }
`;

export const StyledColumnTitle = styled.h2`
    font-family: "FUD Grotesk", sans-serif;
    text-transform: uppercase;
`;

export const StyledDescription = styled.div`
    & > * + * {
        margin-top: 1.3em;
    }
`;

export const StyledParagraph = styled.p<{weight?: number}>`
    font-size: 14px;
    line-height: 18px;

    ${({weight}) => weight && `
        font-weight: ${weight}
    `}
`;

export const StyledAfterwordTitle = styled.div`
    margin-bottom: 8px;
    font-size: 18px;
    line-height: 23px;
    font-weight: 700;
`;