import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from 'axios'
import "../styles/index.css"
import Navbar from "./Navbar";
export default function BusesInfo(props) {
    // await axios.get(`http://127.0.0.1:8000/bus/${dest}/${location}`)
    // const location = useLocation()
    const [location, setLocation] = useState('')
    const [dest, setDest] = useState('')
    const [places, setPlaces] = useState([])
    const [search, setSearch] = useState('')
    const handleSearch = (e) => {
        setSearch(e.target.value)
    }
    const [data, setData] = useState([])
    const array = async () => {
        await axios.get("http://127.0.0.1:8000/all/buses").then(response => {
            setData(response.data)
        })
    }

    const getPlaces = async () => {
        const res = await axios.get("http://127.0.0.1:8000/places");
        setPlaces(res.data);
        console.log(places)
    }

    const handleDist = (e) => {
        setDest(e.target.value)
    }
    const handleLocation = (e) => {
        setLocation(e.target.value)
        console.log(location)
    }
    const handleDistLocation = async () => {

    }
    useEffect(() => {
        console.log(search)
    }, [search])
    useEffect(() => {
        array()
        getPlaces()

    }, [])
    return (
        <>
            <Navbar black={"bg-black"} />
            <div className="searchCon text-center ">
                <input type="search" placeholder="search by number of bus" className="search" onChange={handleSearch} />
            </div>
            <div className="grid pb-[3%] pl-5 sgrid pt-8 bg-black grid-cols-4">
                <div className="div">
                    <h1 className="trip text-black text-center ">
                        Find trip
                    </h1>

                    <input list="brow" className="input pl-3" placeholder="Enter Location" onChange={handleLocation} />
                    <datalist id="brow">
                        {places.map((item, i) => {
                            return <option value={item["place_name"]} key={i} />;
                        })}
                    </datalist>
                    <input className="input pl-3 mt-3" placeholder="Enter destination" onChange={handleDist} />
                    <br />
                    <button onClick={handleDistLocation} className="clickbtn ml-20 bg-black text-white px-3 py-1 mt-5">click</button>
                </div>

                <div className="bg-black  conCard h-full col-span-3  px-[3%] grid grid-cols-3 gap-x-[4%] gap-y-[7%]" >

                    {data.filter(i => {
                        return search == '' ? i : String(i.bus_number).includes(search)
                    })
                        .map(item => {


                            return (
                                <div className="col card py-[4%] px-[5%] grid grid-cols-1">
                                    <p className="col circule text-center py-4   ">{item.bus_number}</p>

                                    <span className="line col col-12 mt-[3%] ">cost</span>
                                    <p className="col text ">5 EGP</p>


                                    <span className="line col col-12 mt-[3%] ">trafic</span>
                                    <p className="col text ">
                                        {item.places}
                                    </p>

                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </>
    )
}

