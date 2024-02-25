import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import Login from "./pages/Login";
import DriverDashboard from "./pages/DriverDashboard";
import Error404 from "./pages/Error404";
import Navbar from "./components/Navbar";
import UserDashboard from "./pages/UserDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import BusesInfo from "./components/BusesInfo";
import { useState } from "react";
import Signup from "./pages/Signup";
import BusInfo from "./pages/BusInfo";
import Requested from "./pages/Requested";

function App() {
  let [bus, setBus] = useState({});
  let [busNum, setBusNum] = useState(null);
  let [requested, setRequested] = useState(null);
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage bus={bus} setBus={setBus} />} />
        <Route path="/about" element={<AboutUs />} />
        <Route
          path="/bus"
          element={
            <BusesInfo bus={bus} setBus={setBus} setBusNum={setBusNum} />
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
        <Route
          path="/user"
          element={
            <UserDashboard busNum={busNum} setRequested={setRequested} />
          }
        />
        <Route path="/driver" element={<DriverDashboard />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/error404" element={<Error404 />} />
        <Route path="/home" element={<Navigate to="/" />} />
        <Route path="/busesInfo" element={<BusesInfo />} />
        <Route
          path="/businfo"
          element={<BusInfo requested={requested} busNum={busNum} />}
        />
        <Route path="/requested" element={<Requested />} />
        <Route path="*" element={<Navigate to="/error404" />} />
      </Routes>
    </>
  );
}

export default App;
