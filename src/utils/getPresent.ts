import { PRESENTS } from "../constants/presents";

type ReturnType = {
    id: number;
    title: string;
    promocode: string;
    imgSrc: string;
}

export const getPresent = (id: number | null): ReturnType | null => {
    if (!id) {
        return null;
    }

    return PRESENTS.find(present => present.id === id) || null;
}