import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import NavUser from "./user/NavUser";
import Style from "./Style.module.css";

function Navbar({ black }) {
  const navigate = useNavigate();
  const [xs, setXs] = useState();
  const [display, setDisplay] = useState("none");
  const handleDropDown = () => {
    if (display == "none") {
      setDisplay("block");
    } else {
      setDisplay("none");
    }
  };
  const handleLogout = () => {
    localStorage.removeItem("xs");
  };
  function handleProfile(){
    if (xs.type == 'user'){
      navigate('/user')
    }else if(xs.type == 'driver'){
      navigate('/driver')
    }
  }
  const isExpired = async () => {
    const { data } = await axios.get(
      `http://localhost:8000/user/userinfo/${localStorage.getItem("xs")}`
    );
    setXs(data);
    console.log(data);
  };
  useEffect(() => {
    isExpired();
  }, []);
  return (
    <nav
      className={`w-ful flex py-2 p-4 justify-between items-center ${
        black ? "bg-black" : ""
      } `}
    >
      <div className="w-ful flex  justify-start items-center">
        <div className="font-[500] text-[30px] text-white">
          <span style={{ color: "#FFCB50" }}>Khufu</span> GO
        </div>
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
      {localStorage.getItem("xs") == undefined || xs == "jwt expired"
        ? [
            <div>
              <ul className="list-none sm:flex justify-end items-center flex-1 hidden">
                <li className="px-3 text-[18px] text-white">
                  <Link to={"/register"}>Sign Up</Link>
                </li>
                <li className="px-3 text-[18px] text-white">
                  <Link to={"/type"}>Log In</Link>
                </li>
              </ul>
            </div>,
          ]
        : xs
        ? [
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginRight: "10px",
              }}
              onClick={handleDropDown}
            >
              <div
                style={{
                  color: "black",
                  backgroundColor: "white",
                  borderRadius: "15px",
                  padding: "5px",
                  cursor: "pointer",
                }}
              >
                {xs.firstName[0].toUpperCase()}
                {xs.secondName[0].toUpperCase()}
              </div>
              <svg
                className="w-2.5 h-2.5 ms-3"
                style={{ color: "white", cursor: "pointer" }}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
              <ul className={Style.menu} style={{ display }}>
                <li className="menu-item">
                  <button onClick={()=>handleProfile()}>profile</button>
                </li>
                <li className={Style.menuItem}>
                  <button style={{ color: "red" }} onClick={handleLogout}>
                    Logout
                  </button>
                </li>
              </ul>
            </div>,
          ]
        : ""}
    </nav>
  );
}

export default Navbar;
