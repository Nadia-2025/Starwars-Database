import Characters from "./Characters";
import Planets from "./Planets";
import Vehicles from "./Vehicles";

import { useEffect } from "react";

import { getCharacters } from "../services/api";
import { useGlobalReducer } from "../context/StoreContext";

const Home = () => {
  const { dispatch } = useGlobalReducer();

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const data = await getCharacters();
        if (!data.error) {
          dispatch({ type: "GET_CHARACTERS", payload: data.results });
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
