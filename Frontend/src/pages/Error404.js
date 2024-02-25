import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function Error404() {
  return (
    <>
      <Navbar black={true} />
      <div className="bg-black h-[90.5vh] pt-20">
        <div className="flex justify-center">
          <p className="text-yellow-500 text-bold text-9xl">404</p>
        </div>
        <br></br>
        <br></br>
        <div className="flex justify-center">
          <p className="text-gray-400 text-xl text-center">
            unfortunately the page you are <br></br> looking for does not exist
          </p>
        </div>
        <br></br>
        <br></br>
        <div className="flex justify-center">
          <Link
            to={"/home"}
            className="bg-yellow-500 text-center rounded-full pt-2 h-10 w-40"
          >
            Back to home
          </Link>
        </div>
      </div>
    </>
  );
}

export default Error404;
