import { IAppState, TVisibility } from "../app/app.types";

export interface ITile {
    row: string;
    column: string;
    imgSrc: string;
    isRounded?: boolean;
    id: number | string;
    actionResultBlockVisibility: TVisibility;
    setAppState: React.Dispatch<React.SetStateAction<IAppState>>;
    defaultState: string;
    setCurrentId: React.Dispatch<React.SetStateAction<number | null>>;
    date: Date;
}