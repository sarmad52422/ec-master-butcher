"use client";
import Divider from "@/components/divider/divider";
import HeroSection from "@/components/hero_section/hero_section";
import ProductGrid from "@/components/product/product_grid";
import React, { Suspense, useEffect, useState } from "react";
import { useAppSelector } from "@/redux/hooks";
import { ProductInterface } from "@/interfaces/product_iterface";
import { CLientServices } from "@/services/user";
import axios from "axios";
import Cookies from "js-cookie";
import { LOCAL_URL } from "@/constants/constants";

const Home = () => {
  const [products, setProducts] = useState<ProductInterface[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const authState = useAppSelector((state) => state.BasicActionsReducer);
  console.log(authState);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await axios.get(LOCAL_URL);
        const productData = await CLientServices.getAllProducts();
        setProducts(productData.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    if (loading) {
      fetchData();
    }
  }, [loading]);

  return (
    <div className="mt-36">
      <HeroSection />
      <Divider content="Tranding Products" />
      {loading ? null : <ProductGrid products={products} isLoading={loading} />}
    </div>
  );
};

export default Home;
