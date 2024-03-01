// import MapboxDirections from "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions";
import Navbar from "../components/Navbar";
import mapboxgl from "mapbox-gl";
import { useEffect, useRef, useState } from "react";
import Spinner from "../components/Spinner";
import "mapbox-gl/dist/mapbox-gl.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function UserDashboard({ busNum, setRequested }) {
  let [xs, setXs] = useState(null);
  const navigate = useNavigate();
  const isExpired = async () => {
    const { data } = await axios.get(
      `http://localhost:8000/user/userinfo/${localStorage.getItem("xs")}`
    );
    setXs(data);
    if (data == "jwt expired" || localStorage.getItem("xs") == undefined) {
      navigate("/type");
    } else if (data.type != "user") {
      navigate("/home");
    }
  };
  useEffect(() => {
    isExpired();
  }, []);

  mapboxgl.accessToken = process.env.REACT_APP_MAP_ACCESS_TOKEN;
  const mapContainer = useRef(null);
  const map = useRef(null);
  let [zoom, setZoom] = useState(14);
  let [err, setErr] = useState("");
  let [isLoading, setIsLoading] = useState(false);
  let [busesData, setBusesData] = useState();
  let [userLocation, setUserLocation] = useState({
    lat: null,
    lng: null,
    access: false,
  });

  async function updateUserLocationInDB() {
    const res = await axios.put(`http://127.0.0.1:8000/updatelatlanguser`, {
      lat: userLocation.lat,
      lang: userLocation.lng,
      userId: xs.id,
    });
    console.log(res);
    navigate("/businfo");
  }

  async function getbusesData() {
    const res = await axios.get(`http://127.0.0.1:8000/bus/${busNum}`);
    setBusesData(res.data);

    res.data.forEach((item) => {
      const marker = new mapboxgl.Marker({ color: "green" })
        .setLngLat([item.lang, item.lat])
        .addTo(map.current);

      // const popup = new mapboxgl.Popup({
      //   offset: 25,
      //   maxWidth: "100px",
      //   maxHeight: "20px",
      // }).setHTML(`<h3>Bus ${busNum}</h3>`);

      marker.getElement().addEventListener("click", (e) => {
        setRequested({ bus: item, user: xs });
        updateUserLocationInDB();
      });
    });
  }

  useEffect(() => {
    if (!map.current) {
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/streets-v12",
        center: [0, 0],
        zoom: zoom,
      });
      // mapboxgl.setRTLTextPlugin(
      //   "https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.2.3/mapbox-gl-rtl-text.js"
      // );
    }
    console.log("here");
    let intervalId = setInterval(() => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success, error);
      } else {
        console.log("Geolocation not supported");
      }
      if (busNum) {
        getbusesData();
      } else {
      }
      async function success(position) {
        setUserLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
          access: true,
        });
        setIsLoading((isLoading = true));
        console.log(userLocation);
      }
      function error() {
        setErr((err = "Unable to retrieve your location"));
        console.log(userLocation);
      }
    }, 5000);
    return () => clearInterval(intervalId);
  }, [userLocation]);
  useEffect(() => {
    if (map.current) {
      map.current.jumpTo({ center: [userLocation.lng, userLocation.lat] });
      const markerUserPopup = new mapboxgl.Popup({
        offset: 25,
        maxWidth: "100px",
        maxHeight: "20px",
      }).setHTML("<h3>Your position</h3>");
      new mapboxgl.Marker()
        .setLngLat([userLocation.lng, userLocation.lat])
        .addTo(map.current)
        .setPopup(markerUserPopup)
        .togglePopup()
        .getElement();
    }
  }, [isLoading]);

  return (
    <>
      <Navbar black={true} />
      {err ? (
        <div className=" text-center text-[28px] p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400">
          {err}
        </div>
      ) : (
        <div className=" overflow-hidden">
          <div className="p-4  text-lg text-center rounded-lg bg-green-50 dark:bg-gray-800 dark:text-red-400">
            The Buses Represented with the Green flag pick the Nearest one to
            You
          </div>
          {isLoading ? "" : <Spinner></Spinner>}
          <div
            ref={mapContainer}
            className={`map-container m-2 mt-0 ${
              isLoading ? "" : "opacity-0"
            } `}
          />
        </div>
      )}
    </>
  );
}
export default UserDashboard;
