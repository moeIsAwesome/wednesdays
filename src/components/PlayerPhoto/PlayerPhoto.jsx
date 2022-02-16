import styles from './PlayerPhoto.module.css';
import { useState } from 'react';

export default function PlayerPhoto({
  name,
  img,
  addToPlayersListAndRemoveFromPlayersList,
}) {
  const [selected, setSelected] = useState(false);
  return (
    <article
      className={selected ? styles.Fade : styles.PlayerBox}
      onClick={() => {
        setSelected(!selected);
        addToPlayersListAndRemoveFromPlayersList(name);
      }}
    >
      <img src={img} alt={name} className={styles.PlayerPhoto} />
      <p className={styles.PlayerName}>{name}</p>
    </article>
  );
}
