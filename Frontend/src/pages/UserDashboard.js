// import MapboxDirections from "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions";
import mapboxgl from "mapbox-gl";
import { useEffect, useRef, useState } from "react";
import Spinner from "../components/Spinner";
import "mapbox-gl/dist/mapbox-gl.css";
function UserDashboard() {
  mapboxgl.accessToken= process.env.REACT_APP_MAP_ACCESS_TOKEN;
  const mapContainer = useRef(null);
  const map = useRef(null);
  let [zoom, setZoom] = useState(14);
  let [isLoading, setIsLoading] = useState(false);
  let [userLocation, setUserLocation] = useState({
    lat: null,
    lng: null,
    access: false,
  });

  useEffect(() => {
    if (!map.current) {
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/abdelrhman21/clsog3tq102as01r44wzq6i43",
        center: [0, 0],
        zoom: zoom,
      });
    }
    console.log("here");
    let intervalId = setInterval(() => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success, error);
      } else {
        console.log("Geolocation not supported");
      }

      async function success(position) {
        setUserLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
          access: true,
        });
        setIsLoading((isLoading = true));
        // map.addControl(
        //   new MapboxDirections({
        //     accessToken: mapboxgl.accessToken,
        //   }),
        //   "top-left"
        // );
        console.log(userLocation);
      }
      function error() {
        console.log("Unable to retrieve your location");
        console.log(userLocation);
      }
    }, 5000);
    return () => clearInterval(intervalId);
  }, [userLocation]);
  useEffect(() => {
    if (map.current) {
      map.current.jumpTo({ center: [userLocation.lng, userLocation.lat] });
      new mapboxgl.Marker()
        .setLngLat([userLocation.lng, userLocation.lat])
        .addTo(map.current)
        .setPopup(new mapboxgl.Popup({ offset: 25 }));
    }
  }, [isLoading]);

  return (
    <div className=" overflow-hidden">
      {isLoading ? "" : <Spinner></Spinner>}
      <div
        ref={mapContainer}
        className={`map-container m-2 ${isLoading ? "" : "opacity-0"} `}
      />
    </div>
  );
}
export default UserDashboard;
