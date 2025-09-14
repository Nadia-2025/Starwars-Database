import { useContext, useReducer, useEffect, createContext } from "react";
import reducer, { initialStore } from "../reducer/store";
import { getCharacters, getPlanets, getVehicles } from "../services/api";

const StoreContext = createContext();

export function StoreProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialStore());

  useEffect(() => {
    const storedData = localStorage.getItem("store");
    if (storedData) {
      dispatch({
        type: "GET_CHARACTERS",
        payload: JSON.parse(storedData).characters || [],
      });
      dispatch({
        type: "GET_PLANETS",
        payload: JSON.parse(storedData).planets || [],
      });
      dispatch({
        type: "GET_VEHICLES",
        payload: JSON.parse(storedData).vehicles || [],
      });
      return;
    }

    const fetchData = async () => {
      try {
        const characters = await getCharacters();
        const planets = await getPlanets();
        const vehicles = await getVehicles();

        dispatch({
          type: "GET_CHARACTERS",
          payload: characters,
        });
        dispatch({
          type: "GET_PLANETS",
          payload: planets,
        });
        dispatch({
          type: "GET_VEHICLES",
          payload: vehicles,
        });

        localStorage.setItem(
          "store",
          JSON.stringify({ characters, planets, vehicles })
        );
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
}

export const useGlobalReducer = () => useContext(StoreContext);
