import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import Bus from "./pages/Bus";
import Login from "./pages/Login";
// import Register from "./pages/Register";
import Error404 from "./pages/Error404";
import Navbar from "./components/Navbar";
import UserDashboard from "./pages/UserDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import BusesInfo from "./components/BusesInfo";
import { useState } from "react";
 
function App() {
 let [data,setData] = useState([])
  return (
    <>
     
        <Routes>
          <Route path="/" element={<HomePage data={data} setData={setData}/>} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/bus" element={<BusesInfo />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/register" element={<Register />} /> */}
          <Route path="/user" element={<UserDashboard />} />
          {/* <Route path="/driver" element={<Register />} /> */}
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/error404" element={<Error404 />} />
          <Route path="/home" element={<Navigate to="/" />} />
          <Route path="*" element={<Navigate to="/error404" />} />
        </Routes>
    </>
  );
}

export default App;
