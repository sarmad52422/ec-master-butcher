import ProfileIcon from "./profile_icon";

const TopNavbar = () => {
  return (
    <div>
      <div className="h-8 bg-base-200 hidden lg:flex justify-between items-center">
        <div className=" lg:flex ">
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
        <ProfileIcon />
      </div>
    </div>
  );
};
export default TopNavbar;
