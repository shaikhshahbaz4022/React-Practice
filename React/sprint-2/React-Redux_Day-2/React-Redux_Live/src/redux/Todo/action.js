import axios from "axios"
import { ADD_TODOS, ADD_TODOS_ERROR, ADD_TODOS_LOADING } from "./actionType"


export const addtodos = (todo) => {
    return {
        type: ADD_TODOS,
        payload: todo
    }
}
export const addTodosLoading = () => {
    return { type: ADD_TODOS_LOADING }
}
export const addTodosError = () => {
    return { type: ADD_TODOS_ERROR }
}

export const getAllTodos = () => (dispatch) => {
    dispatch(addTodosLoading());
    axios
        .get(`http://localhost:3004/todos`)
        .then(({ data }) => {
            console.log(data);
            dispatch(addtodos(data)); // call dispatch when we get all the data
        })
        .catch((e) => dispatch(addTodosError()));
}