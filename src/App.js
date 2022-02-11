import './App.css';
import { useState } from 'react';
import PlayerCard from './components/PlayerCard/PlayerCard';
import PlayerPhoto from './components/PlayerPhoto/PlayerPhoto';
import soundOn from './images/icon/Sound On.png';
import PickedPlayer from './components/PickedPlayer/PickedPlayer';
import Button from './components/Button/Button';
import Modal from './components/Modal/Modal';

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <header className="Header">
        <img className="SoundLogo" src={soundOn} alt="soundLogo" />
        <h1 className="Title">
          Wednesday is a good day to start something new!
        </h1>
      </header>
      <section className="SelectPlayers">
        <PlayerCard />
        <div className="PlayersContainer">
          <PlayerPhoto />
          <PlayerPhoto />
          <PlayerPhoto />
          <PlayerPhoto />
          <PlayerPhoto />
          <PlayerPhoto />
          <PlayerPhoto />
          <PlayerPhoto />
          <PlayerPhoto />
          <PlayerPhoto />
          <PlayerPhoto />
          <PlayerPhoto />
          <PlayerPhoto />
          <PlayerPhoto />
        </div>
      </section>

      <section className="PickedPlayers">
        <div className="PickedPlayersContainer">
          <PickedPlayer />
          <PickedPlayer />
          <PickedPlayer />
          <PickedPlayer />
        </div>

        <Button
          text="Submit"
          something={() => {
            setShowModal(true);
          }}
        />
      </section>
      <Modal
        content="How many teams do you want to form?"
        showModal={showModal}
      />
    </>
  );
}

export default App;
