import { Card } from "../components/Card/Card";
import { useEpisodes } from "../hooks/useAPI";
import { useSearchParams } from "react-router-dom";
import { Episode } from "../models/types";
import TemplatePage from "./TemplatePage";

const EpisodePage = () => {
  const [searchParams] = useSearchParams();
  const page = +(searchParams.get("page") || 1);
  const [episodes, maxPages] = useEpisodes(page, {});

  return (
    <TemplatePage maxPages={maxPages}>
      {episodes.map((episode: Episode) => (
          <Card
            key={episode.name}
            title={episode.name}
            description={episode.episode}
          />
        ))}
    </TemplatePage>
  );
};

export default EpisodePage;
