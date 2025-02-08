"use client";

import Drawer from "../drawer/drawer";
import SearchBar from "./components/search_bar";
import CustomMenu from "./components/custom_menu";
import TopNavbar from "./components/top_navbar";
import ViewCart from "./components/view_cart";
import { useEffect, useState } from "react";
import icon from "../../../public/images/main_icon.png";
import Image from "next/image";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [scrollingDown, setScrollingDown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setScrollingDown(currentScrollPos > prevScrollPos);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  const navbarHeight = 100;

  const navbarStyle: React.CSSProperties = {
    top: scrollingDown ? `-${navbarHeight}px` : "0", // If scrolling down, navbar hides, else it shows
    position: "fixed",
    zIndex: 10,
    transition: "top 0.3s ease-in-out",
  };

  const contentStyle: React.CSSProperties = {
    paddingTop: scrollingDown ? `${navbarHeight}px` : "0", // Adjust content to avoid being hidden under the navbar
  };

  return (
    <div>
      <div className="w-full" style={navbarStyle}>
        <TopNavbar />
        <div className="navbar bg-base-100 justify-between ">
          <div className="flex lg:hidden">
            <div>
              <Drawer />
            </div>
          </div>
          <div>
            <Link
              className="btn btn-ghost text-xl lg:text-2xl ml-2 lg:ml-0"
              href="/"
            >
              <Image src={icon} alt="logo" width={250} height={50} />
            </Link>
          </div>
          <div className="hidden lg:flex">
            <SearchBar />
          </div>

          <div className="flex items-center">
            <ViewCart />
          </div>
        </div>

        <div className="navbar fixed bg-base-300 items-center justify-center z-10">
          <div className="w-full">
            <div className=" hidden lg:flex">
              <CustomMenu />
            </div>
            <div className="flex-1 lg:hidden">
              <SearchBar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
