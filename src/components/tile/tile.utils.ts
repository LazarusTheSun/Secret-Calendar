export const getTimestamp = (tileId: number | string) => {
    // #TODO заменить месяц на 11
    const tileDate = tileId !== "placeholder" && new Date(2023, 11, tileId as number);
    
    return tileDate && tileDate.getTime();
};
