import styled, {css, keyframes} from "styled-components";

import colors from '../../constants/colors.json';
import { hexToRgb } from "../../utils/hexToRgb";
import breakpoints from '../../constants/breakpoints.json';
import { ANIMATIONS_TIMINGS } from "../../constants/animations";

const move = keyframes`
    from {
        transform: translateX(-100%) rotate(45deg);
        left: -100%;
    }
    to {
        transform: translateX(200%) rotate(45deg);
        left: 150%;
    }
`;

const activeStateMixin = css`
    position: relative;
    cursor: pointer;
    overflow: hidden;

    &::after {
        position: absolute;
        display: block;
        content: "";
        top: -50%;
        width: 70px;
        height: 200%;
        background-image: linear-gradient(
            90deg,
            ${hexToRgb(colors.majorWhite, 0)} 7.66%,
            ${hexToRgb(colors.majorWhite, 0.4)} 55.66%,
            ${hexToRgb(colors.majorWhite, 0)} 92.51%
        );
        animation: ${move} 2s ease-in-out infinite both;
    }

    @media (hover) {
        transition: transform 0.2s ease-in-out;

        &:hover {
            z-index: 1;
            transform: scale(1.15);
        }
    }
`;

const shake = keyframes`
    10%, 90% {
        transform: translate3d(-1px, 0, 0);
    }
    
    20%, 80% {
        transform: translate3d(2px, 0, 0);
    }

    30%, 50%, 70% {
        transform: translate3d(-4px, 0, 0);
    }

    40%, 60% {
        transform: translate3d(4px, 0, 0);
    }
`;

const shakeHelper = css`
    animation: ${shake} 1 ${ANIMATIONS_TIMINGS.baseTransitionTime}ms ease-in-out forwards;
`;

export const StyledClickedTile = styled.div<{row: string; column: string;}>`
    width: 100%;
    height: 100%;

    ${({row, column}) => `
        grid-column: ${column};
        grid-row: ${row};
    `}
`;

export const StyledTile = styled.div<{row: string; column: string; state: string; isRounded?: boolean; isDisabledClicked: boolean;}>`
    width: 100%;
    height: 100%;

    ${({row, column}) => `
        grid-column: ${column};
        grid-row: ${row};
    `}
    
    ${({isRounded}) => isRounded && `
        overflow: hidden;
        border-radius: 16px;
    `}

    ${({state}) => {
        if (state === "past") {
            return `
                opacity: 0.4;
            `
        }

        if (state === "active") {
            return activeStateMixin;
        }

        if (state === "clicked") {
            return `
                cursor: pointer;
            `
        }
    }}

    ${({isDisabledClicked}) => isDisabledClicked && shakeHelper}
`;

export const StyledClickedWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background-color: ${colors.majorYellow};
`;

export const StyledIconWrapper = styled.div`
    @media screen and (min-width: ${breakpoints.s}px) {
        width: 30px;
        height: 30px;
    }

    @media screen and (max-width: ${breakpoints.s - 1}px) {
        width: 20px;
        height: 20px;
    }

    & > svg {
        width: 100%;
        height: 100%;
    }
`

export const StyledClickedText = styled.div`
    letter-spacing: -0.02em;
    text-align: center;
    color: ${colors.majorBlack};

    @media screen and (min-width: ${breakpoints.s}px) {
        margin-top: 8px;
        font-size: 20px;
        line-height: 22px;
    }

    @media screen and (max-width: ${breakpoints.s - 1}px) {
        margin-top: 2px;
        font-size: 12px;
        line-height: 12px;
    }
`;

export const StyledImageWrapper = styled.div<{isRounded?: boolean}>`
    width: 100%;
`;

export const StyledImage = styled.img`
    display: block;
    width: 100%;
    object-fit: cover;
    object-position: center;
    user-select: none;
`;
