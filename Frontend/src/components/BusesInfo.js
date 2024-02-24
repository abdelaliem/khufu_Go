import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/index.css";
import Navbar from "./Navbar";
export default function BusesInfo({ bus, setBus }) {
    // await axios.get(`http://127.0.0.1:8000/bus/${dest}/${location}`) 
  
    let locationValue = bus['location']? bus['location']:"" 
    let destVlaue= bus['destination']? bus['destination']:""
    let [dest, setDest] = useState('')
    const [places, setPlaces] = useState([])
    const [search, setSearch] = useState('')
    let [data, setData] = useState([])
    let [location, setLocation] = useState('')
    const [test,setTest] = useState(0)
    // if(locationValue && destVlaue){
    // places.map(item =>{
    //     if(item['place_id']==locationValue){
    //         location=item['place_name']
    //     }
    //     if (parseInt(item['place_id'])==parseInt(destVlaue)) {
    //         dest = item['place_name']
    //     }
    // })
    // }

    const handleSearch = (e) => {
        setSearch(e.target.value)
    }
     
    const array = async (id=0,location=0) => {
        if(id!=0 && location!=0){
            
            await axios.get(`http://127.0.0.1:8000/all/buses/${id}/${location}`).then(response => {
                setData(response.data)
                setTest(1)
            }) 
        }else{
        await axios.get("http://127.0.0.1:8000/all/buses").then(response => {
        setData(response.data)  
        setTest(1)
        })
    }
    }
    const getPlaces = async () => {
        const res = await axios.get("http://127.0.0.1:8000/places");
        setPlaces(res.data);
        
    }

    const handleDist = (e) => {
        setDest(e.target.value)
    }
    const handleLocation = (e) => {
        setLocation(e.target.value)
    }
    const handleDistLocation = async () => {
        let location2 = places.filter(i=>{
            if(i.place_name==location){
                return i.place_id
            } 
        })
        console.log(location2)
        let dest2 = places.filter(i=>{
            if(i.place_name==dest){
                return i.place_id
            } 
        })
        console.log(dest2)
        array(location2[0]['place_id'],dest2[0]['place_id'])
    }
    useEffect(() => {
        
    }, [search])
    useEffect(() => {
        if(locationValue!=''  && destVlaue!='' ){
        let location2 =parseInt (bus['location'])
        let destination2 =parseInt (bus['destination'])
        console.log('yes')
        array(destination2,location2)
        }else{
            array()
        }
    },[])
    useEffect(() => {
        getPlaces()

    }, [])
    useEffect(()=>{
        console.log(test)
    },test)
    console.log(test)
    console.log(data)
    if(test){
    return (
        <>
            <Navbar black={"bg-black"} />
            <div className="searchCon text-center ">
                <input type="search" placeholder="search by number of bus" className="search" onChange={handleSearch} />
            </div>
            <div className="grid pb-[3%] box-border pl-5 sgrid pt-8 bg-black grid-cols-4">
                <div className="div">
                    <h1 className="trip text-black text-center ">
                        Find trip
                    </h1>

                    <input list="brow"   className="input pl-3" placeholder="Enter Location" onChange={handleLocation} />
                    <datalist id="brow">
                        {places.map((item, i) => {
                            return <option value={item["place_name"]} key={i} />;
                        })}
                    </datalist>
                    <input list="brow2" className="input pl-3 mt-3"   placeholder="Enter destination" onChange={handleDist} />
                    <datalist id="brow2">
                        {places.map((item, i) => {
                            return <option value={item["place_name"]} key={i} />;
                        })}
                    </datalist>
                    <br />
                    <button onClick={handleDistLocation} className="clickbtn ml-20 bg-black text-white px-3 py-1 mt-5">click</button>
                </div>

                <div className="bg-black   conCard h-full col-span-3  px-[3%] grid grid-cols-3 gap-x-[4%] gap-y-[7%]" >

                    { 
                    
                    data!='no buses found' && data?
                    data.filter(i => {
                       i.places=i.places.toString()
                        console.log(i.places)
                        return search == '' && location=='' ? i : String(i.bus_number).includes(search ) && String(i.places).includes(location) && String(i.places).includes(dest)
                     })//
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
                        }):<div className="noTripDiv text-center col-span-3 self-center "> 
                            <h1 className="noTripH  ">
                                There is no trip !
                             </h1>
                             <p className=" noTripP ">
                                try another location or destination
                             </p>
                             </div>
                    }
                
                </div>
            </div>
        </>
    )
}else{
    return <p>loading</p>
}
} 
