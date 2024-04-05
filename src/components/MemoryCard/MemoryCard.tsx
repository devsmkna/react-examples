import { memo } from "react";

export const MemoryCard = memo(
  ({
    mediaURI,
    id,
    index,
    show,
    clickHandler,
  }: {
    mediaURI: string;
    id: number;
    index: number;
    show: boolean;
    clickHandler: (id: number, index: number) => void;
  }) => {
    console.log("rerender card")
    return (
      <div
        className="card bg-white shadow-xl p-2"
        onClick={() => {
          clickHandler(id, index);
        }}
      >
        <figure>
          <img
            className={`opacity-0 rounded-lg ${show && "opacity-100"}`}
            style={{ transition: "opacity 0.5s" }}
            src={mediaURI}
            alt="memory card"
            draggable={false}
          />
        </figure>
      </div>
    );
  }
);
