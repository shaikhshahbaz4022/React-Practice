import { ADD_TODOS } from "./actionType";

export const addTodos = (payload) => {
  return {
    type: ADD_TODOS,
    payload
  };
};
