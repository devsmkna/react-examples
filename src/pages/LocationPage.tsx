import { Card } from "../components/Card/Card";
import { useLocations } from "../hooks/useAPI";
import { useSearchParams } from "react-router-dom";
import { Location } from "../models/types";
import TemplatePage from "./TemplatePage";

const LocationPage = () => {
  const [searchParams] = useSearchParams();
  const page = +(searchParams.get("page") || 1);
  const [locations, maxPages] = useLocations(page, {});

  return (
    <TemplatePage maxPages={maxPages}>
      {locations.map((location: Location) => (
        <Card
          key={location.id}
          title={location.name}
          description={location.dimension}
        />
      ))}
    </TemplatePage>
  );
};

export default LocationPage;
