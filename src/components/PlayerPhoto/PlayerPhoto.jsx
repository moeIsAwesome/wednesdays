import styles from './PlayerPhoto.module.css';
import { useState } from 'react';

export default function PlayerPhoto({
  _id,
  name,
  img,
  lineupImg,
  Defence,
  Shoot,
  Pass,
  Dribble,
  Speed,
  selectedPlayers,
  playerCardHandler,

  addToPlayersListAndRemoveFromPlayersList,
}) {
  const [selected, setSelected] = useState(true);
  return (
    <article
      className={selected ? styles.PlayerBox : styles.Fade}
      onClick={() => {
        setSelected(!selected);
        addToPlayersListAndRemoveFromPlayersList(
          _id,
          name,
          img,
          lineupImg,
          Defence,
          Shoot,
          Pass,
          Dribble,
          Speed
        );
        playerCardHandler(name, img, Defence, Shoot, Pass, Dribble, Speed);
      }}
    >
      <img src={img} alt={name} className={styles.PlayerPhoto} />
      <p className={styles.PlayerName}>{name}</p>
    </article>
  );
}
