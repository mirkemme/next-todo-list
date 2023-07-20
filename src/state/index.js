import { createContext } from "react";
import { mock } from "../mock/todos";

export const MainContext = createContext({});

export const initialState = {
  todos: mock,
  username: "",
};
