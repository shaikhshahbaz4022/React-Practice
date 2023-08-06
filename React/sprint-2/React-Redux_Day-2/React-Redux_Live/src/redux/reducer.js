import { ADD_COUNT } from "./actionType";
const initState = {
    counter: 0
}
const reducer = (state = initState, { type, payload }) => {
    switch (type) {
        case ADD_COUNT:
            return { ...state, counter: state.counter + payload }
        default:
            return state
    }
}
export { reducer }