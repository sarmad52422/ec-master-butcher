"use client";
import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the carousel CSS
import styles from "./hero_section.module.css"; // Import your custom styles
import Image from "next/image";

const HeroSection: React.FC = () => {
  const images: string[] = [
    "/images/home1.png",
    "/images/home2.png",
    "/images/home3.png",
    "/images/home4.png",
    "/images/home5.png",
  ];

  return (
    <div>
      <Carousel
        showArrows={true}
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
      >
        {images.map((src, index) => (
          <div key={index}>
            <Image src={src} width={1000} height={500} alt={`Slide ${index + 1}`} className="rounded-lg" />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default HeroSection;
