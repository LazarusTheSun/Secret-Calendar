import styled, { keyframes, css } from 'styled-components';

import breakpoints from '../../constants/breakpoints.json';
import type { TVisibility } from '../app/app.types';

import { ANIMATIONS_TIMINGS } from '../../constants/animations';

const fadeOut = keyframes`
    0% {
        transform: translateY(0);
        opacity: 1;
    }
    100% {
        transform: translateY(-100%);
        opacity: 0;
    }
`;

const fadeIn = keyframes`
    0% {
        transform: translateY(-100%);
        opacity: 0;
    }
    100% {
        transform: translateY(0);
        opacity: 1;
    }
`;

const fadeOutHelper = css`
    animation: ${fadeOut} 1s ease-in-out 1 forwards;
`;

const fadeInHelper = css`
    animation: ${fadeIn} 1s ease-in-out 1 forwards;
`;

export const StyledSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (min-width: ${breakpoints.m}px) {
        margin-top: 36px;
    }

    @media screen and (min-width: ${breakpoints.s}px) and (max-width: ${breakpoints.m - 1}px) {
        margin-top: 90px;
    }
    
    @media screen and (max-width: ${breakpoints.s - 1}px) {
        margin-top: 58px;
    }
`;

export const StyledTitle = styled.div<{ presentVisibility: TVisibility; }>`
    position: relative;
    font-family: "FUD Grotesk", sans-serif;
    font-weight: 700;
    text-transform: uppercase;

    @media screen and (min-width: ${breakpoints.m}px) {
        font-size: 160px;
        line-height: 192px;
        transition:
            font-size ${ANIMATIONS_TIMINGS.baseTransitionTime}ms ease-in-out,
            line-height ${ANIMATIONS_TIMINGS.baseTransitionTime}ms ease-in-out;

        ${({ presentVisibility }) => presentVisibility === "visible" && `
            font-size: 140px;
            line-height: 168px;
        `}
    }

    @media screen and (min-width: ${breakpoints.s}px) and (max-width: ${breakpoints.m - 1}px) {
        font-size: 100px;
        line-height: 120px;
    }
    
    @media screen and (min-width: ${breakpoints.xxs}px) and (max-width: ${breakpoints.s - 1}px) {
        font-size: 64px;
        line-height: 78px;
    }
    
    @media screen and (max-width: ${breakpoints.xxs - 1}px) {
        font-size: 40px;
        line-height: 48px;
    }

    @media screen and (min-width: ${breakpoints.m}px) {
        margin-bottom: 40px;
    }

    @media screen and (min-width: ${breakpoints.s}px) and (max-width: ${breakpoints.m - 1}px) {
        margin-bottom: 32px;
    }

    @media screen and (min-width: ${breakpoints.xxs}px) and (max-width: ${breakpoints.s - 1}px) {
        margin-bottom: 24px;
    }

    @media screen and (max-width: ${breakpoints.xxs - 1}px) {
        margin-bottom: 12px;
    }
`;

export const StyledSecret = styled.div<{ presentVisibility: TVisibility; }>`
    position: absolute;

    & > svg {
        width: 100%;
        height: 100%;
    }

    @media screen and (min-width: ${breakpoints.m}px) {
        left: -146px;
        bottom: 58px;
        width: 380px;
        height: 189px;
        transition:
            width ${ANIMATIONS_TIMINGS.baseTransitionTime}ms ease-in-out,
            height ${ANIMATIONS_TIMINGS.baseTransitionTime}ms ease-in-out,
            left ${ANIMATIONS_TIMINGS.baseTransitionTime}ms ease-in-out;

        ${({ presentVisibility }) => presentVisibility === "visible" && `
            left: -111px;
            width: 262px;
            height: 144px;
        `}
    }

    @media screen and (min-width: ${breakpoints.s}px) and (max-width: ${breakpoints.m - 1}px) {
        left: -116px;
        bottom: 62px;
        width: 225px;
        height: 125px;
    }

    @media screen and (min-width: ${breakpoints.xxs}px) and (max-width: ${breakpoints.s - 1}px) {
        left: -47px;
        bottom: 33px;
        width: 138px;
        height: 77px;
    }
    
    @media screen and (max-width: ${breakpoints.xxs - 1}px) {
        left: -46px;
        bottom: 26px;
        width: 88px;
        height: 50px;
    }
`;

export const StyledWrapper = styled.div<{ descriptionVisiblity: TVisibility; }>`
    display: flex;
    align-items: flex-end;
    overflow: hidden;
    transition:
        height ${ANIMATIONS_TIMINGS.baseTransitionTime}ms ease-in-out;
`;

export const StyledDescription = styled.div<{ descriptionVisiblity: TVisibility; }>`
    max-width: 644px;
    text-align: center;

    ${({ descriptionVisiblity }) => {
        switch (descriptionVisiblity) {
            case "visible":
                return `
                    transform: translateY(0%);
                    opacity: 1;
                    transition:
                        opacity ${ANIMATIONS_TIMINGS.baseTransitionTime}ms ease-in-out ${ANIMATIONS_TIMINGS.baseTransitionTime * 0.4}ms,
                        transform ${ANIMATIONS_TIMINGS.baseTransitionTime}ms ease-in-out;
                `;
            case "hidden":
                return `
                    transform: translateY(-100%);
                    opacity: 0;
                    transition:
                        opacity ${ANIMATIONS_TIMINGS.baseTransitionTime * 0.4}ms ease-in-out,
                        transform ${ANIMATIONS_TIMINGS.baseTransitionTime}ms ease-in-out;
                `;
            default:
                return "";
        }
    }}

    & > * + * {
        margin-top: 1.2em;
    }

    @media screen and (min-width: ${breakpoints.s}px) {
        font-size: 16px;
        line-height: 20px;
    }

    @media screen and (max-width: ${breakpoints.s - 1}px) {
        font-size: 14px;
        line-height: 18px;
    }
`;

export const StyledLearnMore = styled.div`
    display: inline-block;
    text-decoration: underline;
    cursor: pointer;

    @media screen and (min-width: ${breakpoints.s}px) {
        margin-left: 5px;
    }

    @media screen and (max-width: ${breakpoints.s - 1}px) {
        margin: 0 auto;
    }
`;
