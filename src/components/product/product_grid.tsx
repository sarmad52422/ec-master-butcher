import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useAppDispatch } from "@/redux/hooks";
import { onItemAdded } from "@/redux/features/global_actions";
import { ProductInterface } from "@/interfaces/product_iterface";
import Image from "next/image";

interface ProductGridProps {
  products: ProductInterface[];
  isLoading: boolean;
}

const ProductGrid = ({ products, isLoading }: ProductGridProps) => {
  const [isClient, setIsClient] = useState(false); // Track if it's the client-side
  const dispatcher = useAppDispatch();

  useEffect(() => {
    setIsClient(true); // Set isClient to true once the component mounts
  }, []);

  const addProductToCart = (id: string) => {
    dispatcher(onItemAdded(id));
  };

  // Only render after hydration is complete (client-side)
  if (!isClient) return null;

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
                  <div>
                    <div className="skeleton h-4 w-full"></div>
                  </div>
                  <div className="card-actions justify-between items-center mt-2 sm:w-52 md:w-60">
                    <div className="skeleton h-6 w-24"></div>
                    <div className="skeleton h-6 w-24"></div>
                  </div>
                </div>
              </div>
            ))
          : products?.map((product) => (
              <div
                key={product.id}
                className="card md:w-80 sm:w-64 bg-base-100 shadow-xl m-10"
              >
                <Link
                  href={{
                    pathname: "/item_details",
                    query: { id: product.id.toString() },
                  }}
                >
                  <figure>
                    <Image
                      src={product.images?.[0]}
                      alt="Meat"
                      className="md:h-56 md:w-80 sm:h-40 sm:w-64 rounded-lg"
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
