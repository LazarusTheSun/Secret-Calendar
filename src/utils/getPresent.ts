import { PRESENTS } from "../constants/present";

type ReturnType = {
    title: JSX.Element;
    promocode: string;
    imgSrc: string;
}

export const getPresent = (id: number | null): ReturnType | null => {
    if (!id) {
        return null;
    }

    return PRESENTS.find(present => present.id === id) || null;
}