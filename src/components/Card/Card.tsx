import { ReactNode, memo } from "react";

export const Card = memo(
  ({
    title,
    description = "",
    mediaURI = undefined,
    children,
  }: {
    title: string;
    description?: string;
    mediaURI?: string;
    children?: ReactNode;
  }) => {
    return (
      <div className="card bg-neutral shadow-xl flex flex-col justify-between">
        {mediaURI && (
          <figure className="h-64 w-full overflow-hidden bg-white">
            <img className="object-contain h-64" src={mediaURI} alt={title} />
          </figure>
        )}
        <div className="card-body text-start flex-1">
          <h2 className="card-title items-start align-left h-36">{title}</h2>
          <p className="text-sm">{description}</p>
          <div className="card-actions self-end justify-self-end">{children}</div>
        </div>
      </div>
    );
  }
);
