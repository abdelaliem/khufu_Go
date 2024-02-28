import { Link, Navigate, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";

function BusInfo({ requested }) {
  let [isRequested, setIsRequested] = useState(false);
  let navigate = useNavigate();
  useEffect(()=>{
    if (requested == null) {
      navigate("/home");
    }
  },[])
  async function handleRequest() {
    const res = await axios.put("http://localhost:8000/applyBooks", {
      bus_id: requested.bus.bus_id,
      user_id: requested.user.id,
    });
    if (res.data == "already requested") {
      setIsRequested(true);
    } else {
      navigate("/requested");
    }
  }
  return (
    <>
      <Navbar black={true} />
      <div className="businfo max-h-screen flex flex-col items-center">
        <h1 className="text-4xl text-[#FCB100] mt-4 mt-lg-4 font-bold">
          Khufu GO
        </h1>
        <br></br>
        <br></br>
        <div className="p-8 rounded mt-lg-4">
          <div className="flex justify-between mb-4">
            <div>
              <h2 className="text-xl font-bold border-b-2 border-black">
                Cost
              </h2>
              <br></br>
              <p className="text-gray-600">10 EGP</p>
            </div>
            <div>
              <p className="text-xl font-bold border-b-2 border-black">Time</p>
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
              Location ->
            </Link>
          </div>
          <div class="flex justify-center flex-col">
            <button
              // to={"/requested"}
              onClick={handleRequest}
              class="bg-black text-white font-bold py-2 px-4 rounded-full w-[150px] m-auto my-4"
            >
              Request
            </button>
            {isRequested ? (
              <div
                class="p-4 mb-4 text-sm text-yellow-800 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300"
                role="alert"
              >
                <span class="font-medium">You Have already request a bus</span>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default BusInfo;
