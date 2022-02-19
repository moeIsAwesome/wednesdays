import React from 'react';
import { useContext, useState } from 'react';

const AppContext = React.createContext();
export const AppProvider = ({ children }) => {
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const [randomFlag, setRandomFlag] = useState(false);
  return (
    <AppContext.Provider
      value={{ selectedPlayers, setSelectedPlayers, randomFlag, setRandomFlag }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
