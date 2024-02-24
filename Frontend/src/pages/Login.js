import "../styles/index.css";
import LoginComponent from "../components/user/Login.jsx";
import Navbar from "../components/Navbar.js";
function Login() {
  return (
    <>
      <Navbar black={true} />
      <LoginComponent />
    </>
  );
}

export default Login;
