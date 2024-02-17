import React from "react";
import { useLocation } from "react-router-dom";
import "../styles/index.css"
export default function BusesInfo(props){
    // await axios.get(`http://127.0.0.1:8000/bus/${dest}/${location}`)
    const location = useLocation()
    console.log(location.state)
    
    const arr = [{hi:"noj",1:'no'},{hi:"no",2:"jji"},{hi:"no",2:"jji"},{hi:"no",2:"jji"},{hi:"no",2:"jji"}]
    return(
        <div className="bg-black conCard h-full pb-[5%] pt-[3%] px-[3%] grid grid-cols-4 gap-x-[4%] gap-y-[7%]" >
            
                { 
                arr.map(item=>{
                    return(
                    <div className="col card py-[4%] px-[5%] grid grid-cols-1">
                    <p className="col circule text-center py-[5%]   ">222</p>
                     
                    <span className="line col col-12 mt-[3%] ">cost</span>
                    <p className="col text ">400</p>
                     
                     
                    <span className="line col col-12 mt-[3%] ">trafic</span>
                    <p className="col text "> jjljjljljljjklllllllllllllllllllllll jklllllllllllllllllll kjjj kjjj jkjj</p>
                    
                     
                    <span className="line col  col-12 mt-[3%] ">driver</span>
                    <p className="col text"> mahmoud</p>
                    
                 </div>  
                    )
                })
                }
                  
            </div>        
                  
        
    )
}

