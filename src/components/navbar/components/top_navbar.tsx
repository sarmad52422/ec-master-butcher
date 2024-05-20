import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import ProfileIcon from "./profile_icon";
import { CLientServices } from "@/services/user";
import { logout } from "@/redux/features/auth_slice";

const TopNavbar = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state: any) => state.auth.isLoggedIn);

  const handleLogout = async () => {
    try {
      const result = await CLientServices.logout();
      if (result) {
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
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="/contact">Contact Us</Link>
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
