import { configureStore } from "@reduxjs/toolkit";
import {
  NavActionReducer,
  BasicActionsReducer,
  CartActionReducer,
} from "./features/global_actions";
import { AuthActionReducer } from "./features/auth_slice";
export const store = configureStore({
  reducer: {
    NavActionReducer,
    BasicActionsReducer,
    CartActionReducer,
    auth: AuthActionReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
