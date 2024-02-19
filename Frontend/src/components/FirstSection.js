import React, { useEffect, useState } from "react";
import "../styles/index.css";
import axios from "axios";

function FirstSection() {
  const [data, setData] = useState([]);
  const [bus, setBus] = useState([]);
  const [location, setlocation] = useState("");
  const [dest, setdest] = useState("");

  const getdata = async () => {
    const res = await axios.get("http://127.0.0.1:8000/places");
    setData(res.data);
  };
  const getBuses = async (d, l) => {
    console.log(d);
    console.log(l);
    const res = await axios.get(`http://127.0.0.1:8000/bus/${l}/${d}`);
    setBus(res.data);
  };
  useEffect(() => {
    getdata();
    console.log("hi");
  }, []);
  const handleLocationInput = (e) => {
    setlocation(e.target.value);
  };
  const handledestInput = (e) => {
    setdest(e.target.value);
  };
  const handleform = () => {
    getBuses(dest, location);
  };
  return (
    <div className=" h-screen container m-auto">
      <div className=" conForm grid-cols-1 grid place-content-center">
        <h1 className="title text-center font-bold">
          Your Journey, Our Priority!
        </h1>
        <form
          className="w-[400px] m-auto flex flex-col"
          method="get"
          action="/"
        >
          <input
            type="text"
            value={location}
            name="location"
            onChange={handleLocationInput}
            placeholder="Enter location"
            className="   block w-full px-3 mt-5 py-2 bg-white border border-slate-300 rounded-lg text-sm shadow-sm placeholder-slate-400
            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
            disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
            invalid:border-pink-500 invalid:text-pink-600
            focus:invalid:border-pink-500 focus:invalid:ring-pink-500
            "
          />
          <select
            value={dest}
            name="dest"
            onChange={handledestInput}
            type="select"
            placeholder="destination"
            className="   block w-full px-3 mt-4 py-2 bg-white border border-slate-300 rounded-lg text-sm shadow-sm placeholder-slate-400
            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
            disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
            invalid:border-pink-500 invalid:text-pink-600
            focus:invalid:border-pink-500 focus:invalid:ring-black-500
            "
          >
            {data.map((itme, i) => {
              return (
                <option value={itme["place_id"]} key={i}>
                  {itme["place_name"]}
                </option>
              );
            })}
          </select>
          <button
            type="button"
            onClick={handleform}
            className=" w-[150px] m-auto h-[40px] mt-8 bg-black rounded-lg text-white"
          >
            <span className=" text-[#FFCB50]">See </span> Buses
          </button>
        </form>
      </div>
    </div>
  );
}

export default FirstSection;
