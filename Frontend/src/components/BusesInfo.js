import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from 'axios'
import "../styles/index.css"
export default function BusesInfo(props){
    // await axios.get(`http://127.0.0.1:8000/bus/${dest}/${location}`)
    const location = useLocation()
    console.log(location.state)
    const [search,setSearch] = useState('')
    const handleSearch = (e)=>{
        setSearch(e.target.value)
    }
    const [data,setData] = useState([])
    const array =async()=>{ await axios.get("http://127.0.0.1:8000/all/buses").then(response =>{
        setData(response.data)
    })
}

     
    useEffect(()=>{
        console.log(search)
    },[search])
    useEffect(()=>{
        array()
    },[])
    return(
        <>
        <div className="searchCon"> 
        <input type="search"  placeholder="search by number of bus" className="search  " onChange={handleSearch} /> 
        </div>
        <div className="bg-black conCard h-full pb-[5%] pt-[4%] px-[3%] grid grid-cols-4 gap-x-[4%] gap-y-[7%]" >
            
                {   data.filter(i=>{
                    return search==''?i:String(i.bus_number).includes(search)
                })
              .map(item=>{
                        item.places.map(i=>{
                           
                            i = i+"yy"
                        })
                    
                    return(
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
                  
        </>
    )
}

