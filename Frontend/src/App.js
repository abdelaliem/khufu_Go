import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import Bus from "./pages/Bus";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Error404 from "./pages/Error404";
import Navbar from "./components/Navbar";
import UserDashboard from "./pages/UserDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import BusesInfo from "./components/BusesInfo";
 
function App() {
  return (
    <>
        <Navbar black={true} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/bus" element={<Bus />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/user" element={<UserDashboard />} />
          <Route path="/driver" element={<Register />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/error404" element={<Error404 />} />
          <Route path="/home" element={<Navigate to="/" />} />
          <Route path="/busesInfo" element={<BusesInfo />} />
          <Route path="*" element={<Navigate to="/error404" />} />
        </Routes>
    </>
  );
}

export default App;
