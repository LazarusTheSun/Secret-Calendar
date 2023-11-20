import React, { useState, useEffect, } from 'react';
import { animateScroll as scroll, Events, scrollSpy } from 'react-scroll';

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

const SCROLL_OPTIONS = {
    duration: 650,
    smooth: "easeInOutQuad",
}

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


        if (timestamp === tileTimestamp) {
            Events.scrollEvent.register("end", () => {
                setIntroState({
                    presentVisibility: "visible",
                    descriptionVisiblity: "hidden",
                });
    
                setCurrentPresent(id as number);
            });
        }

        return () => {
            if (timestamp === tileTimestamp) {
                Events.scrollEvent.remove("end");
            }
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
        if (state === "clicked" || state === "active") {
            scroll.scrollToTop(SCROLL_OPTIONS);
        }

        if (state === "active") {
            setState("clicked");
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