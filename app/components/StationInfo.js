import React from "react";
import { useLoaderData, Link } from "@remix-run/react";
import styles from "./RidesList.css";

const StationInfo = () => {
  const station = useLoaderData();

  return (
    <div id="ride-list">
      <div key={station.id} className="ride">
        <Link to={".."}>
          <article>
            <div className="ride-info">
              <div>
                {" "}
                <span style={{ color: "black" }}>Station Name:</span>{" "}
                {station.Name}
              </div>
              <div>
                {" "}
                <span style={{ color: "black" }}>Address:</span>{" "}
                {station.Osoite}
              </div>
              <div>
                {" "}
                <span style={{ color: "black" }}>City:</span> {station.Kaupunki}
              </div>
              <div>
                {" "}
                <span style={{ color: "black" }}>Bike Capacity:</span>{" "}
                {station.Kapasiteet}{" "}
              </div>
              <div>
                {" "}
                <span style={{ color: "black" }}>Departure Rides:</span>{" "}
                {station.ridesDataFromStation}
              </div>
              <div>
                {" "}
                <span style={{ color: "black" }}>Return Rides:</span>{" "}
                {station.ridesDataToStation}
              </div>
            </div>
          </article>
        </Link>
      </div>
    </div>
  );
};

export default StationInfo;

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}
