import FirstSection from "../components/FirstSection";
import AboutUs from "../pages/AboutUs";
import Preload from "../components/Preloads";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import img1 from "../images/e4114c7f3acf65369f9a0fbaf5ebf38e.jfif";

function HomePage({bus,setBus,setSearch}) {
  return (
    <div className="relative bg-slate-800 lg:bg-transparent">
      {/* <Preload /> */}
      <img
        src={img1}
        alt=""
        className=" absolute -z-20 object-cover opacity-0 lg:opacity-100 "
      />
      <Navbar />
      <FirstSection bus={bus} setBus={setBus} setSearch={setSearch} />
      <AboutUs />
      <Footer />
    </div>
  );
}

export default HomePage;
