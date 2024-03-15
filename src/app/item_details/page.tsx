"use client";
import React, { useState } from "react";
import { useAppSelector } from "@/redux/hooks";

interface Item {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

interface ItemDetailsProps {
  item: Item;
}

const ItemDetails: React.FC<ItemDetailsProps> = ({ item }) => {
  const [quantity, setQuantity] = useState(1);
  const items = useAppSelector((state) => state.CartActionReducer);

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  return (
    <div className="bg-gray-100 dark:bg-base-200 py-8 mt-64">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row -mx-4">
          <div className="md:flex-1 px-4">
            <div className="h-[460px] rounded-lg mb-4">
              <img
                className="w-full h-full object-cover"
                src="https://via.placeholder.com/500x500"
                alt="Product Image"
              />
            </div>
            <div className="flex -mx-2 mb-4">
              <div className="w-1/2 px-2">
                <button className="w-full btn btn-primary py-2 px-4 rounded-full font-bold  ">
                  Add to Cart
                </button>
              </div>
              <div className="w-1/2 px-2">
                <button className="w-full  btn btn-primary py-2 px-4 rounded-full font-bold">
                  Add to Wishlist
                </button>
              </div>
            </div>
          </div>
          <div className="md:flex-1 px-4">
            <h2 className="text-2xl font-bold text-black  mb-2">Fish</h2>
            <p className="text-black text-sm mb-4">written by John Doe</p>
            <div className="flex mb-4">
              <div className="mr-4">
                <span className="font-bold text-black">Price:</span>
                <span className="text-black">39.99 USD</span>
              </div>
              <div>
                <span className="font-bold text-black ">Availability:</span>
                <span className="text-black ">In Stock</span>
              </div>
            </div>

            <div className="mb-4">
              <span className="font-bold text-black ">Quantity:</span>
              <div className="flex items-center mt-2">
                <button
                  onClick={() => handleQuantityChange(quantity - 1)}
                  className="px-4 py-2 border  dark:border-gray-700 rounded-l"
                >
                  -
                </button>
                <input
                  type="text"
                  className="px-4 py-2 border-t border-b  dark:border-gray-700 outline-none text-center"
                  value={quantity}
                  readOnly
                />
                <button
                  onClick={() => handleQuantityChange(quantity + 1)}
                  className="px-4 py-2 border  dark:border-gray-700 rounded-r"
                >
                  +
                </button>
              </div>
            </div>
            <div>
              <span className="font-bold text-black ">
                Product Description:
              </span>
              <p className="text-black  text-sm mt-2">aa jaao bhai</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
