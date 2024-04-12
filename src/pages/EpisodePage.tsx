import { Card } from "../components/Card/Card";
import { useEpisodes } from "../hooks/useAPI";
import { useOutletContext, useSearchParams } from "react-router-dom";
import { Episode } from "../models/types";
import { Paginator } from "../components/Paginator/Paginator";

const EpisodePage = () => {
  const [searchParams] = useSearchParams();
  const page = +(searchParams.get("page") || 1);
  const [episodes, maxPages] = useEpisodes(page, {});
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
        {episodes.map((episode: Episode) => (
          <Card
            key={episode.name}
            title={episode.name}
            description={episode.episode}
          />
        ))}
      </div>
    </div>
  );
};

export default EpisodePage;
