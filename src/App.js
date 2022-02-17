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
  const [playerCard, setPlayerCard] = useState([]);
  const [selectedPlayers, setSelectedPlayers] = useState([]);

  async function getPlayers() {
    try {
      const receivedData = await fetch(url);
      const body = await receivedData.json();
      setAllPlayers(body.result);
      console.log(body.result);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getPlayers();
  }, []);

  console.log(selectedPlayers);
  const playerCardHandler = (
    name,
    img,
    Defence,
    Shoot,
    Pass,
    Dribble,
    Speed
  ) => {
    setPlayerCard({
      name: name,
      img: img,
      Defence: Defence,
      Shoot: Shoot,
      Pass: Pass,
      Dribble: Dribble,
      Speed: Speed,
    });
  };

  const addToPlayersListAndRemoveFromPlayersList = (
    _id,
    name,
    img,
    lineupImg,
    Defence,
    Shoot,
    Pass,
    Dribble,
    Speed
  ) => {
    if (selectedPlayers.some((item) => item._id === _id)) {
      setSelectedPlayers(selectedPlayers.filter((el) => el._id !== _id));
    } else {
      setSelectedPlayers([
        ...selectedPlayers,
        {
          _id: _id,
          name: name,
          img: img,
          lineupImg: lineupImg,
          Defence: Defence,
          Shoot: Shoot,
          Pass: Pass,
          Dribble: Dribble,
          Speed: Speed,
        },
      ]);
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
        <PlayerCard
          name={playerCard.name}
          img={playerCard.img}
          Defence={playerCard.Defence}
          Shoot={playerCard.Shoot}
          Pass={playerCard.Pass}
          Dribble={playerCard.Dribble}
          Speed={playerCard.Speed}
          selectedPlayers={selectedPlayers}
        />
        <div className="PlayersContainer">
          {allPlayers.map((player) => {
            return (
              <PlayerPhoto
                key={player._id}
                {...player}
                playerCardHandler={playerCardHandler}
                selectedPlayers={selectedPlayers}
                setSelectedPlayers={setSelectedPlayers}
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
          {selectedPlayers.length === 0 ? (
            <div className="PickedPlayerContainer">
              <img
                className="PickedPlayerPhoto"
                src="https://lh3.google.com/u/2/d/1PL2fMxf6CpHlzt7EI8sJt0NpxTiP5Acm=w1920-h937"
                alt="Unknown"
              />
              <p className="PickedPlayerName">Unknown</p>
            </div>
          ) : (
            selectedPlayers.map((pplayer, index) => {
              return (
                <PickedPlayer
                  key={index}
                  lineupName={pplayer.name}
                  lineupPhoto={pplayer.lineupImg}
                  selectedPlayers={selectedPlayers}
                />
              );
            })
          )}
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
