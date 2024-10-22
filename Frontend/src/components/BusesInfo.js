import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/index.css";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

export default function BusesInfo({ bus, setBusNum }) {
  const [places, setPlaces] = useState([]);
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [location, setLocation] = useState("");
  const [dest, setDest] = useState("");
  const [test, setTest] = useState(false);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  function handleNavigate(e) {
    setBusNum(e);
  }

  const array = async (id = 0, location = 0) => {
    try {
      let response;
      if (id !== 0 && location !== 0) {
        response = await axios.get(
          `http://127.0.0.1:8000/all/buses/${id}/${location}`
        );
      } else {
        response = await axios.get("http://127.0.0.1:8000/all/buses");
      }

      setData(response.data);
      setTest(true);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleDistLocation = () => {
    let locationId = places.find(
      (place) => place.place_name === location
    )?.place_id;
    let destId = places.find((place) => place.place_name === dest)?.place_id;

    if (locationId && destId) {
      array(destId, locationId);
    }
  };

  const getPlaces = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/places");
      setPlaces(response.data);
      console.log(bus);
      if (bus?.location && bus?.destination) {
        console.log("here");
        setLocation(bus.location);
        setDest(bus.destination);
        handleDistLocation();
      }
    } catch (error) {
      console.error("Error fetching places:", error);
    }
  };

  useEffect(() => {
    getPlaces();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        let response;

        if (location !== "" && dest !== "") {
          let locationId = places.find(
            (place) => place.place_name === location
          )?.place_id;
          let destId = places.find(
            (place) => place.place_name === dest
          )?.place_id;

          if (locationId && destId) {
            response = await axios.get(
              `http://127.0.0.1:8000/all/buses/${destId}/${locationId}`
            );
          }
        } else {
          response = await axios.get("http://127.0.0.1:8000/all/buses");
        }
        console.log(response);
        setData(response.data);
        setTest(true);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [location, dest, places]);

  if (test) {
    return (
      <div className="scroll bg-black">
        <Navbar black={"bg-black"} />
        <div className="searchCon text-center ">
          <input
            type="search"
            placeholder="search by number of bus"
            className="search w-[70%]"
            onChange={handleSearch}
          />
        </div>
        <div className="grid pb-3 box-border px-2 pt-8 m-auto lg:m-0  md:grid-cols-4 xs:grid-cols-1">
          <div className="div sm:w-[60%] lg:w-[100%] mb-5 mx-auto">
            <h1 className="trip text-black text-center ">Find trip</h1>

            <input
              list="brow"
              className="input pl-3"
              placeholder="Enter Location"
              onChange={(e) => setLocation(e.target.value)}
              value={location}
            />
            <datalist id="brow">
              {places.map((item, i) => (
                <option value={item.place_name} key={i} />
              ))}
            </datalist>
            <input
              list="brow2"
              className="input pl-3 mt-3"
              placeholder="Enter destination"
              onChange={(e) => setDest(e.target.value)}
              value={dest}
            />
            <datalist id="brow2">
              {places.map((item, i) => (
                <option value={item.place_name} key={i} />
              ))}
            </datalist>
            <br />
            <div className=" text-center">
              <button
                onClick={handleDistLocation}
                className="clickbtn m-auto text-center bg-black text-white px-3 py-1 mt-5"
              >
                click
              </button>
            </div>
          </div>

          <div className=" conCard flex-wrap h-full col-span-3 px-3 grid lg:grid-cols-3 ss:grid-cols-2 xs:grid-cols-1 gap-x-4 gap-y-5">
            {data !== "no buses found" && data.length ? (
              data
                .filter((i) => {
                  i.places = i.places.toString();
                  return (
                    (search === "" || String(i.bus_number).includes(search)) &&
                    (location === "" || String(i.places).includes(location)) &&
                    (dest === "" || String(i.places).includes(dest))
                  );
                })

                .map((item) => (
                  <Link
                    key={item.bus_number}
                    to={"/user"}
                    onClick={() => handleNavigate(item.bus_number)}
                    className="col card py-[4%] px-[5%] grid grid-cols-1"
                  >
                    <p className="col circule text-center py-4  ">
                      {item.bus_number}
                    </p>

                    <span className="line col col-12 mt-[3%] ">cost</span>
                    <p className="col text ">5 EGP</p>

                    <span className="line col col-12 mt-[3%] ">trafic</span>
                    <p className="col text scroll2">{item.places}</p>
                  </Link>
                ))
            ) : (
              <div className="noTripDiv text-center col-span-3 self-center ">
                <h1 className="noTripH  ">There is no trip !</h1>
                <p className=" noTripP ">try another location or destination</p>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  } else {
    return <p>loading</p>;
  }
}
