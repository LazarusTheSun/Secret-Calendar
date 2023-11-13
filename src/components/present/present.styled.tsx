import styled, {css} from "styled-components";

import breakpoints from '../../constants/breakpoints.json';
import colors from '../../constants/colors.json';

const copyMixin = css`
    margin-top: 24px;
    font-weight: 500;
    letter-spacing: 0.06em;
    color: ${colors.majorWhite};
    text-transform: uppercase;
    border: 1px dashed ${colors.majorWhite};
    border-radius: 16px;

    @media screen and (min-width: ${breakpoints.xl + 1}px) {
        padding: 12px 30px 16px;
        font-size: 50px;
        line-height: 62px;
    }

    @media screen and (min-width: ${breakpoints.s}px) and (max-width: ${breakpoints.xl}px) {
        padding: 8px 40px 20px;
        font-size: 64px;
        line-height: 78px;
    }

    @media screen and (max-width: ${breakpoints.s - 1}px) {
        padding: 13px 55px 29px;
        font-size: 40px;
        line-height: 48px;
    }
`;

export const StyledSection = styled.section`
    display: flex;
    align-items: center;

    @media screen and (min-width: ${breakpoints.l + 1}px) {
        justify-content: space-between;
    }
    
    @media screen and (max-width: ${breakpoints.l}px) {
        flex-direction: column-reverse;
    }
`;

export const StyledContent = styled.div`
    display: flex;
    flex-direction: column;

    @media screen and (min-width: ${breakpoints.l + 1}px) {
        align-items: flex-start;
    }

    @media screen and (max-width: ${breakpoints.l}px) {
        align-items: center;
        text-align: center;
    }
`;

export const StyledLabel = styled.div`
    padding: 4px 20px 8px;
    font-family: "FUD Grotesk", sans-serif;
    font-size: 20px;
    line-height: 24px;
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
    font-family: inherit;
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
        font-size: 20px;
        letter-spacing: normal;
        border-radius: 16px;
        opacity: 0;
        background-color: ${colors.majorBlack};
        transition: opacity 0.2s ease-in-out;
    }
`;

export const StyledCopied = styled.p`
    ${copyMixin};  
`;

export const StyledImageWrapper = styled.div`
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