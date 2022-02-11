import styles from './PickedPlayer.module.css';
import fara from '../../images/players/lineup/farahani.png';

export default function PickedPlayer() {
  return (
    <div className={styles.PickedPlayerContainer}>
      <img className={styles.PickedPlayerPhoto} src={fara} alt="fara" />
      <p className={styles.PickedPlayerName}>Farahani</p>
    </div>
  );
}
