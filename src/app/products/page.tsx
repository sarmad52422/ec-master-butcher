"use client";
import Divider from "@/components/divider/divider";
import HeroSection from "@/components/hero_section/hero_section";
import ProductGrid from "@/components/product/product_grid";
import { ProductInterface } from "@/interfaces/product_iterface";
import { useParams, usePathname, useSearchParams } from "next/navigation";
import React from "react";

interface Product {
  id: number;
  name: string;
  images: string[];
  description?: string;
  price: number;
}
const Product: React.FC = () => {
  const params = useSearchParams();
  const category = params.get("category");

  console.log(params.get("category"));
  const dummyProducts: ProductInterface[] = [
    {
      id: 1,
      name: "Product 1",
      images: [
        "https://images.pexels.com/photos/1314041/pexels-photo-1314041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      ],
      description: "This is a dummy product",
      price: 29.99,
      units: 1,
      category: "category",
      tags: ["tag1", "tag2"],
    },
    {
      id: 2,
      name: "Product 2",
      images: [
        "https://images.pexels.com/photos/65175/pexels-photo-65175.jpeg",
      ],
      price: 39.99,
      description: "This is a dummy product",
      units: 1,
      category: "category",
      tags: ["tag1", "tag2"],
    },
    {
      id: 3,
      name: "Product 2",
      images: [
        "https://images.pexels.com/photos/618775/pexels-photo-618775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      ],
      price: 39.99,
      description: "This is a dummy product",
      units: 1,
      category: "category",
      tags: ["tag1", "tag2"],
    },
    {
      id: 4,
      name: "Product 2",
      images: [
        "https://images.pexels.com/photos/3688/food-dinner-lunch-chicken.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      ],
      price: 39.99,
      description: "This is a dummy product",
      units: 1,
      category: "category",
      tags: ["tag1", "tag2"],
    },
    {
      id: 5,
      name: "Product 2",
      images: [
        "https://images.pexels.com/photos/616354/pexels-photo-616354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      ],
      price: 39.99,
      description: "This is a dummy product",
      units: 1,
      category: "category",
      tags: ["tag1", "tag2"],
    },
    {
      id: 6,
      name: "Tuna Fish",
      images: [
        "https://images.pexels.com/photos/14062112/pexels-photo-14062112.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      ],
      description: "This is a dummy product",
      price: 39.99,
      units: 1,
      category: "category",
      tags: ["tag1", "tag2"],
    },
    {
      id: 7,
      name: "Fish Stakes",
      images: [
        "https://images.pexels.com/photos/7451973/pexels-photo-7451973.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      ],
      price: 41.99,
      description: "This is a dummy product",
      units: 1,
      category: "category",
      tags: ["tag1", "tag2"],
    },
    {
      id: 8,
      name: "Fish Fillets",
      images: [
        "https://images.pexels.com/photos/14062111/pexels-photo-14062111.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      ],
      price: 39.99,
      description: "This is a dummy product",
      units: 1,
      category: "category",
      tags: ["tag1", "tag2"],
    },
    {
      id: 9,
      name: "Meat Mince",
      images: [
        "https://pratapchicken.com/wp-content/uploads/2020/10/49420775-C0CC-43FD-9353-EE6EB96B2581.jpeg",
      ],
      price: 39.99,
      description: "This is a dummy product",
      units: 1,
      category: "category",
      tags: ["tag1", "tag2"],
    },

    // Add more dummy products as needed
  ];

  return (
    <div className="mt-36">
      {/* <HeroSection /> */}
      <Divider content={category} />

      <ProductGrid products={dummyProducts} isLoading />
    </div>
  );
};

export default Product;
