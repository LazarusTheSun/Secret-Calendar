import { CHECK_DATE } from "../../constants/common";

export const getTimestamp = (tileId: number | string) => {
    const tileDate = tileId !== "placeholder" && new Date(CHECK_DATE.year, CHECK_DATE.month, tileId as number);
    
    return tileDate && tileDate.getTime();
};
