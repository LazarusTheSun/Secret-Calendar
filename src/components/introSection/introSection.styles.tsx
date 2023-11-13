import styled from 'styled-components';

import breakpoints from '../../constants/breakpoints.json';

export const StyledSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (min-width: ${breakpoints.m}px) {
        margin-top: 64px;
    }

    @media screen and (min-width: ${breakpoints.s}px) and (max-width: ${breakpoints.m - 1}px) {
        margin-top: 130px;
    }
    
    @media screen and (max-width: ${breakpoints.s - 1}px) {
        margin-top: 58px;
    }
`;

export const StyledTitle = styled.div`
    position: relative;
    font-family: "FUD Grotesk", sans-serif;
    font-weight: 700;
    text-transform: uppercase;

    @media screen and (min-width: ${breakpoints.m}px) {
        font-size: 160px;
        line-height: 192px;
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
`;

export const StyledSecret = styled.div`
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

export const StyledDescription = styled.div`
    max-width: 644px;
    text-align: center;

    & > * + * {
        margin-top: 1.2em;
    }

    @media screen and (min-width: ${breakpoints.m}px) {
        margin-top: 40px;
    }

    @media screen and (min-width: ${breakpoints.s}px) and (max-width: ${breakpoints.m - 1}px) {
        margin-top: 32px;
    }

    @media screen and (min-width: ${breakpoints.s}px) {
        font-size: 16px;
        line-height: 20px;
    }

    @media screen and (max-width: ${breakpoints.s - 1}px) {
        font-size: 14px;
        line-height: 18px;
    }

    @media screen and (min-width: ${breakpoints.xxs}px) and (max-width: ${breakpoints.s - 1}px) {
        margin-top: 24px;
    }
    
    @media screen and (max-width: ${breakpoints.xxs - 1}px) {
        margin-top: 12px;
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

export const StyledFragment = styled.span`
    @media screen and (max-width: ${breakpoints.s - 1}px) {
        font-weight: 700;
    }
`;
