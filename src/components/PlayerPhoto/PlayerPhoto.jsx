import styles from './PlayerPhoto.module.css';

import Fara from '../../images/players/Farahani.png';

export default function PlayerPhoto() {
  return (
    <div className={styles.PlayerBox}>
      <img src={Fara} alt="Moe" className={styles.PlayerPhoto} />
      <p className={styles.PlayerName}>Mousavi</p>
    </div>
  );
}
