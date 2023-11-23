export type TVisibility = "idle" | "visible" | "hidden";

export interface IAppState {
    isActionResultBlockRendered?: boolean;
    actionResultBlockType?: "victor" | "present" | "none";
    actionResultBlockVisibility: TVisibility;
}