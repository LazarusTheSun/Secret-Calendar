export interface ITile {
    index: number;
    largeGrid: {
        column: string;
        row: string;
    },
    smallGrid: {
        column: string;
        row: string;
    },
    isRounded: boolean;
    images: {
        large: string;
        medium: string;
        small: string;
    }
}