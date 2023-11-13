import styled from 'styled-components';

import colors from '../../constants/colors.json';
import breakpoints from '../../constants/breakpoints.json';

import patternDesktop from '../../images/background/background-pattern-desk.jpg';
import patternTablet from '../../images/background/background-pattern-tablet.jpg';
import patternMobile from '../../images/background/background-pattern-mob.jpg';

export const StyledHiddenTitle = styled.h1`
    position: absolute;
    overflow: hidden;
    width: 1px;
    height: 1px;
    top: 0;
    left: 0;
    font-style: 1px;
    line-height: 1;
`;

export const StyledBackgroundPattern = styled.div`
    position: fixed;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: ${colors.majorBlack} no-repeat center top / cover;

    /* @media screen and (min-width: ${breakpoints.m}px) {
        background-image: url(${patternDesktop});
    }

    @media screen and (min-width: ${breakpoints.s}px) and (max-width: ${breakpoints.m - 1}px) {
        background-image: url(${patternTablet});
    }

    @media screen and (max-width: ${breakpoints.s - 1}px) {
        background-image: url(${patternMobile});
    } */
`;