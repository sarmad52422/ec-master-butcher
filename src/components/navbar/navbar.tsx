"use client";

import Link from "next/link";
import Drawer from "../drawer/drawer";
import SearchBar from "./components/search_bar";
import CustomMenu from "./components/custom_menu";
import TopNavbar from "./components/top_navbar";
import ViewCart from "./components/view_cart";

const Navbar = () => {
  return (
    <div>
      <TopNavbar />
      <div className="navbar bg-base-100 justify-between ">
        <div className="flex lg:hidden">
          <div>
            <Drawer />
          </div>
        </div>
        <div>
          <a
            className="btn btn-ghost text-xl lg:text-2xl ml-2 lg:ml-0"
            href="/"
          >
            Meat Fresh House
          </a>
        </div>
        <div className="hidden lg:flex">
          <SearchBar />
        </div>

        <div className="flex items-center">
          <ViewCart />
        </div>
      </div>
      <div className="navbar bg-base-300 items-center justify-center">
        <div className="">
          <div className=" hidden lg:flex">
            <CustomMenu />
          </div>
          <div className="flex-1 lg:hidden">
            <SearchBar />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
