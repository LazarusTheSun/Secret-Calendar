import styled from "styled-components";

import breakpoints from '../../constants/breakpoints.json';
import colors from '../../constants/colors.json';

export const StyledFooter = styled.footer`
    @media screen and (min-width: ${breakpoints.m}px) {
        margin-top: 80px;
    }

    @media screen and (min-width: ${breakpoints.s}px) and (max-width: ${breakpoints.m - 1}px) {
        margin-top: 114px;
    }

    @media screen and (max-width: ${breakpoints.s - 1}px) {
        margin-top: 64px;
    }
`;

export const StyledFooterWrapper = styled.div`
    display: flex;
    align-items: center;
    margin: 0 auto;

    @media screen and (min-width: ${breakpoints.m}px) {
        padding: 0 60px;
        max-width: 1920px;
    }

    @media screen and (min-width: ${breakpoints.s}px) and (max-width: ${breakpoints.m - 1}px) {
        max-width: 100%;
        padding: 0 32px;
    }

    @media screen and (min-width: ${breakpoints.s}px) {
        justify-content: space-between;
        padding-bottom: 60px;
    }

    @media screen and (max-width: ${breakpoints.s - 1}px) {
        flex-direction: column-reverse;
        padding: 0 28px 40px;

        & > *:first-child {
            margin-top: 24px;
        }
    }
`;

export const StyledPoliciesMenu = styled.ul`
    display: flex;

    @media screen and (min-width: ${breakpoints.m}px) {
        align-items: center;

        & > * + * {
            margin-left: 24px;
        }
    }

    @media screen and (max-width: ${breakpoints.m - 1}px) {
        flex-direction: column;

        & > * + * {
            margin-top: 4px;
        }
    }

    @media screen and (min-width: ${breakpoints.s}px) and (max-width: ${breakpoints.m - 1}px) {
        align-items: flex-start;
    }

    @media screen and (max-width: ${breakpoints.s - 1}px) {
        align-items: center;
    }
`;

export const StyledPolicyLink = styled.a`
    font-size: 20px;
    line-height: 25px;
    color: ${colors.majorGrey};

    @media (hover) {
        transition: color 0.2s ease-in-out;

        &:hover {
            color: ${colors.majorWhite};
        }
    }
`;

export const StyledWrapper = styled.div`
    display: flex;
    align-items: center;

    @media screen and (min-width: ${breakpoints.s}px) {
        & > * + * {
            margin-left: 24px;
        }
    }

    @media screen and (max-width: ${breakpoints.s - 1}px) {
        & > * + * {
            margin-left: 16px;
        }
    }
`;

export const StyledMenu = styled.ul`
    display: flex;
    align-items: center;
    

    & > * + * {
        margin-left: 16px;
    }
`;

export const StyledSocialLink = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background-color: ${colors.majorGreyDarken};

    & > svg {
        width: 20px;
        height: 20px;
    }
`;

export const StyledAppMarketLink = styled.a`
    display: block;
    width: 132px;
    height: 44px;

    & > svg {
        width: 100%;
        height: 100%;
    }
`;