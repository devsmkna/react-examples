import { Card } from "../components/Card/Card";
import { useLocations } from "../hooks/useAPI";
import { useSearchParams } from "react-router-dom";
import { Location } from "../models/types";

const LocationPage = () => {
  const [searchParams] = useSearchParams();
  const page = +(searchParams.get("page") || 1);
  const [locations] = useLocations(page, {});

  return (
    <div>
      <div className="characters-list-wrapper">
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
    </div>
  );
};

export default LocationPage;
