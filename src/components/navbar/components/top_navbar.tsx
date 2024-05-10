import { useState, useEffect } from "react";
import Link from "next/link";
import ProfileIcon from "./profile_icon";
import { CLientServices } from "@/services/user";
import Cookies from "js-cookie";

const TopNavbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track user's authentication status

  useEffect(() => {
    // Check if the token exists in the cookie
    const token = Cookies.get("jwt");
    setIsLoggedIn(!!token); // Update isLoggedIn based on the existence of token
  }, []); // Run this effect only once on component mount

  const handleLogout = async () => {
    // Call logout service
    try {
      const result = await CLientServices.logout();
      if (result) {
        console.log("Logout successful: ", result);
        // Remove the token from the cookie
        Cookies.remove("jwt");
        // Update authentication status
        setIsLoggedIn(false); // Manually update isLoggedIn state
      }
    } catch (error) {
      console.error("Error during logout: ", error);
      // Handle logout error
    }
  };

  return (
    <div>
      <div className="h-8 bg-base-200 hidden lg:flex justify-between items-center">
        <div className="lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>About Us</a>
            </li>
            <li>
              <a>Contact Us</a>
            </li>
            <li>
              <a>Contact Us</a>
            </li>
          </ul>
        </div>
        {/* <div className="bg-red-300">
            {isLoggedIn ? (
              <button onClick={handleLogout}>Logout</button>
            ) : (
              <>
                <Link href="/sign_in">Sign In</Link>
                <Link href="/sign_up">Sign Up</Link>
              </>
            )}
          </div> */}
        <div>
          <ProfileIcon />
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
