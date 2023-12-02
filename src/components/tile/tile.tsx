import React, { useState, useEffect, } from 'react';
import { animateScroll as scroll, Events } from 'react-scroll';

import {
    StyledTile,
    StyledImage,
    StyledImageWrapper,
    StyledClickedText,
    StyledIconWrapper,
    StyledClickedWrapper,
    StyledClickedTile
} from './tile.styled';
import { ITile } from './tile.types';

import Prize from '../../images/icons/common/prize.svg';
import { ANIMATIONS_TIMINGS } from '../../constants/animations';
import { getTimestamp } from './tile.utils';

const SCROLL_OPTIONS = {
    duration: 400,
    smooth: "easeInOutQuad",
}

const Tile = ({
    column,
    row,
    imgSrc,
    isRounded,
    id,
    setCurrentId,
    date,
    setAppState,
}: ITile) => {
    const [state, setState] = useState("default");
    const [isDisabledClicked, setIsDisabledClicked] = useState(false);
    let clickedTimer = null;


    const timestamp = (new Date(date.getFullYear(), date.getMonth(), date.getDate())).getTime();
    const tileTimestamp = getTimestamp(id);

    useEffect(() => {
        if (!tileTimestamp) {
            setState("placeholder");
            return;
        }

        if (timestamp > tileTimestamp) {
            setState("past");
            return;
        }

        if (timestamp === tileTimestamp) {
            setState("active");
        }


        if (timestamp === tileTimestamp) {
            Events.scrollEvent.register("end", (to) => {
                if (to) {
                    return;
                }

                if (id as number < 30) {
                    setAppState({
                        isActionResultBlockRendered: true,
                        actionResultBlockType: "present",
                        actionResultBlockVisibility: "visible",
                    });

                    setCurrentId(id as number);
                } else {
                    setAppState({
                        isActionResultBlockRendered: true,
                        actionResultBlockType: "victor",
                        actionResultBlockVisibility: "visible",
                    });
    
                    setCurrentId(null);
                }
            });
        }

        return () => {
            if (timestamp === tileTimestamp) {
                Events.scrollEvent.remove("end");
            }
        }
    }, []);

    const handleClick = () => {
        if (state === "clicked" || state === "active") {
            scroll.scrollToTop(SCROLL_OPTIONS);
        }

        if (state === "active") {
            setState("clicked");
        }

        if (["past", "default"].includes(state) && !isDisabledClicked) {
            setIsDisabledClicked(true);

            clickedTimer = setTimeout(() => {
                clickedTimer = null;
                setIsDisabledClicked(false);
            }, ANIMATIONS_TIMINGS.baseTransitionTime);
        }
    };

    return state === "clicked" ? (
        <StyledClickedTile row={row} column={column} onClick={handleClick}>
            <StyledClickedWrapper>
                <StyledIconWrapper>
                    <Prize />
                </StyledIconWrapper>
                {id as number < 30 ? (
                    <StyledClickedText>
                        Смотри<br />подарок<br />выше
                    </StyledClickedText>
                ) : (
                    <StyledClickedText>
                        Победители<br />опубликованы
                    </StyledClickedText>
                )}
            </StyledClickedWrapper>
        </StyledClickedTile>
    ) : (
        <StyledTile
            row={row}
            column={column}
            state={state}
            onClick={handleClick}
            isRounded={isRounded}
            isDisabledClicked={isDisabledClicked}
        >
            <StyledImageWrapper>
                <StyledImage src={imgSrc} alt="" />
            </StyledImageWrapper>
        </StyledTile>
    );
};

export default Tile;