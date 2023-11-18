import { IIntroState, TVisibility } from "../app/app.types";

export interface ITile {
    row: string;
    column: string;
    imgSrc: string;
    isRounded?: boolean;
    id: number | string;
    timestamp: number;
    presentVisibility: TVisibility;
    setIntroState: React.Dispatch<React.SetStateAction<IIntroState>>;
    setCurrentPresent: React.Dispatch<React.SetStateAction<number | null>>;
}