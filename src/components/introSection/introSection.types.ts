import { IAppState } from "../app/app.types";

export interface IIntroSection extends IAppState {
    date: Date;
    setAppState: React.Dispatch<React.SetStateAction<IAppState>>;
    setCurrentId: React.Dispatch<React.SetStateAction<number | null>>;
}