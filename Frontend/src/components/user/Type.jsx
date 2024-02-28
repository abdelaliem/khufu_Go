import React from "react";
import { Link } from "react-router-dom";
import img1 from "../../images/backgroundChoose.jfif";
import Navbar from "../Navbar";
function Type() {
  return (
    <>
      <Navbar black={true} />
      <div className="type relative lg:opacity-90 h-screen overflow-hidden ">
        <img
          src={img1}
          className=" absolute object-cover -z-10 opacity-0 lg:opacity-15"
          alt=""
        />
        <div>
          <h1 className=" text-white text-center text-[30px] font-bold mt-10">
            KhufuGO
          </h1>
        </div>
        <div className="flex justify-center items-center my-48 flex-col">
          <Link
            to={`/login/user`}
            className=" bg-black text-white lg:w-[30%] w-[50%] my-2 py-2 px-8 text-center rounded-lg"
          >
            User
          </Link>
          <Link
            to={`/login/driver`}
            className=" bg-black text-white lg:w-[30%] w-[50%] my-2 py-2 px-8 text-center rounded-lg"
          >
            Driver
          </Link>
        </div>
      </div>
    </>
  );
}

export default Type;
