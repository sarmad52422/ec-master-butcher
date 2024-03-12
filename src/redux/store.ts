import { configureStore } from "@reduxjs/toolkit";
import {NavActionReducer,BasicActionsReducer} from "./features/global_actions";
export const store = configureStore({
  reducer: {
    NavActionReducer,
    BasicActionsReducer
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;