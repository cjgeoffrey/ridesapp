import { Link, useLoaderData, useSearchParams } from "@remix-run/react";
import styles from "./RidesList.css";
import Pagination from "./Pagination";
import { useRef } from "react";

const PER_PAGE = 20;
function StationsList() {
  const stations = useLoaderData();

  const stationRef = useRef();

  const finalPage = Math.ceil(stations.count / PER_PAGE);

  return (
    <>
      <Pagination totalPages={finalPage} pageParam="page" />
      <div id="ride-list">
        {stations.stations.map((stations) => (
          <div key={stations.id} className="ride">
            {/* Link here points to stations.$stationId.jsx to render content dyamically */}
            <Link to={stations.id}>
              <article>
                <div className="ride-info">
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      textAlign: "center",
                    }}>
                    <div style={{ color: "black", marginBottom: "2vh" }}>
                      Station Name:
                    </div>{" "}
                    <div
                      style={{ fontWeight: "bold", fontSize: "large" }}
                      ref={stationRef}>
                      {stations.Name}
                    </div>
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

export default StationsList;

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}
