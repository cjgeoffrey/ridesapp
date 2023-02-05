import { Link } from "@remix-run/react";
import styles from "../styles/homeStyles.css";

export default function Index() {
  return (
    <div className="homeContainer">
      <h1>Welcome to Rides App </h1>
      <div
        className="homeLinksContainer"
        style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
        <Link to="/rides">
          {" "}
          <div className="homeLinks">Rides</div>
        </Link>
        <Link to="/stations">
          <div className="homeLinks">Stations</div>
        </Link>
      </div>
    </div>
  );
}

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}
