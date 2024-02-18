import FirstSection from "../components/FirstSection";
import AboutUs from "../pages/AboutUs";
import Preload from "../components/Preloads";
import Footer from "../components/Footer";
function HomePage() {
  return (
    <div>
      {/* <Preload /> */}
      <FirstSection />
      <AboutUs />
      <Footer />
    </div>
  );
}

export default HomePage;
