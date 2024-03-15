// components/ProductGrid.tsx
import Link from "next/link";
import React from "react";
import { Product } from "./interfaces";
import { useAppDispatch } from "@/redux/hooks";
import {
  CartActionReducer,
  onItemAdded,
} from "@/redux/features/global_actions";

interface ProductGridProps {
  products: Product[];
}

const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
  const dispatcher = useAppDispatch();
  // dispatcher(onItemAdded({} as Product));
  const addProductToCart = (product: Product) => {
    // dispatcher(CartActionReducer.onItemAdded(product));
  };
  return (
    <div className="mt-6">
      <div className="flex justify-between items-center flex-wrap">
        {products.map((product) => (
          <Link key={product.id} href="/item_details">
            <div className="card md:w-72 sm:w-64 bg-base-100 shadow-xl m-10">
              <figure>
                <img
                  src={product.image}
                  alt="Meat"
                  className="md:h-56 md:w-72 sm:h-40 sm:w-64"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  {product.name}!
                  <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>

                <div className="card-actions justify-between items-center mt-2 sm:w-52 md:w-60">
                  <p className="font-bold"> Price: {product.price}</p>

                  <div className="btn btn-outline rounded-md btn-sm">
                    Add to cart
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
