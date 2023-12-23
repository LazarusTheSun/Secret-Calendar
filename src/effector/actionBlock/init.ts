import { actionBlock } from './state';
import { updateActionBlock, updateHeight } from "./event";

actionBlock.on(updateHeight, (_, payload) => ({
    ..._,
    ...payload,
}))

actionBlock.on(updateActionBlock, (_, payload) => ({
    ..._,
    ...payload,
}))