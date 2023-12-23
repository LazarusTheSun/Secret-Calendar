export interface ITile {
    row: string;
    column: string;
    imgSrc: string;
    isRounded?: boolean;
    id: number | string;
    setCurrentId: React.Dispatch<React.SetStateAction<number | null>>;
    date: Date;
}