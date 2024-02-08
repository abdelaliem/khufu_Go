import { Link } from "react-router-dom";

function Register() {
  return (
    <form method="get">
      <div className="h-[420px] m-auto text-center bg-white w-[60%] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%] flex justify-evenly flex-col rounded-2xl">
        <h2 className="text-[23px] text-primary font-medium">Khufu Go</h2>
        <div>
          <input
            className="block border-slate-950 border rounded-2xl w-[80%] sm:w-[70%] md:w-[60%] lg:w-[50%] xl:w-[40%] my-4 m-auto px-3 h-8"
            placeholder="Phone Number"
            type="number"
          />
          <input
            className="block border-slate-950 border rounded-2xl w-[80%] sm:w-[70%] md:w-[60%] lg:w-[50%] xl:w-[40%] my-4 m-auto ps-3 h-8"
            placeholder="Password"
            type="password"
          />
        </div>
        <div className="flex flex-col sm:flex-row justify-around w-[80%] sm:w-[70%] md:w-[60%] lg:w-[50%] xl:w-[40%] text-center mx-auto">
          <button className="bg-primary text-white px-7 py-1 rounded-2xl my-2 sm:my-0">
            Sign up
          </button>
          <Link
            to={"/login"}
            className="bg-secondary text-white px-7 py-1 rounded-2xl my-2 sm:my-0"
          >
            Login
          </Link>
        </div>
      </div>
    </form>
  );
}

export default Register;
