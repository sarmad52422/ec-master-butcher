import Image from "next/image";

const ProfileDetails = () => {
  return (
    <div>
      <div className="flex justify-center">
        <div className="avatar">
          <div className="w-20 rounded-xl">
            <Image alt="stock-photo" fill src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
          <div>
            <div className=" ml-5 font-bold">John Doe</div>
            <div className="h-8 mt-2 grid grid-row-2 ml-5 gap-2">
              <button className=" btn-outline  border-2 border-green-400 rounded-md  btn-success w-14 ">
                SignIn
              </button>
              <button className=" btn-outline  border-2 border-green-400 rounded-md  btn-success w-14 ">
                Setting
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="divider divider-info mt-5">Menu</div>
    </div>
  );
};
export default ProfileDetails;
