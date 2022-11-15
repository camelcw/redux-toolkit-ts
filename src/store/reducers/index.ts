
import { combineReducers } from 'redux';
import todoReducer from "./todoSlice";
import userReducer from "./userSlice";


export const rootReducer = combineReducers({
  users: userReducer,
  todos: todoReducer
});

export type RootState = ReturnType<typeof rootReducer>;
