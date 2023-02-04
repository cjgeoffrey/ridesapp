import React from "react";
import { useLoaderData, Link } from "@remix-run/react";
import styles from "./RidesList.css";

const RideInfo = () => {
  const ride = useLoaderData();

  return (
    <div id="ride-list">
      <div key={ride.id} className="ride">
        <div className="ride-info">
          <div>{ride.DepartureStationName}</div>
          <div>{ride.ReturnStationName}</div>
          <div>{ride.DistanceCovered}</div>
          <div>{(ride.DurationInSec / 60).toFixed(0)} minutes</div>
        </div>
      </div>
    </div>
  );
};

export default RideInfo;

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}
