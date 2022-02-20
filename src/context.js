import React from 'react';
import { useContext, useState } from 'react';
import useSound from 'use-sound';
import soundOn from './images/icon/Sound On.png';
import soundOff from './images/icon/Sound Off.png';
import showMusGoOn from './sound/Show.mp3';

const AppContext = React.createContext();
export const AppProvider = ({ children }) => {
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const [randomFlag, setRandomFlag] = useState(false);
  const [musicIsPlaying, setMusicIsPlaying] = useState(false);
  const [play, { pause }] = useSound(showMusGoOn, { volume: 0.5 });

  return (
    <AppContext.Provider
      value={{
        selectedPlayers,
        setSelectedPlayers,
        randomFlag,
        setRandomFlag,
        musicIsPlaying,
        setMusicIsPlaying,
        play,
        pause,
        soundOff,
        soundOn,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
