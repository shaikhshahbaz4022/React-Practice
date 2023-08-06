import { ADD_COUNT, ADD_TODOS, SUB_COUNT } from "./actionType";
// const initState = {
//     counter: 0
// }
const reducer = (store, { type, payload }) => {
    console.log(store);
    switch (type) {
        case ADD_COUNT:
            return { ...store, counter: store.counter + payload }
        case SUB_COUNT:
            return { ...store, counter: store.counter - payload }
        case ADD_TODOS:
            return { ...store, todos: [...store.todos, payload] }
        default:
            return store
    }
}
export { reducer }