"use client";
import { Provider, useDispatch } from "react-redux";
import { store } from "./store";
import { useEffect } from "react";
import { checkAuth } from "./features/auth_slice";
import { initializeCart } from "./features/global_actions";
import { useAppSelector } from "./hooks";

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);

  return <>{children}</>;
};

const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const dispatch = useDispatch();
  const cart = useAppSelector((state) => state.CartActionReducer.itemIds);

  // Initialize cart data from local storage when the component mounts
  useEffect(() => {
    const savedCartItems = localStorage.getItem("cartItems");
    if (savedCartItems) {
      dispatch(initializeCart(JSON.parse(savedCartItems)));
    }
  }, [dispatch]);

  // Update local storage whenever the cart data changes
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cart));
  }, [cart]);

  return <>{children}</>;
};

export const Providers: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <Provider store={store}>
      <CartProvider>
        <AuthProvider>{children}</AuthProvider>
      </CartProvider>
    </Provider>
  );
};
