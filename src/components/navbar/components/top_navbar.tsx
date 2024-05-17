import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import ProfileIcon from "./profile_icon";
import { CLientServices } from "@/services/user";
import Cookies from "js-cookie";
import { logout } from "@/redux/features/auth_slice";

const TopNavbar = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state: any) => state.auth.isLoggedIn);

  const handleLogout = async () => {
    try {
      const result = await CLientServices.logout();
      if (result) {
        console.log("Logout successful: ", result);
        Cookies.remove("jwt");
        dispatch(logout());
      }
    } catch (error) {
      console.error("Error during logout: ", error);
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
        {isLoggedIn ? (
          <div>
            <ProfileIcon logoutHandler={handleLogout} />
          </div>
        ) : (
          <Link href="/sign_in">Sign In</Link>
        )}
      </div>
    </div>
  );
};

export default TopNavbar;
