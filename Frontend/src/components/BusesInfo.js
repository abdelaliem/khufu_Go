import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "../styles/index.css"
export default function BusesInfo(props){
    // await axios.get(`http://127.0.0.1:8000/bus/${dest}/${location}`)
    const location = useLocation()
    console.log(location.state)
    const [search,setSearch] = useState('')
    const handleSearch = (e)=>{
        setSearch(e.target.value)
    }

     
    let arr = [
        {hi:"noj",1:'no',
        bus_number:900,places:[1,2,3,4,4,'jkjk','jij']},
        {hi:"no",2:"jji",bus_number:1105,places:[1,2,3,4,4,'jkjk','jij']},
        {hi:"no",2:"jji",bus_number:200,places:[1,2,3,4,4,'jkjk','jij']},
        {hi:"no",2:"jji",bus_number:2},
        {hi:"no",2:"jji",bus_number:22,places:['jkjk',2,3,4,4,'jkjk','jij']}
    ]
    useEffect(()=>{
       
        console.log(search)
    },[search])
    return(
        <>
        <div className="searchCon"> 
        <input type="search"  placeholder="search by number of bus" className="search  " onChange={handleSearch} /> 
        </div>
        <div className="bg-black conCard h-full pb-[5%] pt-[4%] px-[3%] grid grid-cols-4 gap-x-[4%] gap-y-[7%]" >
            
                {   arr.filter(i=>{
                    return search==''?i:String(i.bus_number).includes(search)
                })
              .map(item=>{
               
                    if(item.places){
                        item.places.map(i=>{
                            console.log(i)
                              return(
                            <p className="col text ">
                                {i}
                            </p>  
                        )
                        })
                    } 
                    return(
                    <div className="col card py-[4%] px-[5%] grid grid-cols-1">
                    <p className="col circule text-center py-[5%]   ">{item.bus_number}</p>
                     
                    <span className="line col col-12 mt-[3%] ">cost</span>
                    <p className="col text ">400</p>
                     
                     
                    <span className="line col col-12 mt-[3%] ">trafic</span>
                    {/* <p className="col text ">
                      
                        </p> */}
                    
                     
                    <span className="line col  col-12 mt-[3%] ">driver</span>
                    <p className="col text"> mahmoud</p>
                    
                 </div>  
                    )
}) 
                }
                  
            </div>        
                  
        </>
    )
}

