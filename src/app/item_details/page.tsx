"use client";
import React, { useEffect, useState } from "react";
import { ProductInterface } from "@/interfaces/product_iterface";
import { CLientServices } from "@/services/user";
import { useSearchParams } from "next/navigation";

const ItemDetails: React.FC = () => {
  const params = useSearchParams();
  const id = params.get("id");
  const [product, setProduct] = useState<ProductInterface | null>(null);
  const [quantity, setQuantity] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await CLientServices.getProductById(id as string);
        setProduct(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    if (id) {
      fetchProduct();
    }
  }, [id]);

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  const handleTagChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedTag(event.target.value);
  };

  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index);
  };

  const handleAddToCart = () => {
    // Handle adding the product to the cart
    console.log("Product added to cart:", product);
  };

  return (
    <div className="bg-gray-100 dark:bg-base-200 py-8 mt-64">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row -mx-4">
          <div className="md:flex-1 px-4">
            {isLoading ? (
              <div className="flex flex-col gap-4 w-52">
                <div className="skeleton h-[460px] w-full"></div>
                <div className="flex gap-4">
                  <div className="skeleton h-8 w-1/2"></div>
                  <div className="skeleton h-8 w-1/2"></div>
                </div>
                <div className="skeleton h-8 w-full"></div>
                <div className="skeleton h-8 w-full"></div>
                <div className="skeleton h-8 w-full"></div>
                <div className="skeleton h-8 w-full"></div>
              </div>
            ) : (
              <>
                <div className="h-[460px] rounded-lg mb-4">
                  <img
                    className="w-full h-full object-cover"
                    src={product?.images?.[selectedImageIndex] || ""}
                    alt="Product Image"
                  />
                </div>
                <div className="flex -mx-2 mb-4">
                  {product?.images?.map((image, index) => (
                    <div
                      key={index}
                      className="w-1/6 cursor-pointer"
                      onClick={() => handleImageClick(index)}
                    >
                      <img
                        src={image}
                        alt={`Thumbnail ${index}`}
                        className={`w-full h-16 object-cover border ${
                          selectedImageIndex === index ? "border-blue-500" : ""
                        }`}
                      />
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
          <div className="md:flex-1 px-4">
            {!isLoading && (
              <>
                <h2 className="text-2xl font-bold text-black  mb-2">
                  {product?.name}
                </h2>
                <p className="text-black text-sm mb-4">written by John Doe</p>
                <div className="flex mb-4">
                  <div className="mr-4">
                    <span className="font-bold text-black">Price:</span>
                    <span className="text-black">{product?.price} USD</span>
                  </div>
                  <div>
                    <span className="font-bold text-black ">Availability:</span>
                    <span className="text-black ">In Stock</span>
                  </div>
                </div>

                <div className="mb-4">
                  <span className="font-bold text-black ">Tags:</span>
                  <div>
                    <select
                      value={selectedTag || ""}
                      onChange={handleTagChange}
                      className="px-4 py-2 border dark:border-gray-700 outline-none"
                    >
                      <option value="" disabled>
                        Select a tag
                      </option>
                      {product?.tags.map((tag) => (
                        <option key={tag} value={tag}>
                          {tag}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="mb-4">
                  <span className="font-bold text-black ">Quantity:</span>
                  <div className="flex items-center mt-2">
                    <button
                      onClick={() => handleQuantityChange(quantity - 1)}
                      className="px-4 py-2 border dark:border-gray-700 rounded-l"
                    >
                      -
                    </button>
                    <input
                      type="text"
                      className="px-4 py-2 border-t border-b dark:border-gray-700 outline-none text-center"
                      value={quantity}
                      readOnly
                    />
                    <button
                      onClick={() => handleQuantityChange(quantity + 1)}
                      className="px-4 py-2 border dark:border-gray-700 rounded-r"
                    >
                      +
                    </button>
                  </div>
                </div>
                <div>
                  <span className="font-bold text-black ">
                    Product Description:
                  </span>
                  <p className="text-black  text-sm mt-2">
                    {product?.description}
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
        <div className="flex -mx-2 mb-4 mt-8">
          <button
            className="btn  btn-primary py-2 px-4 w-full rounded-full font-bold"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
