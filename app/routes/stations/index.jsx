import { getStationsData } from "../../data/rides.server";
import StationsList, {
  links as stationsStylesLinks,
} from "~/components/StationsList";

const PER_PAGE = 24;

export default function StationsInfo() {
  return (
    <>
      <StationsList />
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

  const stations = await getStationsData(paginationOptions);

  const count = 457; //Obtained manually from MongoDB
  return { stations, count };
}

//Get selected station name on clicking the target station

export function links() {
  return [...stationsStylesLinks()];
}
