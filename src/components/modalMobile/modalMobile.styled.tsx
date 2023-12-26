import styled from 'styled-components';

import { hexToRgb } from '../../utils/hexToRgb';
import colors from '../../constants/colors.json';
import { ANIMATIONS_TIMINGS } from '../../constants/animations';

export const StyledModal = styled.div<{isVisible?: boolean;}>`
    position: fixed;
    z-index: 20;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    overflow-y: auto;
    scrollbar-width: none;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
    visibility: hidden;
    background-color: ${hexToRgb(colors.minorBlack2, 0.6)};
    transition:
        opacity ${ANIMATIONS_TIMINGS.baseOpacityTime}ms ease-in-out,
        visibility ${ANIMATIONS_TIMINGS.baseOpacityTime}ms ease-in-out;

    &::-webkit-scrollbar {
        display: none;
        width: 0;
        height: 0;
    }

    ${({isVisible}) => isVisible && `
        opacity: 1;
        visibility: visible;
    `}
`;

export const StyledContainer = styled.div<{isVisible?: boolean;}>`
    position: relative;
    display: flex;
    justify-content: center;
    padding: 30px 24px 40px;
    width: 100%;
    border: 1px solid ${colors.majorGreyDarker};
    border-radius: 32px 32px 0 0;
    background-color: ${colors.minorBlack};
    box-shadow: 0px 0px 20px 0px ${hexToRgb(colors.majorBlack, 0.35)};
    transform: translateY(100%);
    transition: transform ${ANIMATIONS_TIMINGS.baseOpacityTime}ms ease-in-out;

    ${({isVisible}) => isVisible && `
        transform: translateY(0%);
    `}
`;

export const StyledIconCloseButton = styled.button`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 16px;
    right: 16px;
    width: 28px;
    height: 28px;
    border: none;
    border-radius: 50%;
    background-color: ${hexToRgb(colors.majorWhite, 0.1)};
    cursor: pointer;
    transition: background-color ${ANIMATIONS_TIMINGS.baseOpacityTime}ms ease-in-out;

    @media (hover) {
        &:hover {
            background-color: ${colors.majorGreyDarker};
        }
    }

    & > svg {
        width: 20px;
        height: 20px;
    }
`;

export const StyledContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    max-width: 350px;

    & > * + * {
        margin-top: 24px;
    }
`;

export const StyledTitle = styled.div`
    margin-bottom: 8px;
    font-family: "FUD Grotesk", sans-serif;
    font-size: 32px;
    line-height: 38px;
    letter-spacing: 0.04em;
    font-weight: 700;
    text-transform: uppercase;
`;

export const StyledLove = styled.div`
    width: 80px;
    height: 80px;

    img {
        width: 100%;
    }
`;

export const StyledDescription = styled.div`
    font-size: 16px;
    line-height: 20px;
    color: ${colors.majorGrey};
`;

export const StyledFooter = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 16px;
    width: 100%;
`

export const StyledCloseButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 12px;
    width: 100%;
    font-size: 16px;
    line-height: 20px;
    color: ${colors.majorWhite};
    border: none;
    border-radius: 30px;
    background-color: ${hexToRgb(colors.majorWhite, 0.1)};
    cursor: pointer;
    transition: background-color ${ANIMATIONS_TIMINGS.baseOpacityTime}ms ease-in-out;

    @media (hover) {
        &:hover {
            background-color: ${colors.majorGreyDarker};
        }
    }
`;

export const StyledOrderLink = styled.a`
    padding: 12px;
    font-size: 16px;
    line-height: 20px;
    color: ${colors.minorBlack3};
    border-radius: 30px;
    background-color: ${colors.majorYellow};
`;