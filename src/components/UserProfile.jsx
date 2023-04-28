import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import { useStateContext } from "../contexts/Contextrovider";
import avatar from "../data/avatar.jpg";
import { NavLink } from "react-router-dom";

const UserProfile = () => {
  const { handleClose } = useStateContext();
  return (
    <div className="bg-half-transparent w-screen h-screen fixed nav-item top-0 right-0">
      <div
        className="float-right dark:text-gray-200 bg-white dark:[#484B52]  mr-5 mt-10 rounded-lg"
        style={{ height: "240px", width: "180px" }}
      >
        <div className="flex justify-between">
          <div className="flex items-center gap-2 cursor-pointer p-1 rounded-lg">
            <img className="rounded-full w-8 h-8" src={avatar} />
            <p>
              <span className="text--gray-400 text-sm">Hi, </span>{" "}
              <span className="text-gray-400 font-bold ml-1 text-sm">
                Michael
              </span>
            </p>
          </div>
          <button
            type="button"
            onClick={() => handleClose("userProfile")}
            style={{ color: "rgb(153, 171, 180)", borderRadius: "50%" }}
            className="text-2xl p-3 hover:drop-shadow-xl "
          >
            <MdOutlineCancel />
          </button>
        </div>
        <div className="mt-5 border-t-1 border-color p-4 ml-4 flex flex-col justify-start">
          <NavLink
            to="/profile"
            className="text-gray-400 m-1 ml-0 cursor-pointer  hover:bg-light-gray"
            onClick={() => handleClose("userProfile")}
          >
            Your Profile
          </NavLink>
          <NavLink
            to="/products"
            className="text-gray-400 m-1 ml-0 cursor-pointer  hover:bg-light-gray"
            onClick={() => handleClose("userProfile")}
          >
            Your Products
          </NavLink>
          <NavLink
            to="/orders"
            className="text-gray-400 m-1 ml-0 cursor-pointer  hover:bg-light-gray"
            onClick={() => handleClose("userProfile")}
          >
            Your Orders
          </NavLink>
          <NavLink
            to="/signin"
            className="text-gray-400 m-1 ml-0 cursor-pointer  hover:bg-light-gray"
            onClick={() => handleClose("userProfile")}
          >
            Sign out
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
