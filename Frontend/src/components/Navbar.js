import { Link } from "react-router-dom";
import "../styles/index.css"
function Navbar() {
  return (
 
    <nav className="w-ful flex py-5 justify-between  items-center bg-black">
      <div className="font-[500]  text-[30px] khufu">
          
        Khufu <span className="go">GO</span>
        </div>
      <div>
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
    </nav>
  );
}

export default Navbar;
