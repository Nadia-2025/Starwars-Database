import "./App.css";
import Navbar from "./Navbar";
// import Characters from "./Characters";
// import Planets from "./Planets";
// import Vehicles from "./Vehicles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
