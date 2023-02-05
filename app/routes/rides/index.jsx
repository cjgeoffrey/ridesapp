import { useLoaderData, Link, useMatches } from "@remix-run/react";
import { getRidesData } from "../../data/rides.server";
import RidesList, { links as rideStylesLinks } from "~/components/RidesList";

const PER_PAGE = 60;
export default function RidesInfo() {
  return (
    <>
      <RidesList />
    </>
  );
}

//Get ride data from the database
export async function loader({ request }) {
  const url = new URL(request.url);
  const query = url.searchParams;
  const currentPage = Math.max(Number(query.get("page") || 1), 1);

  const paginationOptions = {
    take: PER_PAGE,
    skip: (currentPage - 1) * PER_PAGE,
  };

  const rides = await getRidesData(paginationOptions);

  const count = 3131088; //Obtained manually from MongoDB

  return { rides, count };
}

export function links() {
  return [...rideStylesLinks()];
}
