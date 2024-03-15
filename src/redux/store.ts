import { configureStore } from "@reduxjs/toolkit";
import {NavActionReducer,BasicActionsReducer,CartActionReducer} from "./features/global_actions";
export const store = configureStore({
  reducer: {
    NavActionReducer,
    BasicActionsReducer,
    CartActionReducer,
    
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;