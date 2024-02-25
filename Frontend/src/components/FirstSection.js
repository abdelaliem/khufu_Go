import React, { useEffect, useState } from "react";
import "../styles/index.css";
import axios from "axios";
import { Link } from "react-router-dom";

function FirstSection({ bus, setBus }) {
  const [data, setData] = useState([]);
  // const [bus, setBus] = useState([]);
  const [location, setlocation] = useState("");
  const [dest, setdest] = useState("");

  const getdata = async () => {
    const res = await axios.get("http://127.0.0.1:8000/places");
    setData(res.data);
  };
  const getBuses = async (destination, location) => {
    let [locationId] = data.filter((item) => {
      if (item.place_name === location) {
        return item;
      }
    });
    console.log(destination);
    console.log(locationId.place_id);
    const res = await axios
      .get(
        `http://127.0.0.1:8000/all/buses/${locationId.place_id}/${destination}`
      )
      .then((res) => {
        setBus(
          (bus = {
            bus: res.data,
            destination: destination,
            // destinationId: destinationId,
            location: location,
            locationId: locationId,
          })
        );
      });
  };
  useEffect(() => {
    getdata();
  }, []);
  useEffect(() => {
    console.log("data");
  }, [data]);
  const handleLocationInput = (e) => {
    setlocation(e.target.value);
  };
  const handledestInput = (e) => {
    setdest(e.target.value);
  };
  const handleform = () => {
    console.log("handleform");
    getBuses(dest, location);
  };
  return (
    <div className="container m-auto lg:h-screen h-[80vh]">
      <div className=" conForm grid-cols-1 grid place-content-center mt-28 lg:mt-4">
        <h1 className="title text-center font-bold">
          Your Journey, Our Priority!
        </h1>
        <form
          className="w-[400px] m-auto flex flex-col "
          method="get"
          action="/"
        >
          <input
            list="brow"
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
          <datalist id="brow">
            {data.map((item, i) => {
              return <option value={item["place_name"]} key={i} />;
            })}
          </datalist>
          <input
            list="brow2"
            type="text"
            value={dest}
            name="location"
            onChange={handledestInput}
            placeholder="Enter Destination"
            className="   block w-full px-3 mt-5 py-2 bg-white border border-slate-300 rounded-lg text-sm shadow-sm placeholder-slate-400
            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
            disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
            invalid:border-pink-500 invalid:text-pink-600
            focus:invalid:border-pink-500 focus:invalid:ring-pink-500
            "
          />
          <datalist id="brow2">
            {data.map((item, i) => {
              return <option value={item["place_name"]} key={i} />;
            })}
          </datalist>
          <Link
            type="button"
            onClick={handleform}
            className=" w-[150px] m-auto text-center pt-2 h-[40px] mt-8 bg-black rounded-lg text-white"
            to={"/bus"}
          >
            <span className=" text-[#FFCB50]">See </span> Buses
          </Link>
        </form>
      </div>
    </div>
  );
}

export default FirstSection;
