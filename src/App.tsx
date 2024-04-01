import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <div>
      <h1>Main page</h1>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default App;
