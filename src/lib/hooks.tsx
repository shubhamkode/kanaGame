import { createContext, useContext } from "react";

export type GlobalContext = {
  restartGame: () => void;
};

const MyGlobalContext = createContext<GlobalContext>({
  restartGame: () => {},
});

export default MyGlobalContext.Provider;

export const useGlobalContext = () => useContext(MyGlobalContext);
