// components/ProductGrid.tsx
"use client";
import React from "react";
import { Product } from "./interfaces";

interface ProductGridProps {
  products: Product[];
}

const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
  return (
    <div className="mt-6">
      <div className=" flex justify-between items-center flex-wrap ">
        {products.map((product) => (
          <div
            key={product.id}
            className=" card md:w-72 sm:w-64 bg-base-100 shadow-xl m-10"
          >
            <figure>
              <img
                src={product.image}
                alt="Meat"
                className="md:h-56 md:w-72 sm:h-40 sm:w-64"
              />
            </figure>
            <div className="card-body ">
              <h2 className="card-title">
                {product.name}!<div className="badge badge-secondary">NEW</div>
              </h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>

              <div className="card-actions justify-between items-center mt-2 sm:w-52 md:w-60">
                <p className="font-bold "> Price: {product.price}</p>

                <div className="btn btn-outline rounded-md btn-sm">
                  Add to cart
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
