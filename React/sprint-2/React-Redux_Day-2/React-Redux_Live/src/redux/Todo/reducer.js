import { ADD_TODOS, ADD_TODOS_ERROR, ADD_TODOS_LOADING } from "./actionType";

const initState = {
    todos: [],
    loading: false,
    error: false
}
const todoReducer = (store = initState, { type, payload }) => {

    switch (type) {
        case ADD_TODOS:
            return { ...store, todos: payload, loading: false }
        case ADD_TODOS_LOADING:
            return {
                ...store,
                loading: true
            }
        case ADD_TODOS_ERROR:
            return { ...store, error: true }
        default:
            return store
    }
}
export { todoReducer }