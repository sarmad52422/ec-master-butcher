import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const OrderPageName: string = "OrderPage";
export const InventoryPageName: string = "InventoryPage";

type GloablActions = {
  isNavbarHidden: boolean;
};
const initialState: GloablActions = {
  isNavbarHidden: false,
};
type AdminActionType = {
  orderSearchValue: string;
  CurrentCompoent: string;
};
const initialAdminState: AdminActionType = {
  orderSearchValue: "",
  CurrentCompoent: OrderPageName,
};
interface CartItems {
  itemIds: string[];
}
const initiCartState: CartItems = {
  itemIds: [],
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
    onComponentChanged: (state, action: PayloadAction<string>) => {
      state.CurrentCompoent = action.payload;
    },
  },
});
export const CartActions = createSlice({
  name: "cart_actions",
  initialState: initiCartState,
  reducers: {
    reset: () => initiCartState,
    onItemAdded: (state, action: PayloadAction<string>) => {
      state.itemIds.push(action.payload);
      localStorage.setItem("cartItems", JSON.stringify(state.itemIds));
    },
    onItemUpdate: (state, action: PayloadAction<any>) => {
      const index = state.itemIds.indexOf(action.payload);
      if (index !== -1) {
        state.itemIds.splice(index, 1);
        localStorage.setItem("cartItems", JSON.stringify(state.itemIds));
      }
    },
    initializeCart: (state, action: PayloadAction<string[]>) => {
      state.itemIds = action.payload;
      localStorage.setItem("cartItems", JSON.stringify(action.payload));
    },
  },
});

export const { hideNavbar } = NavActions.actions;
export const { onOrderValueSearched, onComponentChanged } = BasicAction.actions;
export const { onItemAdded, onItemUpdate, initializeCart } = CartActions.actions;
export const BasicActionsReducer = BasicAction.reducer;
export const NavActionReducer = NavActions.reducer;
export const CartActionReducer = CartActions.reducer;
