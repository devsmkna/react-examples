import React from "react";
import "./RFrame.css";

type RFrameType = {
  children?: JSX.Element;
};

const RFrame = ({ children }: RFrameType) => {
  return (
    <div className="r-frame">
        {children}
    </div>
  );
};

export default RFrame;
