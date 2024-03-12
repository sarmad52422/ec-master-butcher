// import { OrderComponent } from "@/app/admin/components/OrdersComponent/order_component";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { JsxElement } from "typescript";
export const OrderPageName:string = "OrderPage";
export const InventoryPageName:string = "InventoryPage";

type GloablActions = {
  isNavbarHidden: boolean;
};
const initialState: GloablActions = {
  isNavbarHidden: false,
};
type AdminActionType = {
  orderSearchValue: string;
  CurrentCompoent:string
};
const initialAdminState: AdminActionType = {
  orderSearchValue: "",
  CurrentCompoent:OrderPageName
};

export const NavActions = createSlice({
  name: "nav_actions",
  initialState,
  reducers: {
    reset: () => initialState,
    hideNavbar: (state, action: PayloadAction<boolean>) => {
      state.isNavbarHidden = action.payload;
    },
  },
});
export const BasicAction = createSlice({
  name: "basic_actions",
  initialState: initialAdminState,
  reducers: {
    reset: () => initialAdminState,
    onOrderValueSearched: (state, action: PayloadAction<string>) => {
      state.orderSearchValue = action.payload;
    },
    onComponentChanged: (state,action:PayloadAction<string>)=>{
        state.CurrentCompoent = action.payload;
    }
  },
});
export const { hideNavbar } = NavActions.actions;
export const { onOrderValueSearched,onComponentChanged } = BasicAction.actions;
export const BasicActionsReducer = BasicAction.reducer;
export const NavActionReducer = NavActions.reducer;