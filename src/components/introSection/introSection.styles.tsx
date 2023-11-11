import styled from 'styled-components';

import breakpoints from '../../constants/breakpoints.json';

export const StyledSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 100px;

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

export const StyledDescription = styled.p`
    text-align: center;

    @media screen and (min-width: ${breakpoints.m}px) {
        margin-top: 40px;
        font-size: 24px;
        line-height: 30px;
    }

    @media screen and (min-width: ${breakpoints.s}px) and (max-width: ${breakpoints.m - 1}px) {
        margin-top: 32px;
        font-size: 20px;
        line-height: 25px;
    }

    @media screen and (min-width: ${breakpoints.xxs}px) and (max-width: ${breakpoints.s - 1}px) {
        margin-top: 24px;
        font-size: 14px;
        line-height: 18px;
    }
    
    @media screen and (max-width: ${breakpoints.xxs - 1}px) {
        margin-top: 12px;
        font-size: 12px;
        line-height: 15px;
    }
`;