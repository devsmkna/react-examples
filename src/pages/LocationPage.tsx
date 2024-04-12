import { Card } from "../components/Card/Card";
import { useLocations } from "../hooks/useAPI";
import { useOutletContext, useSearchParams } from "react-router-dom";
import { Location } from "../models/types";
import { Paginator } from "../components/Paginator/Paginator";

const LocationPage = () => {
  const [searchParams] = useSearchParams();
  const page = +(searchParams.get("page") || 1);
  const [locations, maxPages] = useLocations(page, {});
  const [previousPage, nextPage] = useOutletContext<[() => void, () => void]>();

  return (
    <div>
      <div className="text-center my-4">
        <Paginator
          currentPage={page}
          maxPages={maxPages}
          nextPage={nextPage}
          previousPage={previousPage}
        />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 px-4">
        {locations.map((location: Location) => (
          <Card
            key={location.id}
            title={location.name}
            description={location.dimension}
          />
        ))}
      </div>
    </div>
  );
};

export default LocationPage;
