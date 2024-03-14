"use client";

import Link from "next/link";
import ProfileIcon from "../navbar/components/profile_icon";
import ProfileDetails from "./components/profile_details";

const Drawer = () => {
  return (
    <div>
      <div className="drawer z-20 ">
        <input id="my-drawer" type="checkbox" className="drawer-toggle " />
        <div className="drawer-content">
          {/* Page content here */}
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <label htmlFor="my-drawer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
          </div>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-60 min-h-full bg-base-100 text-base-content rounded-md">
            {/* Sidebar content here */}
            <ProfileDetails />

            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <details>
                <summary>Meat</summary>
                <ul className="p-2 z-10">
                  <li>
                    <Link
                      href={{
                        pathname: "/products",
                        query: { category: "Meat" },
                      }}
                    >
                      Meat
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={{
                        pathname: "/products",
                        query: { category: "Lamb" },
                      }}
                    >
                      Lamb
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={{
                        pathname: "/products",
                        query: { category: "Mutton" },
                      }}
                    >
                      Mutton
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={{
                        pathname: "/products",
                        query: { category: "Beef" },
                      }}
                    >
                      Beef
                    </Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <Link
                href={{ pathname: "/products", query: { category: "Fish" } }}
              >
                Fish
              </Link>
            </li>

            <li>
              <Link
                href={{
                  pathname: "/products",
                  query: { category: "Chicken" },
                }}
              >
                Chicken
              </Link>
            </li>
            <li>
              <Link
                href={{
                  pathname: "/products",
                  query: { category: "Marinated" },
                }}
              >
                Marinated
              </Link>
            </li>
            <li>
              <Link
                href={{
                  pathname: "/products",
                  query: { category: "Frozen Food" },
                }}
              >
                Frozen Food
              </Link>
            </li>
            <li>
              <Link
                href={{
                  pathname: "/products",
                  query: { category: "Bulk Buy" },
                }}
              >
                Bulk Buy
              </Link>
            </li>
            <li>
              <Link
                href={{
                  pathname: "/products",
                  query: { category: "All Products" },
                }}
              >
                All Products
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Drawer;
