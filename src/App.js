import './App.css';
import PlayerCard from './components/PlayerCard/PlayerCard';
import PlayerPhoto from './components/PlayerPhoto/PlayerPhoto';
import soundOn from './images/icon/Sound On.png';
import PickedPlayer from './components/PickedPlayer/PickedPlayer';
import Button from './components/Button/Button';

function App() {
  return (
    <div className="App">
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

        <Button />
      </section>
    </div>
  );
}

export default App;
