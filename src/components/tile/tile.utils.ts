export const getDefaultState = (month: number, day: number, id: number | string): string => {
    if (typeof id !== "number") {
        return "placeholder";
    }

    if (month !== 11 || day > id) {
        return "past";
    }

    if (day === id) {
        return "active";
    }

    return "default";
}