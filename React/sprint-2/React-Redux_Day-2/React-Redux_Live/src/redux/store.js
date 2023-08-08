import { createStore, combineReducers, applyMiddleware, compose } from "redux"
import { counterReducer } from "./counter/reducer"
import { todoReducer } from "./Todo/reducer"
import thunk from "redux-thunk"

const rootReducers = combineReducers({
    counterReducer,
    todoReducer
})
// we can build middleware , which is enhancer
// const loggerMiddleware = (store) => (next) => (action) => {
//     if (typeof action == "function") {
//         return action(store.dispatch)
//     }
//     next(action)

// }

export const store = createStore(
    rootReducers,
    compose(applyMiddleware(thunk), // due to compose we can use two enhancers
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
)
// console.log("Store Initial", store.getState())