import { createStore } from "redux"
import { reducer } from "./reducer"

export const store = createStore(reducer, {
    counter: 0,
    theme: "light",
    todos: ["Hello", "Jhon"]
})
