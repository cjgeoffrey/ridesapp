import { Link } from "@remix-run/react";
import styles from "../styles/homeStyles.css";

export default function Index() {
  return (
    <>
      <h1>Welcome to Rides App </h1>
      <div
        className="homeLinksContainer"
        style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
        <div className="homeLinks">
          <Link to="/rides">Rides</Link>
        </div>
        <div className="homeLinks">
          <Link to="/stations">Stations</Link>
        </div>
      </div>
    </>
  );
}

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}
