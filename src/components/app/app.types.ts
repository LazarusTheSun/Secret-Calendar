export type TVisibility = "idle" | "visible" | "hidden";

export interface IIntroState {
    presentVisibility: TVisibility,
    descriptionVisiblity: TVisibility,
}