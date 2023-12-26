import { CHECK_DATE } from "../../constants/common";

export const getTimestamp = (tileId: number | string) => {
    const tileDate = tileId !== "placeholder" && new Date(CHECK_DATE.promoStage1.year, CHECK_DATE.promoStage1.month, tileId as number);
    
    return tileDate && tileDate.getTime();
};
