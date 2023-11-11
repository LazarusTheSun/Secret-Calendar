import React from 'react';
import Media from 'react-media';

import { GRID_LAYOUT_CONFIG, GRID_TILES_CONFIG } from './calendar.constants';
import { StyledCalendar, StyledImage, StyledImageWrapper, StyledTile } from './calendar.styled';

import breakpoints from '../../constants/breakpoints.json';

const Calendar = () => {
    return (
        <Media
            queries={{
                large: `(min-width: ${breakpoints.l + 1}px)`,
                small: `(max-width: ${breakpoints.l}px)`,
            }}
        >
            {mathes => (
                <>
                    {mathes.large && (
                        <StyledCalendar rows={GRID_LAYOUT_CONFIG.large.rows} columns={GRID_LAYOUT_CONFIG.large.columns}>
                            {GRID_TILES_CONFIG.map(tile => (
                                    <StyledTile
                                        key={tile.index}
                                        row={tile.largeGrid.row}
                                        column={tile.largeGrid.column}
                                    >
                                        <StyledImageWrapper isRounded={tile.isRounded}>
                                            <StyledImage src={tile.images.web} alt="" />
                                        </StyledImageWrapper>
                                    </StyledTile>
                                )
                            )}
                        </StyledCalendar>
                    )}
                    {mathes.small && (
                        <StyledCalendar rows={GRID_LAYOUT_CONFIG.small.rows} columns={GRID_LAYOUT_CONFIG.small.columns}>
                            {GRID_TILES_CONFIG.map(tile => (
                                    <StyledTile
                                        key={tile.index}
                                        row={tile.smallGrid.row}
                                        column={tile.smallGrid.column}
                                    >
                                        <StyledImageWrapper isRounded={tile.isRounded}>
                                            <StyledImage src={tile.images.mobile} alt="" />
                                        </StyledImageWrapper>
                                    </StyledTile>
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
