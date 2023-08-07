import { ADD_TODOS } from "./actionType"


export const addtodos = (todo) => {
    return {
        type: ADD_TODOS,
        payload: todo
    }
}