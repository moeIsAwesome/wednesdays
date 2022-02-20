import './App.css';
import styles from './components/PickedPlayer/PickedPlayer.module.css';
import { useEffect, useState } from 'react';
import PlayerCard from './components/PlayerCard/PlayerCard';
import PlayerPhoto from './components/PlayerPhoto/PlayerPhoto';

import PickedPlayer from './components/PickedPlayer/PickedPlayer';
import Button from './components/Button/Button';
import Modal from './components/Modal/Modal';
import { useGlobalContext } from './context';

const url = 'http://localhost:3050/api/v1/players';

function App() {
  const [allPlayers, setAllPlayers] = useState([]);
  const [showTeamsModal, setShowTeamsModal] = useState(false);
  const [showLineupModal, setShowLineupModal] = useState(false);

  const {
    selectedPlayers,
    setSelectedPlayers,
    musicIsPlaying,
    setMusicIsPlaying,
    play,
    pause,
    soundOn,
    soundOff,
  } = useGlobalContext();

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
          Overall: Math.ceil((Defence + Shoot + Pass + Dribble + Speed) / 5),
        },
      ]);
    }
  };

  const [teamsNum, setTeamsNum] = useState('two');
  const [fairOrRand, setFairOrRand] = useState('fair');

  const radioTeamsOnChangeHandler = (e) => {
    setTeamsNum(e.target.id);
  };

  const radioFairsOnChangeHandler = (e) => {
    setFairOrRand(e.target.id);
  };

  return (
    <main>
      <header className="Header">
        <img
          className="SoundLogo"
          src={musicIsPlaying ? soundOn : soundOff}
          alt="soundLogo"
          onClick={() => {
            setMusicIsPlaying(!musicIsPlaying);
            musicIsPlaying ? pause() : play();
          }}
        />

        <h1 className="Title">
          Wednesday is a good day to start something new!
        </h1>
      </header>
      <section className="SectionSelectPlayers">
        <div className="PlayerCardArea">
          <PlayerCard selectedPlayers={selectedPlayers} />
        </div>
        <div className="SelectPlayersArea">
          <div className="PlayersContainer">
            {allPlayers.map((player) => {
              return (
                <PlayerPhoto
                  key={player._id}
                  {...player}
                  selectedPlayers={selectedPlayers}
                  setSelectedPlayers={setSelectedPlayers}
                  addToPlayersListAndRemoveFromPlayersList={
                    addToPlayersListAndRemoveFromPlayersList
                  }
                />
              );
            })}
          </div>
        </div>
      </section>

      <section className="SectionPickedPlayers">
        <div className="PickedPlayerContainer">
          <div className="PickedPlayerTop">
            <p className="NumberOfPlayers">
              Number of players: {selectedPlayers.length}
            </p>
          </div>
          <div className="PickedPlayerBody">
            {selectedPlayers.length === 0 ? (
              <div className={styles.Container}>
                <img
                  className={styles.Photo}
                  src="https://lh3.googleusercontent.com/XhcFl6QRLq0bCLLK8KzUMhWxIGCDqZjKFDe7AK2KxJ5T3pN2E8BJl1Em5YtCEp6uwmBctpCpMvSxzIuGpemazORF26wSVCaND_odgBoIqCg0Kw0oPqBZe3brdO69m4aghEK7UCdiE-1LaBqoTP2HS2wOhTl45_w7OxTE0hN6XdZ71Dj9TQ6KwNoesPHbx8HOOBHwBgx2OwThpjSN8IwD1LEowTVf8A-IHRrMT2QlRg-Fvc4lGkg0oIfq8c05fkuOlfsMJ6c1W2EXHCfBQXWc0_yLjFmHgvfcI7UJ0vzAzODBH5LTOXk4iGshFbJ_ndSy7jsHyiNbrJFChJIgUeR04b7W-zX2azu1PAQsNU-Be-5cif-qsEs3dWB_sc8EgneP9YWBMlzNkhoVebK1yvIx1LvV4gAQ9l5F6Z8bqrVe2M46ZBNbh85tx39JGh6bYSrCtNBKYJIPZN6GSZBg0nziNYWAnacBWw3DF0ZtBKvTD7_NCuRpiNkMCgP28yPzurktY1FgMuGVs69fnPdzrsCmtnXiIuySEZ_LwnTIJ4F9YHoq_wBnJ61qjeoyg_elD7YyG1P3AkRziTRYAkfuqa71o6VCED_bRJd8JZv2xHhL2N8WjUQHBjZCkWQwLoRIPT7TWmtsbxuDi6n4yu8nget9WGEbswXTxmQDpAAg-kiIWydHVr9X_ja7pBGtVrqqX7x-yi-hMNnJNgvZanUlg5_bdhfB=s256-no?authuser=2"
                  alt="Unknown"
                />
                <p className={styles.Name}>Unknown</p>
              </div>
            ) : (
              selectedPlayers.map((player, index) => {
                return (
                  <PickedPlayer
                    key={index}
                    lineupName={player.name}
                    lineupPhoto={player.lineupImg}
                    selectedPlayers={selectedPlayers}
                  />
                );
              })
            )}
          </div>
          <div className="PickedPlayerBottom">
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
          </div>
        </div>
      </section>
      {showTeamsModal && (
        <Modal
          title="Teams"
          content="How many teams do you want to form?"
          op1="2Teams"
          op2="3Teams"
          groupName="Teams"
          radioId1="two"
          radioId2="three"
          checkedValue1={teamsNum === 'two'}
          checkedValue2={teamsNum === 'three'}
          teamsNum={teamsNum}
          setTeamsNum={setTeamsNum}
          radioOnChangeHandler={radioTeamsOnChangeHandler}
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
          groupName="fairOrRand"
          radioId1="fair"
          radioId2="random"
          checkedValue1={fairOrRand === 'fair'}
          checkedValue2={fairOrRand === 'random'}
          setFairOrRand={setFairOrRand}
          showLineupModal={showLineupModal}
          radioOnChangeHandler={radioFairsOnChangeHandler}
          showTeamsModal={showTeamsModal}
          setShowTeamsModal={setShowTeamsModal}
          setShowLineupModal={setShowLineupModal}
          selectedPlayers={selectedPlayers}
          teamsNum={teamsNum}
          fairOrRand={fairOrRand}
        />
      )}
    </main>
  );
}

export default App;
