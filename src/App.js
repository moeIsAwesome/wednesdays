import './App.css';
import { useEffect, useState } from 'react';
import PlayerCard from './components/PlayerCard/PlayerCard';
import PlayerPhoto from './components/PlayerPhoto/PlayerPhoto';
import soundOn from './images/icon/Sound On.png';
import PickedPlayer from './components/PickedPlayer/PickedPlayer';
import Button from './components/Button/Button';
import Modal from './components/Modal/Modal';
const url = 'http://localhost:3050/api/v1/players';

function App() {
  const [players, setPlayers] = useState([]);
  const [showTeamsModal, setShowTeamsModal] = useState(false);
  const [showLineupModal, setShowLineupModal] = useState(false);

  async function getPlayers() {
    try {
      const receivedData = await fetch(url);
      const body = await receivedData.json();
      setPlayers(body.result);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getPlayers();
  }, []);

  console.log(players);
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
          {players.map((player) => {
            return <PlayerPhoto key={player._id} {...player} />;
          })}
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
