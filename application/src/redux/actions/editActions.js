import { EDIT } from "./types";

export const editOrder = (id) => {
    return {
        type: EDIT,
        payload: {
            id
        }
    }
}