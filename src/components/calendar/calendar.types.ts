import { IIntroState, TVisibility } from "../app/app.types";

export interface ICalendar {
    setIntroState: React.Dispatch<React.SetStateAction<IIntroState>>
    presentVisibility: TVisibility;
    setCurrentPresent: React.Dispatch<React.SetStateAction<number | null>>;
}