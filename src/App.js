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
  const [allPlayers, setAllPlayers] = useState([]);
  const [showTeamsModal, setShowTeamsModal] = useState(false);
  const [showLineupModal, setShowLineupModal] = useState(false);
  const [selectedPlayers, setSelectedPlayers] = useState([]);

  async function getPlayers() {
    try {
      const receivedData = await fetch(url);
      const body = await receivedData.json();
      setAllPlayers(body.result);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getPlayers();
  }, []);
  console.log(`Show Teams Modal: ${showTeamsModal}`);
  console.log(`Show Lineup Modal: ${showLineupModal}`);

  const addToPlayersListAndRemoveFromPlayersList = (playerName) => {
    if (selectedPlayers.includes(playerName)) {
      setSelectedPlayers(selectedPlayers.filter((el) => el !== playerName));
    } else {
      setSelectedPlayers([...selectedPlayers, playerName]);
    }
  };

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
          {allPlayers.map((player) => {
            return (
              <PlayerPhoto
                onClick={() => alert('heu')}
                key={player._id}
                {...player}
                addToPlayersListAndRemoveFromPlayersList={
                  addToPlayersListAndRemoveFromPlayersList
                }
              />
            );
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
          functionalityOnClick={(e) => {
            e.preventDefault();
            if (selectedPlayers.length < 2) {
              alert('We need at least two players');
            } else {
              setShowTeamsModal(true);
            }
          }}
        />
      </section>
      {showTeamsModal && (
        <Modal
          title="Teams"
          content="How many teams do you want to form?"
          op1="2Teams"
          op2="3Teams"
          showLineupModal={showLineupModal}
          showTeamsModal={showTeamsModal}
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
          showLineupModal={showLineupModal}
          showTeamsModal={showTeamsModal}
          setShowTeamsModal={setShowTeamsModal}
          setShowLineupModal={setShowLineupModal}
        />
      )}
    </>
  );
}

export default App;
