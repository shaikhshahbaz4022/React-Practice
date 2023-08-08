import { ADD_TODOS, ADD_TODOS_ERROR, ADD_TODOS_LOADING } from "./actionType"


export const addtodos = (todo) => {
    return {
        type: ADD_TODOS,
        payload: todo
    }
}
export const addTodosLoading = () => {
    return { type: ADD_TODOS_LOADING }
}
export const addTodosError = () => {
    return { type: ADD_TODOS_ERROR }
} 