import "./App.css";
import Navbar from "./Navbar";
// import Characters from "./Characters";
// import Planets from "./Planets";
// import Vehicles from "./Vehicles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import DetailedCharacter from "./DetailedCharacter";
import DetailedPlanet from "./DetailedPlanet";
import DetailedVehicle from "./DetailedVehicle";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route
            path="/people/:id/"
            element={<DetailedCharacter></DetailedCharacter>}
          ></Route>
          <Route
            path="/planet/:id/"
            element={<DetailedPlanet></DetailedPlanet>}
          ></Route>
          <Route
            path="/vehicle/:id/"
            element={<DetailedVehicle></DetailedVehicle>}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
