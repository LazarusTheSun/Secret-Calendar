import React from 'react';
import Media from 'react-media';

import { GRID_LAYOUT_CONFIG, GRID_TILES_CONFIG } from './calendar.constants';
import { StyledCalendar } from './calendar.styled';

import breakpoints from '../../constants/breakpoints.json';
import Tile from '../tile/tile';
import { ICalendar } from './calendar.types';

const Calendar = ({
    setAppState,
    actionResultBlockVisibility,
    setCurrentId,
    date,
}: ICalendar) => {
    const timestamp = date.getTime();

    return (
        <Media
            queries={{
                large: `(min-width: ${breakpoints.xl}px)`,
                small: `(max-width: ${breakpoints.xl - 1}px)`,
            }}
        >
            {mathes => (
                <>
                    {mathes.large && (
                        <StyledCalendar rows={GRID_LAYOUT_CONFIG.large.rows} columns={GRID_LAYOUT_CONFIG.large.columns}>
                            {GRID_TILES_CONFIG.map(tile => (
                                <Tile
                                    key={tile.id}
                                    row={tile.largeGrid.row}
                                    column={tile.largeGrid.column}
                                    isRounded={tile.isRounded}
                                    imgSrc={tile.images.web}
                                    id={tile.id}
                                    timestamp={timestamp}
                                    setAppState={setAppState}
                                    actionResultBlockVisibility={actionResultBlockVisibility}
                                    setCurrentId={setCurrentId}
                                />
                            )
                            )}
                        </StyledCalendar>
                    )}
                    {mathes.small && (
                        <StyledCalendar rows={GRID_LAYOUT_CONFIG.small.rows} columns={GRID_LAYOUT_CONFIG.small.columns}>
                            {GRID_TILES_CONFIG.map(tile => (
                                <Tile
                                    key={tile.id}
                                    row={tile.smallGrid.row}
                                    column={tile.smallGrid.column}
                                    isRounded={tile.isRounded}
                                    imgSrc={tile.images.mobile}
                                    id={tile.id}
                                    timestamp={timestamp}
                                    setAppState={setAppState}
                                    actionResultBlockVisibility={actionResultBlockVisibility}
                                    setCurrentId={setCurrentId}
                                />
                            )
                            )}
                        </StyledCalendar>
                    )}
                </>
            )}
        </Media>
    )
};

export default Calendar;
