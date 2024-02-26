import React from "react";
import "./RCard.css";

const RCard = ({
  thumbnail,
  title,
  description,
  badges,
}: {
  thumbnail: string;
  title: string;
  description: string;
  badges: string[];
}) => {
  return (
    <>
      <div className="r-card">
        <img className="r-card-thumbnail" src={thumbnail} alt={title} />
        <div className="r-card-content">
          <h3 className="r-card-title">{title}</h3>
          <p className="r-card-description">{description}</p>
          <p>
            {badges.map((badge) => (
              <span
                className={
                  "r-card-badge_" + badge.toLowerCase().split(" ").join("")
                }
              >
                {badge}
              </span>
            ))}
          </p>
        </div>
      </div>
    </>
  );
};

export default RCard;
