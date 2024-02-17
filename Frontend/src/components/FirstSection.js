import React, { useEffect, useState } from "react"
import { Navigate, redirect, useNavigate } from "react-router-dom"
import "../styles/index.css"
import axios  from 'axios'
import BusesInfo from "./BusesInfo"

const FirstSection = ()=>{
    const navigate = useNavigate()
    const [data,setData]=useState([])
    const getdata = async()=>{
    const res = await axios.get("http://127.0.0.1:8000/places") 
    setData( res.data)
}  
    const [bus,setBus] = useState([])
     
useEffect(()=>{
    getdata()
},[]) 
const [location,setlocation] = useState('')
const handleLocationInput = (e)=>{
    setlocation(e.target.value) 
}
const [dest,setdest] = useState('')
const handledestInput = (e)=>{
    setdest(e.target.value)
     
}
const handleform = async()=>{
    try {
        
          await axios.get(`http://127.0.0.1:8000/bus/${dest}/${location}`).then(function(response) {
            console.log('before set bus')
            setBus(response.data);
            console.log('after set bus')
          }).then(function(){navigate("busesInfo",{replace:true , state:{bus}})})
        
    } catch (error) {
    console.log('error maiiiii')
    console.log(error)
 
    }
    
    
//    <BusesInfo data={}/>
   
    
}
    return(
    <div className="container ">
    <div className=' conForm grid-cols-1 grid place-content-center'>
    <h1 className="title text-center">Your Journey, Our Priority!</h1>
    <form className="w-96 form mt-3 " method="get"   >
    <input type="text" value={location} name="location"  onChange={handleLocationInput} placeholder="Enter location"className="   block w-full px-3 mt-5 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "/>
    <select value={dest} name="dest" onChange={handledestInput} type='select' placeholder="dist" className="   block w-full px-3 mt-4 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-black-500
    ">
    {
        data.map(itme=>{
            return(
                <option value={itme['place_id']}>{itme['place_name']}</option>
            )
        })
    }
    </select>
    <button type="button" onClick={handleform} className="btn-primary submitbutton">
        see buses
    </button>
        </form>
        </div>
         {/* <BusesInfo id ={dest} location={location}/>  */}
        </div>
       
    )
}

export default FirstSection