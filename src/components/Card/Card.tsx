import { memo } from "react";

export const Card = memo(
  ({
    title,
    description = "",
    mediaURI = undefined,
  }: {
    title: string;
    description?: string;
    mediaURI?: string;
  }) => {
    return (
      <div className="card bg-neutral shadow-xl">
        {mediaURI && (
          <figure>
            <img src={mediaURI} alt={title} />
          </figure>
        )}
        <div className="card-body items-center text-center">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    );
  }
);
