import * as daysWeb from './images/calendar.images.web';
import * as daysMobile from './images/calendar.images.mobile';

export const GRID_LAYOUT_CONFIG = {
    large: {
        columns: 8,
        rows: 6,
    },
    small: {
        columns: 4,
        rows: 12,
    },
};

export const GRID_TILES_CONFIG = [
    {
        id: 1,
        largeGrid: {
            column: "1 / 2",
            row: "1 / 3",
        },
        smallGrid: {
            column: "1 / 2",
            row: "1 / 3",
        },
        isRounded: false,
        images: {
            web: daysWeb.day1,
            mobile: daysMobile.day1,
        }
    },
    {
        id: 2,
        largeGrid: {
            column: "2 / 4",
            row: "1 / 2",
        },
        smallGrid: {
            column: "2 / 4",
            row: "1 / 2",
        },
        isRounded: false,
        images: {
            web: daysWeb.day2,
            mobile: daysMobile.day2,
        }
    },
    {
        id: 3,
        largeGrid: {
            column: "2 / 4",
            row: "2 / 3",
        },
        smallGrid: {
            column: "2 / 4",
            row: "2 / 3",
        },
        isRounded: false,
        images: {
            web: daysWeb.day3,
            mobile: daysMobile.day3,
        }
    },
    {
        id: 4,
        largeGrid: {
            column: "4 / 5",
            row: "1 / 2",
        },
        smallGrid: {
            column: "4 / 5",
            row: "1 / 2",
        },
        isRounded: true,
        images: {
            web: daysWeb.day4,
            mobile: daysMobile.day4,
        }
    },
    {
        id: 5,
        largeGrid: {
            column: "4 / 5",
            row: "2 / 3",
        },
        smallGrid: {
            column: "4 / 5",
            row: "2 / 3",
        },
        isRounded: true,
        images: {
            web: daysWeb.day5,
            mobile: daysMobile.day5,
        }
    },
    {
        id: 6,
        largeGrid: {
            column: "5 / 6",
            row: "1 / 3",
        },
        smallGrid: {
            column: "1 / 2",
            row: "3 / 5",
        },
        isRounded: false,
        images: {
            web: daysWeb.day6,
            mobile: daysMobile.day6,
        }
    },
    {
        id: 7,
        largeGrid: {
            column: "6 / 8",
            row: "1 / 2",
        },
        smallGrid: {
            column: "2 / 4",
            row: "3 / 4",
        },
        isRounded: false,
        images: {
            web: daysWeb.day7,
            mobile: daysMobile.day7,
        }
    },
    {
        id: 8,
        largeGrid: {
            column: "7 / 8",
            row: "2 / 3",
        },
        smallGrid: {
            column: "4 / 5",
            row: "3 / 4",
        },
        isRounded: true,
        images: {
            web: daysWeb.day8,
            mobile: daysMobile.day8,
        }
    },
    {
        id: 9,
        largeGrid: {
            column: "8 / 9",
            row: "2 / 3",
        },
        smallGrid: {
            column: "2 / 3",
            row: "4 / 5",
        },
        isRounded: true,
        images: {
            web: daysWeb.day9,
            mobile: daysMobile.day9,
        }
    },
    {
        id: 10,
        largeGrid: {
            column: "6 / 7",
            row: "2 / 3",
        },
        smallGrid: {
            column: "3 / 4",
            row: "4 / 5",
        },
        isRounded: false,
        images: {
            web: daysWeb.day10,
            mobile: daysMobile.day10,
        }
    },
    {
        id: 11,
        largeGrid: {
            column: "8 / 9",
            row: "1 / 2",
        },
        smallGrid: {
            column: "4 / 5",
            row: "4 / 5",
        },
        isRounded: true,
        images: {
            web: daysWeb.day11,
            mobile: daysMobile.day11,
        }
    },
    {
        id: 12,
        largeGrid: {
            column: "1 / 2",
            row: "3 / 5",
        },
        smallGrid: {
            column: "1 / 2",
            row: "5 / 7",
        },
        isRounded: false,
        images: {
            web: daysWeb.day12,
            mobile: daysMobile.day12,
        }
    },
    {
        id: 13,
        largeGrid: {
            column: "2 / 3",
            row: "3 / 4",
        },
        smallGrid: {
            column: "2 / 3",
            row: "5 / 6",
        },
        isRounded: true,
        images: {
            web: daysWeb.day13,
            mobile: daysMobile.day13,
        }
    },
    {
        id: 14,
        largeGrid: {
            column: "3 / 4",
            row: "3 / 4",
        },
        smallGrid: {
            column: "3 / 4",
            row: "5 / 6",
        },
        isRounded: false,
        images: {
            web: daysWeb.day14,
            mobile: daysMobile.day14,
        }
    },
    {
        id: 15,
        largeGrid: {
            column: "5 / 7",
            row: "3 / 4",
        },
        smallGrid: {
            column: "2 / 4",
            row: "6 / 7",
        },
        isRounded: false,
        images: {
            web: daysWeb.day15,
            mobile: daysMobile.day15,
        }
    },
    {
        id: 16,
        largeGrid: {
            column: "7 / 8",
            row: "3 / 4",
        },
        smallGrid: {
            column: "4 / 5",
            row: "6 / 7",
        },
        isRounded: false,
        images: {
            web: daysWeb.day16,
            mobile: daysMobile.day16,
        }
    },
    {
        id: 17,
        largeGrid: {
            column: "8 / 9",
            row: "3 / 5",
        },
        smallGrid: {
            column: "1 / 2",
            row: "7 / 9",
        },
        isRounded: false,
        images: {
            web: daysWeb.day17,
            mobile: daysMobile.day17,
        }
    },
    {
        id: 18,
        largeGrid: {
            column: "2 / 4",
            row: "4 / 5",
        },
        smallGrid: {
            column: "2 / 4",
            row: "7 / 8",
        },
        isRounded: false,
        images: {
            web: daysWeb.day18,
            mobile: daysMobile.day18,
        }
    },
    {
        id: 19,
        largeGrid: {
            column: "4 / 5",
            row: "4 / 6",
        },
        smallGrid: {
            column: "4 / 5",
            row: "7 / 9",
        },
        isRounded: false,
        images: {
            web: daysWeb.day19,
            mobile: daysMobile.day19,
        }
    },
    {
        id: 20,
        largeGrid: {
            column: "3 / 4",
            row: "5 / 6",
        },
        smallGrid: {
            column: "2 / 3",
            row: "8 / 9",
        },
        isRounded: true,
        images: {
            web: daysWeb.day20,
            mobile: daysMobile.day20,
        }
    },
    {
        id: 21,
        largeGrid: {
            column: "5 / 6",
            row: "4 / 5",
        },
        smallGrid: {
            column: "3 / 4",
            row: "8 / 9",
        },
        isRounded: false,
        images: {
            web: daysWeb.day21,
            mobile: daysMobile.day21,
        }
    },
    {
        id: 22,
        largeGrid: {
            column: "5 / 6",
            row: "5 / 6",
        },
        smallGrid: {
            column: "1 / 2",
            row: "9 / 10",
        },
        isRounded: false,
        images: {
            web: daysWeb.day22,
            mobile: daysMobile.day22,
        }
    },
    {
        id: 23,
        largeGrid: {
            column: "6 / 7",
            row: "4 / 6",
        },
        smallGrid: {
            column: "2 / 3",
            row: "9 / 11",
        },
        isRounded: false,
        images: {
            web: daysWeb.day23,
            mobile: daysMobile.day23,
        }
    },
    {
        id: 24,
        largeGrid: {
            column: "7 / 8",
            row: "4 / 5",
        },
        smallGrid: {
            column: "3 / 4",
            row: "9 / 10",
        },
        isRounded: false,
        images: {
            web: daysWeb.day24,
            mobile: daysMobile.day24,
        }
    },
    {
        id: 25,
        largeGrid: {
            column: "7 / 8",
            row: "5 / 6",
        },
        smallGrid: {
            column: "4 / 5",
            row: "9 / 10",
        },
        isRounded: false,
        images: {
            web: daysWeb.day25,
            mobile: daysMobile.day25,
        }
    },
    {
        id: 26,
        largeGrid: {
            column: "8 / 9",
            row: "5 / 6",
        },
        smallGrid: {
            column: "1 / 2",
            row: "10 / 11",
        },
        isRounded: false,
        images: {
            web: daysWeb.day26,
            mobile: daysMobile.day26,
        }
    },
    {
        id: 27,
        largeGrid: {
            column: "3 / 5",
            row: "6 / 7",
        },
        smallGrid: {
            column: "3 / 5",
            row: "10 / 11",
        },
        isRounded: false,
        images: {
            web: daysWeb.day27,
            mobile: daysMobile.day27,
        }
    },
    {
        id: 28,
        largeGrid: {
            column: "5 / 6",
            row: "6 / 7",
        },
        smallGrid: {
            column: "3 / 4",
            row: "11 / 12",
        },
        isRounded: true,
        images: {
            web: daysWeb.day28,
            mobile: daysMobile.day28,
        }
    },
    {
        id: 29,
        largeGrid: {
            column: "6 / 7",
            row: "6 / 7",
        },
        smallGrid: {
            column: "4 / 5",
            row: "11 / 12",
        },
        isRounded: false,
        images: {
            web: daysWeb.day29,
            mobile: daysMobile.day29,
        }
    },
    {
        id: 30,
        largeGrid: {
            column: "7 / 9",
            row: "6 / 7",
        },
        smallGrid: {
            column: "3 / 5",
            row: "12 / 13",
        },
        isRounded: false,
        images: {
            web: daysWeb.day30,
            mobile: daysMobile.day30,
        }
    },
    {
        id: 31,
        largeGrid: {
            column: "1 / 3",
            row: "5 / 7",
        },
        smallGrid: {
            column: "1 / 3",
            row: "11 / 13",
        },
        isRounded: false,
        images: {
            web: daysWeb.day31,
            mobile: daysMobile.day31,
        }
    },
    {
        id: "placeholder",
        largeGrid: {
            column: "4 / 5",
            row: "3 / 4",
        },
        smallGrid: {
            column: "4 / 5",
            row: "5 / 6",
        },
        isRounded: false,
        images: {
            web: daysWeb.day32,
            mobile: daysMobile.day32,
        }
    },
];
