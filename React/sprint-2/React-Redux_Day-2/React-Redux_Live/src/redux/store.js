import { createStore, combineReducers } from "redux"
import { counterReducer } from "./counter/reducer"
import { todoReducer } from "./Todo/reducer"

const rootReducers = combineReducers({
    counterReducer,
    todoReducer
})
export const store = createStore(rootReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
console.log("Store Initial", store.getState())