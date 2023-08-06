import { ADD_COUNT, ADD_TODOS, SUB_COUNT } from "./actionType"

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
export const addtodos = (todo) => {
    return {
        type: ADD_TODOS,
        payload: todo
    }
}