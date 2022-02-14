import styles from './PlayerPhoto.module.css';
import { useState } from 'react';

export default function PlayerPhoto({ name, img }) {
  const [selected, setSelected] = useState(false);
  return (
    <article
      className={selected ? styles.Fade : styles.PlayerBox}
      onClick={() => {
        setSelected(!selected);
      }}
    >
      <img src={img} alt={name} className={styles.PlayerPhoto} />
      <p className={styles.PlayerName}>{name}</p>
    </article>
  );
}
