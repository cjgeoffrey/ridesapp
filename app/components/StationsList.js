import { Link, useLoaderData } from "@remix-run/react";
import styles from "./RidesList.css";

function StationsList() {
  const stations = useLoaderData();

  return (
    <div id="ride-list">
      {stations.stations.map((stations, index) => (
        <div key={stations.id} className="ride">
          {/* Link here points to notes.$noteId.jsx to render content dyamically */}
          <Link to={stations.id}>
            <article>
              <div className="ride-info">
                <div>#{index + 1}</div>
                <div>{stations.Name}</div>
                <div>{stations.Osoite}</div>
                <div>{stations.Kaupunki}</div>
                <div>{stations.Kapasiteet} </div>
              </div>
              <h2>{stations.title}</h2>

              <p>{stations.content}</p>
            </article>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default StationsList;

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}
