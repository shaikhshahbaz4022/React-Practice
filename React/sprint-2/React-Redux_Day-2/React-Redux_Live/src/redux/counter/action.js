import { ADD_COUNT, SUB_COUNT } from "./actionType"

export const addCounter = (payload) => {
    return {
        type: ADD_COUNT,
        payload
    }
}
export const subCounter = (payload) => {
    return {
        type: SUB_COUNT,
        payload
    }
}
