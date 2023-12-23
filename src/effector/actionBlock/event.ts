import { createEvent } from "effector";
import { IActionBlock } from "./types";

export const updateHeight = createEvent<Pick<IActionBlock, 'height'>>();

export const updateActionBlock = createEvent<Pick<IActionBlock, 'isRendered' | 'type' | 'visibility'>>();