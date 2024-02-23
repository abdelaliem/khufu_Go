import axios from "axios";
import { useEffect, useState } from "react";
import { Link , useNavigate} from "react-router-dom";

function Navbar({ black }) {
  const navigate = useNavigate()
  const [xs,setXs] = useState()
  const isExpired = async ()=>{
    const {data} = await axios.get(`http://localhost:8000/user/userinfo/${localStorage.getItem("xs")}`)
    setXs(data)
  }
  useEffect(()=>{
    isExpired()
  })
  return (
    <nav
      className={`w-ful flex py-2 p-4 justify-between items-center ${
        black ? "bg-black" : ""
      } `}
    >
      <div className="w-ful flex  justify-start items-center">
        <div className="font-[500] text-[30px] text-white"><span style={{color:"#FFCB50"}}>Khufu</span> GO</div>
        <div className="ps-3">
          <ul className="list-none sm:flex justify-end items-center flex-1 hidden">
            <li className="px-3 text-[18px] text-white">
              <Link to={"/home"}>Home</Link>
            </li>
            <li className="px-3 text-[18px] text-white">
              <Link to={"/about"}>About us</Link>
            </li>
            <li className="px-3 text-[18px] text-white">
              <Link to={"/bus"}>Bus</Link>
            </li>
          </ul>
        </div>
      </div>
        {localStorage.getItem("xs") == undefined || xs =="jwt expired" ? 
        [<div>
        <ul className="list-none sm:flex justify-end items-center flex-1 hidden">
          <li className="px-3 text-[18px] text-white">
            <Link to={"/register"}>Sign Up</Link>
          </li>
          <li className="px-3 text-[18px] text-white">
            <Link to={"/login"}>Log In</Link>
          </li>
        </ul>
      </div>]
      : ""}

    </nav>
  );
}

export default Navbar;
