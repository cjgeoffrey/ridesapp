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
  const prevPage = Math.max(currentPage - 1, finalPage);
  const nextPage = Math.min(currentPage + 1, finalPage); //limiting next page between first and last pages

  //   for (i in rides) {
  //     console.log(rides[i].id);
  //   }

  return (
    <>
      <Pagination totalPages={rides.count} pageParam="page" />
      <div id="ride-list">
        {rides.rides.map((ride, index) => (
          <div key={ride.id} className="ride">
            <Link to={ride.id}>
              <article>
                <div className="ride-info">
                  <div>{ride.DepartureStationName}</div>
                  <div>{ride.ReturnStationName}</div>
                  <div>
                    {(ride.CoveredDistanceInMeters / 1000).toFixed(2)} Km
                  </div>
                  <div>{(ride.DurationInSec / 60).toFixed(0)} minutes</div>
                </div>
                <h2>{ride.title}</h2>

                <p>{ride.content}</p>
              </article>
            </Link>
          </div>
        ))}
      </div>
      <Pagination totalPages={rides.count} pageParam="page" />
    </>
  );
}

export default RidesList;

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}
