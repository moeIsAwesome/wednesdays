import styles from './PickedPlayer.module.css';

export default function PickedPlayer({ lineupPhoto, lineupName }) {
  return (
    <div className={styles.Container}>
      <img className={styles.Photo} src={lineupPhoto} alt={lineupName} />
      <p className={styles.Name}>{lineupName}</p>
    </div>
  );
}
