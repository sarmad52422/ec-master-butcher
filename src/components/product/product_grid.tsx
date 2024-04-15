import Link from "next/link";
import React from "react";
import { useAppDispatch } from "@/redux/hooks";
import { onItemAdded } from "@/redux/features/global_actions";
import { ProductInterface } from "@/interfaces/product_iterface";

interface ProductGridProps {
  products: ProductInterface[];
  isLoading: boolean;
}

const ProductGrid = ({ products, isLoading }: ProductGridProps) => {
  const dispatcher = useAppDispatch();
  const addProductToCart = (id: string) => {
    dispatcher(onItemAdded(id));
  };

  return (
    <div className="mt-6">
      <div className="flex justify-between items-center flex-wrap">
        {isLoading
          ? Array.from({ length: 8 }).map((_, index) => (
              <div
                key={index}
                className="card md:w-72 sm:w-64 bg-base-100 shadow-xl m-10"
              >
                <figure>
                  <div className="skeleton h-56 w-72 sm:h-40 sm:w-64"></div>
                </figure>
                <div className="card-body">
                  <h2 className="card-title">
                    <div className="skeleton h-6 w-56"></div>
                  </h2>
                  <p>
                    <div className="skeleton h-4 w-full"></div>
                  </p>
                  <div className="card-actions justify-between items-center mt-2 sm:w-52 md:w-60">
                    <div className="skeleton h-6 w-24"></div>
                    <div className="skeleton h-6 w-24"></div>
                  </div>
                </div>
              </div>
            ))
          : products?.map((product) => (
              <div className="card md:w-72 sm:w-64 bg-base-100 shadow-xl m-10">
                <Link
                  key={product.id}
                  href={{
                    pathname: "/item_details",
                    query: { id: product.id.toString() },
                  }}
                >
                  <figure>
                    <img
                      src={product.images?.[0]}
                      alt="Meat"
                      className="md:h-56 md:w-72 sm:h-40 sm:w-64"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">
                      {product.name}!
                      <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>
                      {product.description && product.description.length > 50
                        ? `${product.description.substring(0, 50)}...`
                        : product.description}
                    </p>
                    <div className="card-actions justify-between items-center mt-2 sm:w-52 md:w-60">
                      <p className="font-bold"> Price: {product.price} £</p>
                      <div
                        className="btn btn-outline rounded-md btn-sm"
                        onClick={(e) => {
                          e.preventDefault();
                          addProductToCart(product.id.toString());
                        }}
                      >
                        Add to cart
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
      </div>
    </div>
  );
};

export default ProductGrid;
