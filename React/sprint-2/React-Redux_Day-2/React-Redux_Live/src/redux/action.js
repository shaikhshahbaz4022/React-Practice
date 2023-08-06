import { ADD_COUNT } from "./actionType"

export const addCounter = (payload) => {
    return {
        type: ADD_COUNT,
        payload
    }
}