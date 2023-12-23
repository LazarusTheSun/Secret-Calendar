import { createStore } from "effector";
import { IActionBlock } from "./types";

export const actionBlock = createStore<IActionBlock>({
    height: 0,
    visibility: "idle",
    type: "none",
    isRendered: false,
});