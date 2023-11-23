import { IAppState, TVisibility } from "../app/app.types";

export interface ICalendar {
    setAppState: React.Dispatch<React.SetStateAction<IAppState>>
    actionResultBlockVisibility: TVisibility;
    setCurrentId: React.Dispatch<React.SetStateAction<number | null>>;
    date: Date;
}