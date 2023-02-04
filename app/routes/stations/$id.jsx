import { Link, useLoaderData, useMatches, useParams } from "@remix-run/react";
import RideInfo from "../../components/RideInfo";
import RideList from "../../components/ridesList";
import StationInfo, {
  links as stationInfoStylesLinks,
} from "../../components/StationInfo";
import { getStationData } from "../../data/rides.server";

export default function RideDetailsPage() {
  return <StationInfo />;
}

export async function loader({ params }) {
  const stationId = params.id;
  const stationData = await getStationData(stationId);

  return stationData;
}

export function links() {
  return [...stationInfoStylesLinks()];
}
