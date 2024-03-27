import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";

function Requested({ requested }) {
  let navigate = useNavigate();
  let [isCancel0,setIsCancel0] = useState(false)

  const cancel = async () => {
    const data = await axios.put(
      `http://localhost:8000/cancelBooks`,{
        user_id: requested.user.id,
      }
    )
    navigate('/user')
  };

  // useEffect(()=>{
  //   cancel();
  // },[isCancel0])

  useEffect(()=>{
    if (requested == null) {
      navigate("/home");
    }
  },[])

  return (
    <>
      <Navbar black={true} />
      <div className="#FCB100 min-h-screen flex flex-col items-center bg-white justify-center">
        <h1 className="text-4xl text-orange-500  font-bold mb-4">Khufu GO</h1>
        <p className=" mb-8">
          An alert will be sent to the Driver. Please wait in your place.
        </p>
        <button
          onClick={()=>cancel()}
          className="bg-black text-white font-bold py-2 px-4 rounded-full"
        >
          Cancel
        </button>
      </div>
    </>
  );
}

export default Requested;
