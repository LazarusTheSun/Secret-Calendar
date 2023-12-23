import { TBlockType, TVisibility } from "../../types/types";

export interface IActionBlock {
    height: number;
    visibility: TVisibility;
    type: TBlockType;
    isRendered: boolean;
}