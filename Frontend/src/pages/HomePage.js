import FirstSection from "../components/FirstSection";
import AboutUs from "../pages/AboutUs";
import Preload from "../components/Preloads";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import img1 from "../images/e4114c7f3acf65369f9a0fbaf5ebf38e.jfif";

function HomePage({data,setData}) {
  return (
    <div className="relative bg-black lg:bg-transparent">
      {/* <Preload /> */}
      <img
        src={img1}
        className=" absolute -z-20 object-cover opacity-0 lg:opacity-100 "
      />
      <Navbar />
      <FirstSection data={data} setData={setData} />
      <AboutUs />
      <Footer />
    </div>
  );
}

export default HomePage;
