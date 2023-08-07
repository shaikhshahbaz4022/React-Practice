import { ADD_COUNT, SUB_COUNT } from "./actionType";
const initState = {
    counter: 0,

}
const counterReducer = (store = initState, { type, payload }) => {

    switch (type) {
        case ADD_COUNT:
            return { ...store, counter: store.counter + payload }
        case SUB_COUNT:
            return { ...store, counter: store.counter - payload }

        default:
            return store
    }
}
export { counterReducer }