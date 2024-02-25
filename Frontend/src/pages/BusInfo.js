import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useEffect } from "react";
import axios from "axios";

function BusInfo({ requested }) {
  return (
    <>
      <Navbar black={true} />
      <div className="bg-amber-300 max-h-screen flex flex-col items-center">
        <h1 className="text-4xl text-yellow-500 mt-4 mt-lg-4 font-bold">
          Khufu GO
        </h1>
        <br></br>
        <br></br>
        <div className="bg-amber-300 p-8  rounded mt-lg-4">
          <div className="flex justify-between mb-4">
            <div>
              <h2 className="text-xl font-bold border-b-2 border-black">
                Cost
              </h2>
              <br></br>
              <p className="text-gray-600">10 EGP</p>
            </div>
            <div>
              <p className="text-xl font-bold border-b-2 border-black">time</p>
              <br></br>
              <p className="text-gray-600">05:45 AM - 22:10pm</p>
            </div>
          </div>
          <br></br>
          <br></br>
          <div className="mb-4">
            <h3 className="text-xl font-bold border-b-2 border-black">
              Traffic
            </h3>
            <br></br>
            <p className="text-gray-800 w-[100%]">
              OOqba Mitta - Al-Rashid St. - Sudan -Nasr City -Oqba Mitta -
              Al-Rashid St. - Sudan -Nasr City
            </p>
          </div>
          <br></br>
          <br></br>
          <div className="mb-4">
            <Link
              to={"/user"}
              className="text-xl font-bold border-b-2 border-black"
            >
              location ->
            </Link>
          </div>
          <br></br>
          <br></br>
          <div class="flex justify-center">
            {" "}
            <Link
              to={"/requested"}
              class="bg-black text-white font-bold py-2 px-4 rounded-full"
            >
              Request
            </Link>
          </div>
        </div>{" "}
      </div>
    </>
  );
}

export default BusInfo;
