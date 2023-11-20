import React, { useState, useEffect, } from 'react';
import scrollTo from 'gatsby-plugin-smoothscroll';

import {
    StyledTile,
    StyledImage,
    StyledImageWrapper,
    StyledClickedText,
    StyledIconWrapper,
    StyledClickedWrapper
} from './tile.styled';
import { ITile } from './tile.types';
import { getTimestamp } from './tile.utils';

import Prize from '../../images/icons/common/prize.svg';
import { ANIMATIONS_TIMINGS } from '../../constants/animations';

const Tile = ({
    column,
    row,
    imgSrc,
    isRounded,
    id,
    timestamp,
    presentVisibility,
    setIntroState,
    setCurrentPresent,
}: ITile) => {
    const [state, setState] = useState("default");

    const tileTimestamp = getTimestamp(id);

    useEffect(() => {
        if (!tileTimestamp) {
            setState("placeholder");
            return;
        }

        if (timestamp > tileTimestamp) {
            setState("past");
        }
    }, []);

    useEffect(() => {
        if (timestamp === tileTimestamp) {
            if(presentVisibility === "visible") {
                setState("clicked");
            } else {
                setState("active");
            }
        }

    }, [presentVisibility]);

    const handleClick = () => {
        if (state === "clicked") {
            scrollTo("#header");
        }

        if (state === "active") {
            setState("clicked");
            scrollTo("#header");

            setTimeout(() => {
                setIntroState({
                    presentVisibility: "visible",
                    descriptionVisiblity: "hidden",
                });
            }, ANIMATIONS_TIMINGS.delayBeforePresentShow);
            setCurrentPresent(id as number);
        }
    };

    return (
        <StyledTile
            row={row}
            column={column}
            state={state}
            onClick={handleClick}
            isRounded={isRounded}
        >
            {state === "clicked" ? (
                <StyledClickedWrapper>
                    <StyledIconWrapper>
                        <Prize />
                    </StyledIconWrapper>
                    <StyledClickedText>
                        Смотри<br />подарок<br />выше
                    </StyledClickedText>
                </StyledClickedWrapper>
            ) : (
                <StyledImageWrapper>
                    <StyledImage src={imgSrc} alt="" />
                </StyledImageWrapper>
            )}
        </StyledTile>
    );
};

export default Tile;