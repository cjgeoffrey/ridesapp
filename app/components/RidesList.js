import { Link, useLoaderData, useSearchParams } from "@remix-run/react";
import Pagination from "./Pagination";
import styles from "./RidesList.css";

const PER_PAGE = 20;

function RidesList() {
  const rides = useLoaderData();
  const [searchParams] = useSearchParams();

  const currentPage = searchParams.get("page")
    ? Number(searchParams.get("page"))
    : 1;
  const finalPage = Math.ceil(rides.count / PER_PAGE);

  return (
    <>
      <Pagination totalPages={finalPage} pageParam="page" />
      <div id="ride-list">
        {rides.rides.map((ride) => (
          <div key={ride.id} className="ride">
            <Link to={ride.id}>
              <article>
                <div className="ride-info">
                  <div>
                    <span style={{ color: "black" }}>Departure Station:</span>{" "}
                    {ride.DepartureStationName}
                  </div>
                  <div>
                    {" "}
                    <span style={{ color: "black" }}>Return Station:</span>{" "}
                    {ride.ReturnStationName}
                  </div>
                  <div>
                    <span style={{ color: "black" }}>Trip Distance:</span>{" "}
                    {(ride.CoveredDistanceInMeters / 1000).toFixed(2)} Km
                  </div>
                  <div>
                    <span style={{ color: "black" }}>Trip Duration:</span>{" "}
                    {(ride.DurationInSec / 60).toFixed(0)} minutes
                  </div>
                </div>
              </article>
            </Link>
          </div>
        ))}
      </div>
      <Pagination totalPages={finalPage} pageParam="page" />
    </>
  );
}

export default RidesList;

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}
