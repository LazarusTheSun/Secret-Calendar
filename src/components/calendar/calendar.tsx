import React, { useState, useEffect } from 'react';

import { GRID_LAYOUT_CONFIG, GRID_TILES_CONFIG } from './calendar.constants';
import { StyledCalendar } from './calendar.styled';

import Tile from '../tile/tile';
import { ICalendar } from './calendar.types';
import { getDefaultState } from '../tile/tile.utils';

const Calendar = ({
    setAppState,
    actionResultBlockVisibility,
    setCurrentId,
    date,
}: ICalendar) => {
    const [gridType, setGridType] = useState("small");

    useEffect(() => {
        const setGrid = () => {
            if (window.innerWidth < 1440 && gridType !== "small") {
                setGridType("small");

                return;
            }

            if (window.innerWidth >= 1440 && gridType !== "large") {
                setGridType("large");

                return;
            }
        }

        setGrid();

        window.addEventListener("resize", setGrid);

        return () => {
            window.removeEventListener("resize", setGrid);
        }
    }, [gridType,]);

    return gridType && (
        <StyledCalendar
            rows={GRID_LAYOUT_CONFIG[gridType as keyof typeof GRID_LAYOUT_CONFIG].rows}
            columns={GRID_LAYOUT_CONFIG[gridType as keyof typeof GRID_LAYOUT_CONFIG].columns}
        >
            {GRID_TILES_CONFIG.map(tile => {
                const defaultState = getDefaultState(date.getMonth(), date.getDate(), tile.id);

                return (
                    <Tile
                        key={tile.id}
                        row={tile[gridType as keyof typeof GRID_LAYOUT_CONFIG].row}
                        column={tile[gridType as keyof typeof GRID_LAYOUT_CONFIG].column}
                        isRounded={tile.isRounded}
                        imgSrc={ gridType === "large" ? tile.images.web : tile.images.mobile }
                        id={tile.id}
                        date={date}
                        defaultState={defaultState}
                        actionResultBlockVisibility={actionResultBlockVisibility}
                        setCurrentId={setCurrentId}
                        setAppState={setAppState}
                    />
                )
            }
            )}
        </StyledCalendar>
    )
};

export default Calendar;
