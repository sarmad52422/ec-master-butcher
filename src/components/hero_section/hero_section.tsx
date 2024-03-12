"use client";
import styles from "./hero_section.module.css";
// import { useAppSelector } from "@/store/stateHooks";
//  Import your styles
const HeroSection = () => {
  // const authState = useAppSelector((state) => state);
  // console.log(authState);
  return (
    <div className="bg-primary">
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Welcome to Your Ecommerce Store</h1>
          <p>Discover amazing products and shop with confidence.</p>
          <button className="btn bg-white">View All Products</button>
        </div>
      </div>
    </div>
  );
};
export default HeroSection;
