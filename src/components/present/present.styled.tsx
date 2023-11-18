import styled, {css, keyframes} from "styled-components";

import breakpoints from '../../constants/breakpoints.json';
import colors from '../../constants/colors.json';
import border from '../../images/icons/common/border.png';
import type { TVisibility } from "../app/app.types";

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

const fadeOut = keyframes`
    0% {
        display: block;
        transform: translateY(0);
        opacity: 1;
    }
    99% {
        transform: translateY(30%);
        opacity: 0;
    }
    100% {
        display: none;
    }
`;

const fadeIn = keyframes`
    0% {
        display: none;
        transform: translateY(30%);
        opacity: 0;
    }
    1% {
        display: block;
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

export const StyledSection = styled.section<{presentVisibility: TVisibility}>`
    ${({presentVisibility}) => {
        switch(presentVisibility) {
            case "visible":
                return fadeInHelper;
            case "hidden":
                return fadeOutHelper;
            default:
                return "";
        }
    }}
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

export const StyledContent = styled.div`
    display: flex;
    flex-direction: column;

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

export const StyledInfo = styled.p`
    @media screen and (min-width: ${breakpoints.s}px) {
        margin-top: 64px;
        font-size: 16px;
        line-height: 20px;
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

export const StyledPromocode = styled.button`
    position: relative;
    padding-bottom: 6px;
    font-family: inherit;
    font-size: 36px;
    line-height: 45px;
    letter-spacing: 0.06em;
    color: ${colors.majorWhite};
    background: none;
    cursor: pointer;
    user-select: none;

    ${copyMixin};

    @media (hover) {
        &:hover {
            &::after {
                opacity: 1;
            }
        }
    }

    &::after {
        position: absolute;
        content: "Скопировать";
        display: flex;
        align-items: center;
        justify-content: center;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        font-size: 28px;
        line-height: 33px;
        letter-spacing: 0.16em;
        border-radius: 16px;
        opacity: 0;
        background-color: ${colors.majorBlack};
        transition: opacity 0.2s ease-in-out;
    }
`;

export const StyledCopied = styled.p`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 28px;
    line-height: 33px;
    letter-spacing: 0.16em;
    border-radius: 16px;
    opacity: 0.6;

    ${copyMixin};
`;

export const StyledImageWrapper = styled.div`
    cursor: pointer;

    @media screen and (min-width: ${breakpoints.l + 1}px) {
        width: 740px;
    }

    @media screen and (max-width: ${breakpoints.l}px) {
        width: 100%;
    }
`

export const StyledImage = styled.img`
    width: 100%;  
`;

export const StyledLink = styled.a`
    padding: 12px 24px;
    font-size: 16px;
    line-height: 20px;
    color: ${colors.majorBlack};
    border-radius: 30px;
    background-color: ${colors.majorYellow};

    @media (hover) {
        transition: background-color 0.2s ease-in-out;

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