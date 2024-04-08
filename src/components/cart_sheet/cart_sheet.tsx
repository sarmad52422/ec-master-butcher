"use client";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  CartActionReducer,
  onItemAdded,
} from "@/redux/features/global_actions";
import { CLientServices } from "@/services/user";
import { ProductInterface } from "@/interfaces/product_iterface";
import { count } from "console";
interface CartItem extends Omit<ProductInterface, "units" & "tags"> {
  quantity: number;
}

function countDuplicates(
  cartItemsIds: string[]
): { id: string; count: number }[] {
  // Create an empty object to store counts
  const counts: { [id: string]: number } = {};

  // Iterate through the array
  cartItemsIds.forEach((id) => {
    // If the id already exists in counts, increment its count; otherwise, set count to 1
    counts[id] = counts[id] ? counts[id] + 1 : 1;
  });

  // Convert counts object into an array of objects with the format {id: count}
  const result = Object.keys(counts).map((id) => ({ id, count: counts[id] }));

  return result;
}
const CartSheet: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
  isOpen,
  onClose,
}) => {
  const cart = useAppSelector((state) => state.CartActionReducer.itemIds);
  const totalItems = countDuplicates(cart);
  const dispatcher = useAppDispatch();
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const cartItemIds = countDuplicates(cart);

    const fetchProducts = async (cart: { id: string; count: number }[]) => {
      try {
        console.log(cart.map((cart) => cart.id));
        const products = await Promise.all(
          cart.map(async (cart) => {
            const p = await CLientServices.getProductById(cart.id);
            return {
              ...p.data,
              quantity: cart.count,
            };
          })
        );
        console.log(products);
        // setProducts(p);
        setCartItems(products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts(cartItemIds);
  }, [cart]);

  const handleClose = () => {
    onClose();
  };

  const handleDeleteItem = (itemId: number) => {
    setCartItems(cartItems.filter((item) => item.id !== itemId));
  };

  const handleQuantityChange = (itemId: number, newQuantity: number) => {
    console.log(newQuantity);

    setCartItems(
      cartItems.map((item) =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
    // dispatcher(updateItemQuantity({ itemId: itemId.toString(), newQuantity }));
  };

  const total = cartItems.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );

  return (
    <div
      className={`fixed inset-0 w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] font-[sans-serif] ${
        isOpen ? "block" : "hidden"
      }`}
    >
      <div className="w-full max-w-xl bg-white shadow-lg relative ml-auto h-screen">
        <div className="overflow-auto p-6 h-[calc(100vh-135px)]">
          <div className="flex items-center gap-4 text-gray-800">
            <h3 className="text-2xl font-bold flex-1">Shopping Cart</h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-3.5 ml-2 cursor-pointer shrink-0 fill-black hover:fill-red-500"
              viewBox="0 0 320.591 320.591"
              onClick={handleClose}
            >
              <path
                d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                data-original="#000000"
              ></path>
              <path
                d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                data-original="#000000"
              ></path>
            </svg>
          </div>
          <div className="divide-y mt-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-start justify-between gap-4 py-8"
              >
                <div className="flex max-sm:flex-col gap-6">
                  <div className="h-40 bg-gray-100 p-4 rounded">
                    {/* Assuming you have the image property in your CartItem interface */}
                    <img
                      src={item.images?.[0]}
                      className="w-full h-full object-contain shrink-0"
                      alt={item.name}
                    />
                  </div>
                  <div>
                    <p className="text-md font-bold text-[#333]">{item.name}</p>
                    {/* <p className="text-gray-400 text-xs mt-1">
                      {item.units} Item(s)
                    </p> */}
                    <h4 className="text-xl font-bold text-[#333] mt-4">
                      ${item.price}
                    </h4>
                    <div className="mt-6">
                      <button
                        type="button"
                        className="flex items-center flex-wrap gap-2 text-lg text-[#333]"
                      >
                        <span className="flex items-center w-8 h-8 bg-gray-100 p-2 rounded">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-3.5 fill-current"
                            viewBox="0 0 124 124"
                            onClick={() => {
                              if (item.quantity > 1) {
                                handleQuantityChange(
                                  item.id,
                                  item.quantity - 1
                                );
                              } else {
                                alert("You have to select atleast 1 quantity");
                              }
                            }}
                          >
                            <path
                              d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z"
                              data-original="#000000"
                            ></path>
                          </svg>
                        </span>
                        <span className="mx-3">{item.quantity}</span>
                        <span className="flex items-center w-8 h-8 bg-gray-100 p-2 rounded">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-3 fill-current"
                            viewBox="0 0 42 42"
                            onClick={() => {
                              if (item.units > item.quantity) {
                                handleQuantityChange(
                                  item.id,
                                  item.quantity + 1
                                );
                              } else {
                                alert(
                                  "The quantity you want to enter is out of stock"
                                );
                              }
                            }}
                          >
                            <path
                              d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z"
                              data-original="#000000"
                            ></path>
                          </svg>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 fill-red-500 inline cursor-pointer"
                  viewBox="0 0 24 24"
                  onClick={() => handleDeleteItem(item.id)}
                >
                  <path
                    d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z"
                    data-original="#000000"
                  ></path>
                  <path
                    d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z"
                    data-original="#000000"
                  ></path>
                </svg>
              </div>
            ))}
          </div>
        </div>
        <div className="p-6 absolute bottom-0 w-full border-t bg-white">
          <ul className="text-[#333] divide-y">
            <li className="flex flex-wrap gap-4 text-md font-bold">
              Subtotal <span className="ml-auto">${total}</span>
            </li>
          </ul>
          <Link href="/check_out">
            <button
              type="button"
              className="mt-6 text-md px-6 py-2.5 w-full bg-blue-600 hover:bg-blue-700 text-white rounded"
            >
              Check out
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartSheet;
