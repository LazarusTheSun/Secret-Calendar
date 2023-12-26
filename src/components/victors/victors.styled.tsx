import styled from "styled-components";

import colors from '../../constants/colors.json';
import breakpoints from '../../constants/breakpoints.json';
import { ANIMATIONS_TIMINGS } from "../../constants/animations";

export const StyledSection = styled.section<{isVisible?: boolean; isAnimated?: boolean;}>`
    opacity: 1;
    transform: translateY(0);
    transition:
        opacity ${ANIMATIONS_TIMINGS.baseTransitionTime * 0.5}ms ease-in-out,
        transform ${ANIMATIONS_TIMINGS.baseTransitionTime}ms ease-in-out;
    
    ${({isAnimated, isVisible}) => {
        if (isAnimated) {
            return isVisible ? `
                opacity: 1;
                transform: translateY(0);
            ` : `
                opacity: 0;
                transform: translateY(30%);
            `;
        }

        return `
                opacity: 1;
                transform: translateY(0);
            `;
    }}

    @media screen and (min-width: ${breakpoints.m + 1}px) and (max-width: ${breakpoints.xl - 1}px) {
        margin: 0 -54px;
    }

    @media screen and (min-width: ${breakpoints.m}px) {
        padding-top: 56px;
    }

    @media screen and (min-width: ${breakpoints.s}px) and (max-width: ${breakpoints.m - 1}px) {
        margin: 0 -36px;
        padding-top: 100px;
    }

    @media screen and (max-width: ${breakpoints.s - 1}px) {
        padding-top: 44px;
    }
`;

export const StyledTitle = styled.h2`
    font-family: "FUD Grotesk", sans-serif;
    text-transform: uppercase;
    text-align: center;
    font-weight: 500;
    letter-spacing: 0.04em;

    @media screen and (min-width: ${breakpoints.m}px) {
        font-size: 64px;
        line-height: 80px;
    }

    @media screen and (min-width: ${breakpoints.s}px) and (max-width: ${breakpoints.m - 1}px) {
        font-size: 56px;
        line-height: 67px;
    }

    @media screen and (min-width: ${breakpoints.s}px) {
        margin-bottom: 44px;
    }

    @media screen and (max-width: ${breakpoints.s - 1}px) {
        margin-bottom: 32px;
        font-size: 44px;
        line-height: 53px;
    }
`;

export const StyledWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
`;

export const StyledVictor = styled.div`
    padding-top: 20px;
    padding-bottom: 20px;
    border: 1px solid ${colors.majorGreyDarker};
    border-radius: 100px;
    background-color: ${colors.minorBlack};

    @media screen and (min-width: ${breakpoints.m}px) {
        padding-left: 44px;
        padding-right: 44px;
    }

    @media screen and (max-width: ${breakpoints.m - 1}px) {
        padding-left: 32px;
        padding-right: 32px;
    }
`;

export const StyledPhone = styled.div<{icon: string;}>`
    padding-left: 68px;
    ${({icon}) => `
        background: url(${icon}) no-repeat left center / 44px;
    `}
    
    @media screen and (min-width: ${breakpoints.s}px) {
        padding-top: 7px;
        padding-bottom: 7px;
        font-size: 24px;
        line-height: 30px;
    }

    @media screen and (max-width: ${breakpoints.s - 1}px) {
        padding-top: 4px;
        padding-bottom: 4px;
        font-size: 20px;
        line-height: 25px;
    }
`;