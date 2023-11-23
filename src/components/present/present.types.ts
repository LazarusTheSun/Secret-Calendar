import { IAppState } from "../app/app.types";

export interface IPresent {
    title: string;
    promocode: string;
    imageSrc: string;
    setAppState: React.Dispatch<React.SetStateAction<IAppState>>
    setCurrentId: React.Dispatch<React.SetStateAction<number | null>>;
    setActionResultBLockHeight: React.Dispatch<React.SetStateAction<number>>;
}