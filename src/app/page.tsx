"use client";
import Divider from "@/components/divider/divider";
import HeroSection from "@/components/hero_section/hero_section";
import ProductGrid from "@/components/product/product_grid";
import React, { useEffect, useState } from "react";
import { useAppSelector } from "@/redux/hooks";
import SearchBar from "@/components/navbar/components/search_bar";
import { ProductInterface } from "@/interfaces/product_iterface";
import { CLientServices } from "@/services/user";

// export const dummyProducts: ProductInterface[] = [
//   {
//     id: 1,
//     name: "Product 1",
//     image:
//       "https://images.pexels.com/photos/1314041/pexels-photo-1314041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     price: 29.99,
//   },
//   {
//     id: 2,
//     name: "Product 2",
//     image: "https://images.pexels.com/photos/65175/pexels-photo-65175.jpeg",
//     price: 39.99,
//   },
//   {
//     id: 3,
//     name: "Product 2",
//     image:
//       "https://images.pexels.com/photos/618775/pexels-photo-618775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     price: 39.99,
//   },
//   {
//     id: 4,
//     name: "Product 2",
//     image:
//       "https://images.pexels.com/photos/3688/food-dinner-lunch-chicken.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     price: 39.99,
//   },
//   {
//     id: 5,
//     name: "Product 2",
//     image:
//       "https://images.pexels.com/photos/616354/pexels-photo-616354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     price: 39.99,
//   },
//   {
//     id: 6,
//     name: "Tuna Fish",
//     image:
//       "https://images.pexels.com/photos/14062112/pexels-photo-14062112.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     price: 39.99,
//   },
//   {
//     id: 7,
//     name: "Fish Stakes",
//     image:
//       "https://images.pexels.com/photos/7451973/pexels-photo-7451973.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     price: 41.99,
//   },
//   {
//     id: 8,
//     name: "Fish Fillets",
//     image:
//       "https://images.pexels.com/photos/14062111/pexels-photo-14062111.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     price: 39.99,
//   },
//   {
//     id: 9,
//     name: "Meat Mince",
//     image:
//       "https://pratapchicken.com/wp-content/uploads/2020/10/49420775-C0CC-43FD-9353-EE6EB96B2581.jpeg",
//     price: 39.99,
//   },

//   // Add more dummy products as needed
// ];

const Home: React.FC = () => {
  const [products, setProducts] = useState<ProductInterface[]>([]);
  const authState = useAppSelector((state) => state.BasicActionsReducer);
  console.log(authState);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await CLientServices.getAllProducts();
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="mt-36">
      <HeroSection />
      <Divider content="Tranding Products" />
      <ProductGrid products={products} />
    </div>
  );
};

export default Home;
