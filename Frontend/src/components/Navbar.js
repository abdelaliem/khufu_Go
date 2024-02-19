import { Link } from "react-router-dom";

function Navbar({ black }) {
  return (
    <nav
      className={`w-ful flex py-2 p-4 justify-between items-center ${
        black ? "bg-black" : " bg-transparent text-white"
      } `}
    >
      <div className="w-ful flex justify-start items-center">
        <div className="font-[500] text-[30px] text-white">KhufuGO</div>
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
      <div>
        {}
        <ul className="list-none sm:flex justify-end items-center flex-1 hidden">
          <li className="px-3 text-[18px] text-white">
            <Link to={"/register"}>Sign Up</Link>
          </li>
          <li className="px-3 text-[18px] text-white">
            <Link to={"/login"}>Log In</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
