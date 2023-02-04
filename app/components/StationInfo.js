import React from "react";
import { useLoaderData, Link } from "@remix-run/react";
import styles from "./RidesList.css";

const StationInfo = () => {
  const station = useLoaderData();

  //   const routeMatches = useMatches();
  //   //   const params = useParams();
  //   //   const findIndividualRides = routeMatches.find(
  //   //     (match) => match.id === "routes/rides/$id"
  //   //   ).data;

  //   console.log(routeMatches);

  return (
    <div id="ride-list">
      <div key={station.id} className="ride">
        <Link to={".."}>
          <article>
            <div className="ride-info">
              <div>{station.Name}</div>
              <div>{station.Osoite}</div>
              <div>{station.Kaupunki}</div>
              <div>{station.Kapasiteet} </div>
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
