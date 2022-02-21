import './App.css';
import * as Realm from 'realm-web';
import styles from './components/PickedPlayer/PickedPlayer.module.css';
import { useEffect, useState } from 'react';
import PlayerCard from './components/PlayerCard/PlayerCard';
import PlayerPhoto from './components/PlayerPhoto/PlayerPhoto';

import PickedPlayer from './components/PickedPlayer/PickedPlayer';
import Button from './components/Button/Button';
import Modal from './components/Modal/Modal';
import { useGlobalContext } from './context';

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


  async function getAllPlayersRealm() {
    const app = new Realm.App({ id: 'wednesdays-ycplb' });
    const credentials = Realm.Credentials.anonymous();
    try {
      const user = await app.logIn(credentials);
      const allPlayers = await user.functions.getAllPlayers();
      setAllPlayers(allPlayers);

      console.log(allPlayers);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getAllPlayersRealm();
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
                  src="https://i.postimg.cc/wxbMSB33/unknown.png"
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
