import styled from "styled-components";

import colors from '../../constants/colors.json';
import breakpoints from '../../constants/breakpoints.json';

import decorarionPattern from '../../images/common/decoration-pattern.png';
import evergreen from '../../images/common/evergreen.png';
import { ANIMATIONS_TIMINGS } from "../../constants/animations";

export const StyledSection = styled.section`
    position: relative;
    margin: 40px auto 64px;
    width: 100%;
    border-radius: 40px;
    overflow: hidden;
    background-color: ${colors.majorRed};
    background-image: url(${decorarionPattern}), url(${evergreen});
    background-repeat: no-repeat;
    background-size: cover, contain;

    @media screen and (min-width: ${breakpoints["3xl"]}px) {
        padding-bottom: 105px;
        max-width: 1560px;
        background-position: center center, top 66px right -50px;
    }

    @media screen and (min-width: ${breakpoints["2xl"]}px) and (max-width: ${breakpoints["3xl"] - 1}px) {
        padding-bottom: 105px;
        max-width: 1440px;
        background-position: center center, top 66px right -70px;
    }

    @media screen and (min-width: ${breakpoints.xl}px) and (max-width: ${breakpoints["2xl"] - 1}px) {
        padding-bottom: 95px;
        max-width: 1200px;
        background-position: center center, top 66px right -165px;
    }

    @media screen and (min-width: ${breakpoints.l}px) and (max-width: ${breakpoints.xl - 1}px) {
        padding-bottom: 40px;
        max-width: 1000px;
        background-position: center center, top 66px right -200px;
    }

    @media screen and (min-width: ${breakpoints.m}px) and (max-width: ${breakpoints.l - 1}px) {
        padding-bottom: 125px;
        max-width: 896px;
        background-position: center center, top 66px right -200px;
    }

    @media screen and (min-width: ${breakpoints.m}px) {
        padding-top: 60px;
        padding-right: 0;
        padding-left: 60px;
    }

    @media screen and (min-width: ${breakpoints.s}px) and (max-width: ${breakpoints.m - 1}px) {
        padding-top: 40px;
        padding-left: 40px;
        padding-bottom: 110px;
        background-size: cover, 770px;
        background-position: center center, top 42px right -230px;
    }

    @media screen and (max-width: ${breakpoints.s - 1}px) {
        padding-top: 24px;
        padding-left: 16px;
        background-size: cover, 480px;
        background-position: center center, bottom -50px center;
    }
`;

export const StyledContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

export const StyledTitle = styled.div`
    font-family: "FUD Grotesk", sans-serif;
    font-weight: 500;
    text-transform: uppercase;

    @media screen and (min-width: ${breakpoints.xl}px) {
        font-size: 105px;
    }

    @media screen and (min-width: ${breakpoints.m}px) and (max-width: ${breakpoints.xl - 1}px) {
        font-size: 80px;
    }

    @media screen and (min-width: ${breakpoints.s}px) and (max-width: ${breakpoints.m - 1}px) {
        font-size: 64px;
    }
    
    @media screen and (max-width: ${breakpoints.s - 1}px) {
        font-size: 50px;
    }
`;

export const StyledDescription = styled.div`
    @media screen and (min-width: ${breakpoints.xl}px) {
        margin-top: 24px;
    }

    @media screen and (min-width: ${breakpoints.l}px) {
        max-width: 545px;
    }

    @media screen and (min-width: ${breakpoints.l}px) and (max-width: ${breakpoints.xl - 1}px) {
        margin-top: 12px;
    }

    @media screen and (min-width: ${breakpoints.m}px) and (max-width: ${breakpoints.l - 1}px) {
        margin-top: 8px;
        max-width: 405px;
    }

    @media screen and (min-width: ${breakpoints.m}px) {
        & > * + * {
            margin-top: 12px;
        }
    }

    @media screen and (min-width: ${breakpoints.s}px) and (max-width: ${breakpoints.m - 1}px) {
        margin-top: 20px;
        max-width: 335px;

        & > * + * {
            margin-top: 16px;
        }
    }

    @media screen and (max-width: ${breakpoints.s - 1}px) {
        margin-top: 12px;
        max-width: 350px;

        & > * + * {
            margin-top: 8px;
        }
    }
`;

export const StyledParagraph = styled.p`
    @media screen and (min-width: ${breakpoints.l}px) {
        font-size: 24px;
        line-height: 30px;
    }

    @media screen and (min-width: ${breakpoints.s}px) and (max-width: ${breakpoints.l - 1}px) {
        font-size: 16px;
        line-height: 20px;
    }

    @media screen and (max-width: ${breakpoints.s - 1}px) {
        font-size: 14px;
        line-height: 17px;
    }
`;

