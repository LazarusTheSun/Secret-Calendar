export interface IPresent {
    title: string;
    promocode: string;
    imageSrc: string;
    actionResultBLockHeight: number;
    setActionResultBLockHeight: React.Dispatch<React.SetStateAction<number>>;
}