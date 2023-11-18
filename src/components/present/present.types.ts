import { IIntroState, TVisibility } from "../app/app.types";

export interface IPresent {
    title: JSX.Element;
    promocode: string;
    imageSrc: string;
    setIntroState: React.Dispatch<React.SetStateAction<IIntroState>>
    setCurrentPresent: React.Dispatch<React.SetStateAction<number | null>>;
    presentVisibility: TVisibility;
}