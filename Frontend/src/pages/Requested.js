import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useEffect } from "react";

function Requested({ requested }) {
  let navigate = useNavigate();
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
          An alert will be sent to the rider. Please wait in your place.
        </p>
        <Link
          to={"/user"}
          className="bg-black text-white font-bold py-2 px-4 rounded-full"
        >
          Cancel
        </Link>
      </div>
    </>
  );
}

export default Requested;