export const StyledPromo = styled.div`
    @media screen and (min-width: ${breakpoints["3xl"]}px) {
        right: -50px;
        width: 835px;
    }

    @media screen and (min-width: ${breakpoints["2xl"]}px) and (max-width: ${breakpoints["3xl"] - 1}px) {
        right: -70px;
        width: 865px;
    }

    @media screen and (min-width: ${breakpoints.xl}px) and (max-width: ${breakpoints["2xl"] - 1}px) {
        right: -165px;
        width: 850px;
    }

    @media screen and (min-width: ${breakpoints.l}px) and (max-width: ${breakpoints.xl - 1}px) {
        right: -200px;
        width: 720px;
    }

    @media screen and (min-width: ${breakpoints.m}px) and (max-width: ${breakpoints.l - 1}px) {
        right: -200px;
        width: 685px;
    }

    @media screen and (min-width: ${breakpoints.s}px) and (max-width: ${breakpoints.m - 1}px) {
        right: -175px;
        width: 654px;
    }

    @media screen and (min-width: ${breakpoints.s}px) {
        position: absolute;
        bottom: 0;
    }
`

export const StyledPromoContent = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    @media screen and (min-width: ${breakpoints.l}px) {
        padding-bottom: 60px;
    }

    @media screen and (min-width: ${breakpoints.m}px) and (max-width: ${breakpoints.l - 1}px) {
        padding-bottom: 50px;
    }

    @media screen and (min-width: ${breakpoints.s}px) and (max-width: ${breakpoints.m - 1}px) {
        padding-bottom: 40px;
    }

    @media screen and (max-width: ${breakpoints.s - 1}px) {
        margin-top: 50px;
        padding-bottom: 24px;
    }
`

export const StyledDiscountValue = styled.div`
    font-family: "FUD Grotesk", sans-serif;
    font-weight: 500;

    @media screen and (min-width: ${breakpoints.xl}px) {
        margin-bottom: -35px;
        font-size: 117px;
        line-height: 140px;
    }

    @media screen and (min-width: ${breakpoints.s}px) and (max-width: ${breakpoints.xl - 1}px) {
        margin-bottom: -10px;
        font-size: 80px;
        line-height: 96px;
    }

    @media screen and (max-width: ${breakpoints.s - 1}px) {
        font-size: 60px;
        line-height: 72px;
    }
`;

export const StyledDiscountTitle = styled.div`
    font-family: "FUD Grotesk", sans-serif;
    font-weight: 500;
    text-transform: uppercase;

    @media screen and (min-width: ${breakpoints.xl}px) {
        margin-bottom: -20px;
        font-size: 107px;
        line-height: 128px;
    }

    @media screen and (min-width: ${breakpoints.s}px) and (max-width: ${breakpoints.xl - 1}px) {
        margin-bottom: -10px;
        font-size: 54px;
        line-height: 65px;
    }

    @media screen and (max-width: ${breakpoints.s - 1}px) {
        font-size: 38px;
        line-height: 45px;
    }
`;

export const StyledDiscountNote = styled.div`
    font-family: "FUD Grotesk", sans-serif;
    font-weight: 500;

    @media screen and (min-width: ${breakpoints.xl}px) {
        font-size: 75px;
        line-height: 90px;
    }

    @media screen and (min-width: ${breakpoints.s}px) and (max-width: ${breakpoints.xl - 1}px) {
        font-size: 44px;
        line-height: 52px;
    }

    @media screen and (min-width: ${breakpoints.s}px) {
        margin-bottom: 16px;
    }

    @media screen and (max-width: ${breakpoints.s - 1}px) {
        margin-bottom: 16px;
        font-size: 32px;
        line-height: 38px;
    }
`;


export const StyledDiscountDuration = styled.div`
    @media screen and (min-width: ${breakpoints.s}px) {
        margin-bottom: 24px;
        font-size: 20px;
        line-height: 25px;

        span {
            font-size: 30px;
            line-height: 38px;
        }
    }

    @media screen and (max-width: ${breakpoints.s - 1}px) {
        margin-bottom: 16px;
        font-size: 16px;
        line-height: 20px;
        text-transform: uppercase;
    }
`;

export const StyledFragment = styled.div`
    @media screen and (min-width: ${breakpoints.s}px) {
        font-size: 19px;
        line-height: 24px;
    }

    @media screen and (max-width: ${breakpoints.s - 1}px) {
        font-size: 14px;
        line-height: 18px;
    }
`;

export const StyledPromocode = styled.button`
    padding: 8px 33px;
    font-weight: 700;
    color: ${colors.majorWhite};
    text-transform: uppercase;
    border: none;
    border-radius: 25px;
    background-color: ${colors.majorRed};
    transition: background-color ${ANIMATIONS_TIMINGS.baseOpacityTime}ms ease-in-out;

    @media (hover) {
        cursor: pointer;

        &:hover {
            background-color: ${colors.minorRed};
        }
    }

    &:active {
        background-color: ${colors.minorRed2};
    }

    @media screen and (min-width: ${breakpoints.s}px) {
        margin: 8px 0;
        font-size: 23px;
        line-height: 29px;
    }

    @media screen and (max-width: ${breakpoints.s - 1}px) {
        margin: 2px 0;
        font-size: 16px;
        line-height: 20px;
    }
`;