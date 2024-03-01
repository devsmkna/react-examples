import React from "react";
import "./App.css";
import RCard from "./components/RCard/RCard";
import RFrame from "./components/RFrame/RFrame";
import RCounter from "./components/RCounter/RCounter";
import RCharacters from "./components/RCharacters/RCharacters";
import { people } from "./models/user/data";
import RReverseString from "./components/RReverseString/RReverseString";

const App = () => {
  return (
    <>
      {/* <h1>Card Component</h1>
      <div className="people-cards">
        {people.map(({ thumbnail, name, workPosition, badges }) => (
          <RCard
            thumbnail={thumbnail}
            title={name}
            description={workPosition}
            badges={badges}
          />
        ))}
      </div> */}

      {/* <h1>Frame Component</h1>
      <div className="frame-wrapper">
        <RFrame>
          <>
            <h1>Ciao</h1>
            <p>come stai?</p>
            <p>va bene?</p>
            <p>come va?</p>
          </>
        </RFrame>
        <RFrame>
          <p>come va?</p>
        </RFrame>
        <RFrame />
      </div> */}

      {/* <div className="counter-wrapper">
        <h1>Counter Component</h1>
        <RCounter start={0} />
        <h1>Reverse String Component</h1>
        <RReverseString />
      </div> */}

      <RCharacters />
    </>
  );
};

export default App;
