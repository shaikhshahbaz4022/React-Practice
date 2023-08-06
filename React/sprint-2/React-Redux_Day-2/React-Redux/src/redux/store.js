import { reudcer } from "./reducer";
import { createStore } from "redux";
export const store = createStore(reudcer);
