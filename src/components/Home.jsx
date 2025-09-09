import Characters from "./Characters";
import Planets from "./Planets";
import Vehicles from "./Vehicles";

import { useEffect } from "react";

import { getCharacters, getPlanets, getVehicles } from "../services/api";
import { useGlobalReducer } from "../context/StoreContext";

const Home = () => {
  const { dispatch } = useGlobalReducer();

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const [characterData, planetData, vehicleData] = await Promise.all([
          getCharacters(),
          getPlanets(),
          getVehicles(),
        ]);
        if (!characterData.error) {
          dispatch({ type: "GET_CHARACTERS", payload: characterData.results });
        }
        if (!planetData.error) {
          dispatch({ type: "GET_PLANETS", payload: planetData.results });
        }
        if (!vehicleData.error) {
          dispatch({ type: "GET_VEHICLES", payload: vehicleData.results });
        }
      } catch (err) {
        console.error(err);
      }
    };
    fetchCharacters();
  }, [dispatch]);
  return (
    <>
      <Characters></Characters>
      <Planets></Planets>
      <Vehicles></Vehicles>
    </>
  );
};
export default Home;
