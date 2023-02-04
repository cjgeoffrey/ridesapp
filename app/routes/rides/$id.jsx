import { Link, useLoaderData, useMatches, useParams } from "@remix-run/react";
import RideInfo, {
  links as rideInfoStylesLinks,
} from "../../components/RideInfo";

import { getRideData } from "../../data/rides.server";

export default function RideDetailsPage() {
  return <RideInfo />;
}

export async function loader({ params }) {
  const rideId = params.id;
  const rideData = await getRideData(rideId);

  return rideData;
}

export function links() {
  return [...rideInfoStylesLinks()];
}
