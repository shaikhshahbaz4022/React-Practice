import { createStore, combineReducers, applyMiddleware } from "redux"
import { counterReducer } from "./counter/reducer"
import { todoReducer } from "./Todo/reducer"

const rootReducers = combineReducers({
    counterReducer,
    todoReducer
})
// we can build middleware , which is enhancer
// const loggerMiddleware = (store) => (next) => (action) => {
//     console.time("t")
//     console.log("Store", store.getState())
//     console.log("action", action)
//     console.timeEnd("t")
//     next(action)

// }

export const store = createStore(
    rootReducers,
    // applyMiddleware(loggerMiddleware)
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
// console.log("Store Initial", store.getState())