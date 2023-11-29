import styled, { css } from "styled-components";

import breakpoints from '../../constants/breakpoints.json';
import colors from '../../constants/colors.json';
import border from '../../images/common/border.png';
import { ANIMATIONS_TIMINGS } from "../../constants/animations";

const copyMixin = css`
    margin-top: 24px;
    padding-left: 20px;
    padding-right: 20px;
    min-width: 280px;
    width: min-content;
    height: 90px;
    font-weight: 500;
    border: 1px dashed ${colors.majorWhite};
    border-image: url(${border}) 1;
    border-radius: 16px;
    text-transform: uppercase;
`;

export const StyledSection = styled.section`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
`;

export const StyledPresentWrapper = styled.div<{ isVisible: boolean; }>`
    opacity: 0;
    margin-top: 0;
    transition:
        margin-top ${ANIMATIONS_TIMINGS.baseTransitionTime}ms ease-out,
        opacity ${ANIMATIONS_TIMINGS.baseTransitionTime * 0.5}ms ease-out;

    ${({ isVisible }) => isVisible && `
        opacity: 1;

        @media screen and (min-width: ${breakpoints.m}px) {
            margin-top: -8px;
        }

        @media screen and (min-width: ${breakpoints.s}px) and (max-width: ${breakpoints.m - 1}px) {
            margin-top: 8px;
        }

        @media screen and (max-width: ${breakpoints.s - 1}px) {
            margin-top: -8px;
        }
    `}
`;

export const StyledPresent = styled.div`
    display: flex;
    align-items: center;

    @media screen and (min-width: ${breakpoints.xl}px) {
        justify-content: space-between;
    }

    @media screen and (max-width: ${breakpoints.xl - 1}px) {
        flex-direction: column-reverse;
    }
`;

export const StyledContent = styled.div<{ isVisible: boolean; }>`
    display: flex;
    flex-direction: column;
    transform: translateY(50px);
    transition: ${ANIMATIONS_TIMINGS.baseTransitionTime}ms ease-out;

    ${({isVisible}) => isVisible && `
        transform: translateY(0);
    `}

    @media screen and (min-width: ${breakpoints.xl}px) {
        align-items: flex-start;
    }

    @media screen and (max-width: ${breakpoints.xl - 1}px) {
        align-items: center;
        text-align: center;
    }
`;

export const StyledLabel = styled.div`
    padding: 8px 12px;
    font-size: 14px;
    line-height: 17px;
    font-weight: 700;
    color: ${colors.majorBlack};
    text-transform: uppercase;
    border-radius: 8px;
    background-color: ${colors.majorWhite};  
`;

export const StyledTitle = styled.div`
    font-family: "FUD Grotesk", sans-serif;
    text-transform: uppercase;
    letter-spacing: 0.04em;

    @media screen and (min-width: ${breakpoints.xl}px) {
        margin-top: 8px;
        font-size: 64px;
        font-weight: 500;
        line-height: 70px;
    }

    @media screen and (max-width: ${breakpoints.xl - 1}px) {
        margin-top: 12px;
    }

    @media screen and (min-width: ${breakpoints.m}px) and (max-width: ${breakpoints.xl - 1}px) {
        font-size: 48px;
        font-weight: 700;
        line-height: 57px;
    }

    @media screen and (max-width: ${breakpoints.m - 1}px) {
        font-weight: 500;
    }

    @media screen and (min-width: ${breakpoints.s}px) and (max-width: ${breakpoints.m - 1}px) {
        font-size: 56px;
        line-height: 67px;
    }

    @media screen and (max-width: ${breakpoints.s - 1}px) {
        font-size: 44px;
        line-height: 53px;
    }
`;

export const StyledInfo = styled.p<{isVisible: boolean;}>`
    transform: translateY(40px);
    transition: ${ANIMATIONS_TIMINGS.baseTransitionTime}ms ease-out;

    ${({isVisible}) => isVisible && `
        transform: translateY(0);
    `}

    @media screen and (min-width: ${breakpoints.xl}px) {
        margin-top: 44px;
    }

    @media screen and (min-width: ${breakpoints.s}px) {
        font-size: 16px;
        line-height: 20px;
    }

    @media screen and (min-width: ${breakpoints.s}px) and (max-width: ${breakpoints.xl - 1}px) {
        margin-top: 64px;
    }

    @media screen and (max-width: ${breakpoints.s - 1}px) {
        margin-top: 32px;
        font-size: 14px;
        line-height: 18px;
    }
`;

