import { useContext, useReducer, createContext } from "react";
import reducer, { initialStore } from "../reducer/store";

const StoreContext = createContext();

export function StoreProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialStore());
  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
}

export const useGlobalReducer = () => useContext(StoreContext);
