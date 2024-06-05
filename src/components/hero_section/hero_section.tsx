"use client";
import { Carousel } from "react-responsive-carousel";
import styles from "./hero_section.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the carousel CSS
// import { useAppSelector } from "@/store/stateHooks";
//  Import your styles
const HeroSection = () => {
  const images = [
    "/images/home1.jpg",
    "/images/home2.jpg",
    "/images/home3.jpg",
    "/images/home4.jpg",
  ];

  return (
    <div className={styles.hero}>
      <Carousel
        showArrows={true}
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
      >
        {images.map((src, index) => (
          <div className="max-h-screen" key={index}>
            <img src={src} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </Carousel>
      <div className={styles.heroContent}>
        <h1>Welcome to Our Store</h1>
        <p>Discover amazing products and deals</p>
      </div>
    </div>
  );
};

export default HeroSection;
