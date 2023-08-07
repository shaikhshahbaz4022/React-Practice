import { ADD_TODOS } from "./actionType";

const initState = {
    todos: []
}
const todoReducer = (store = initState, { type, payload }) => {

    switch (type) {
        case ADD_TODOS:
            return { ...store, todos: payload }
        default:
            return store
    }
}
export { todoReducer }