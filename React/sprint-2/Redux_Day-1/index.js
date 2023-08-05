import { createStore } from "redux";

const reducer = (store, { type, payload }) => {
    switch (type) {
        case "ADD_COUNT":
            return { ...store, count: store.count + payload }
        case "DEC_COUNT":
            return { ...store, count: store.count - payload }
        case "ADD_TODO":
            return { ...store, todo: [...store.todo, payload] }
        default:
            return store
    }
}

// class Store {
//     constructor(reducer, initialState) {
//         this.reducer = reducer;
//         this.state = initialState
//     }
//     getState() {
//         return this.state
//     }
//     dispatch(action) {
//         this.state = this.reducer(this.state, action)
//     }
// }

const initState = { count: 0, todo: [] }
const store = createStore(reducer, initState)
store.dispatch({ type: "ADD_COUNT", payload: 5 })
// console.log(store instanceof Store);
console.log(store.getState());
store.dispatch({ type: "ADD_TODO", payload: { title: "Learn Redux", status: false } })
console.log(store.getState())
