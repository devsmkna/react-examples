import React from "react";
import "./App.css";
import RCard from "./components/RCard";
import { people } from "./user/data";

const App = () => {
  return (
    <div className="people-cards">
      {people.map(({ thumbnail, name, workPosition, badges }) => (
        <RCard thumbnail={thumbnail} title={name} description={workPosition} badges={badges} />
      ))}
    </div>
  );
};

export default App;
