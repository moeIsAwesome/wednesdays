import './App.css';
import { useEffect, useState } from 'react';
import PlayerCard from './components/PlayerCard/PlayerCard';
import PlayerPhoto from './components/PlayerPhoto/PlayerPhoto';
import soundOn from './images/icon/Sound On.png';
import PickedPlayer from './components/PickedPlayer/PickedPlayer';
import Button from './components/Button/Button';
import Modal from './components/Modal/Modal';

function App() {
  const [showTeamsModal, setShowTeamsModal] = useState(false);
  const [showLineupModal, setShowLineupModal] = useState(false);
  const url = 'http://localhost:3050/api/v1/players';

  const getPlayers = async () => {
    const receivedData = await fetch(url);
    const body = await receivedData.json();
    console.log(body);
  };
  useEffect(() => {
    getPlayers();
  }, []);

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
            setShowTeamsModal(true);
          }}
        />
      </section>
      {showTeamsModal && (
        <Modal
          title="Teams"
          content="How many teams do you want to form?"
          op1="2Teams"
          op2="3Teams"
          setShowTeamsModal={setShowTeamsModal}
          setShowLineupModal={setShowLineupModal}
        />
      )}

      {showLineupModal && (
        <Modal
          title="LineUp Mode"
          content="Do you want fair lineups or random ones?"
          op1="Fair"
          op2="Random"
          setShowLineupModal={setShowLineupModal}
        />
      )}
    </>
  );
}

export default App;
