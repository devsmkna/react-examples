import { Card } from "../components/Card/Card";
import { useEpisodes } from "../hooks/useAPI";
import { useSearchParams } from "react-router-dom";
import { Episode } from "../models/types";

const EpisodePage = () => {
  const [searchParams] = useSearchParams();
  const page = +(searchParams.get("page") || 1);
  const [episodes] = useEpisodes(page, {});

  return (
    <div>
      <div className="characters-list-wrapper">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 px-4">
        {episodes.map((episode: Episode) => (
          <Card
            key={episode.name}
            title={episode.name}
            description={episode.episode}
          />
        ))}
      </div>
    </div>
    </div>
  );
};

export default EpisodePage;
