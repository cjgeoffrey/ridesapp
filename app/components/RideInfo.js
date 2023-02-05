import React from "react";
import { useLoaderData } from "@remix-run/react";
import styles from "./RidesList.css";

const RideInfo = () => {
  const ride = useLoaderData();

  return (
    <div id="ride-list">
      <div key={ride.id} className="ride">
        <div className="ride-info">
          <div>
            {" "}
            <span style={{ color: "black" }}>Departure Station:</span>{" "}
            {ride.DepartureStationName}
          </div>
          <div>
            <span style={{ color: "black" }}>Return Station:</span>{" "}
            {ride.ReturnStationName}
          </div>
          <div>
            {" "}
            <span style={{ color: "black" }}>Trip Distance:</span>{" "}
            {(ride.CoveredDistanceInMeters / 1000).toFixed(2)}
          </div>
          <div>
            <span style={{ color: "black" }}>Trip Duration:</span>{" "}
            {(ride.DurationInSec / 60).toFixed(0)} minutes
          </div>
        </div>
      </div>
    </div>
  );
};

export default RideInfo;

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}
