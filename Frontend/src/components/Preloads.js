import React, { useEffect } from "react";
import { preLoaderAnim } from "../animation/index";
import "../styles/preload.css";
const Preload = () => {
  useEffect(() => {
    preLoaderAnim();
  }, []);
  return (
    <div className="preloader">
      <div className="texts-container">
        <span>Welcome </span>

        <span>in </span>

        <span>our </span>

        <span>website </span>
      </div>
    </div>
  );
};

export default Preload;