export const StyledFragment = styled.span`
    font-weight: 700;
`;

export const StyledPromocode = styled.div<{isVisible: boolean;}>`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 6px;
    font-family: inherit;
    font-size: 36px;
    line-height: 45px;
    letter-spacing: 0.06em;
    color: ${colors.majorWhite};
    background: none;
    cursor: pointer;
    user-select: none;
    transform: translateY(60px);
    transition: ${ANIMATIONS_TIMINGS.baseTransitionTime}ms ease-out;

    ${({isVisible}) => isVisible && `
        transform: translateY(0);
    `}

    ${copyMixin};

    @media (hover) {
        &:hover {
            &::after {
                opacity: 1;
                visibility: visible;
            }
        }

        &::after {
            position: absolute;
            content: "Скопировать";
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            font-size: 20px;
            line-height: 25px;
            letter-spacing: 0.16em;
            border-radius: 16px;
            opacity: 0;
            visibility: hidden;
            background-color: ${colors.majorBlack};
            transition: opacity 0.2s ease-out, visibility 0.2s ease-out;
        }
    }
`;

export const StyledCopied = styled.p`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    line-height: 25px;
    letter-spacing: 0.16em;
    border-radius: 16px;
    opacity: 0.6;

    ${copyMixin};
`;

export const StyledImageWrapper = styled.div<{ isVisible: boolean; }>`
    position: relative;
    transform: translateY(150px) scale(0.82);
    transition: transform ${ANIMATIONS_TIMINGS.baseTransitionTime}ms ease-out;

    ${({ isVisible }) => isVisible && `
        transform: translateY(0) scale(1);
    `}

    @media screen and (min-width: ${breakpoints.l + 1}px) {
        width: 740px;
        min-width: 740px;
    }

    @media screen and (max-width: ${breakpoints.l}px) {
        width: 740px;
        max-width: 100vw;
    }
`;

export const StyledLight = styled.div<{ isVisible: boolean; }>`
    position: absolute;
    z-index: 1;
    will-change: transform;
    opacity: 0;
    transform: translateY(-30%);
    transition:
        transform ${ANIMATIONS_TIMINGS.baseTransitionTime}ms ease-out,
        opacity ${ANIMATIONS_TIMINGS.baseTransitionTime}ms ease-out;
    user-select: none;
    pointer-events: none;

    ${({ isVisible }) => isVisible && `
        opacity: 1;
        transform: translateY(0);
    `}

    @media screen and (min-width: ${breakpoints.xl}px) {
        left: calc(100% - 740px);
        top: -70%;
        width: 935px;
        min-width: 935px;
    }

    @media screen and (min-width: ${breakpoints.m}px) and (max-width: ${breakpoints.xl - 1}px) {
        left: calc(50% - 435px);
        top: -35%;
        width: 1000px;
        min-width: 1000px;
    }

    @media screen and (min-width: ${breakpoints.s}px) and (max-width: ${breakpoints.m - 1}px) {
        left: calc(50% - 550px);
        top: -35%;
        width: 1100px;
        min-width: 1100px;
    }

    @media screen and (max-width: ${breakpoints.s - 1}px) {
        width: 135vw;
        height: calc(135vw * 1.35);
        top: -80vw;
        left: calc(50% - 61vw);
    }

    & > svg {
        width: 100%;
        height: 100%;
    }
`;

export const StyledImage = styled.img`
    width: 100%;  
`;

export const StyledLink = styled.a<{isVisible: boolean;}>`
    padding: 12px 24px;
    font-size: 16px;
    line-height: 20px;
    color: ${colors.majorBlack};
    border-radius: 30px;
    background-color: ${colors.majorYellow};
    transform: translateY(60px);
    transition: ${ANIMATIONS_TIMINGS.baseTransitionTime}ms ease-out;

    ${({isVisible}) => isVisible && `
        transform: translateY(0);
    `}

    @media (hover) {
        transition: background-color 0.2s ease-out;

        &:hover {
            background-color: ${colors.majorYellowDarker};
        }
    }

    @media screen and (max-width: ${breakpoints.l}px) {
        width: 280px;
    }

    @media screen and (min-width: ${breakpoints.l + 1}px) {
        margin-top: 44px;
    } 

    @media screen and (min-width: ${breakpoints.s}px) and (max-width: ${breakpoints.l}px) {
        margin-top: 24px;
    }

    @media screen and (max-width: ${breakpoints.s - 1}px) {
        margin-top: 32px;
    }
`;