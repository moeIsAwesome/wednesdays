import styles from './PickedPlayer.module.css';

export default function PickedPlayer({ lineupPhoto, lineupName }) {
  return (
    <div className={styles.PickedPlayerContainer}>
      <img
        className={styles.PickedPlayerPhoto}
        src={lineupPhoto}
        alt={lineupName}
      />
      <p className={styles.PickedPlayerName}>{lineupName}</p>
    </div>
  );
}
