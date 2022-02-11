import styles from './PlayerCard.module.css';
import PlayerPhoto from '../../images/players/Farahani.png';

export default function PlayerCard() {
  return (
    <div className={styles.PlayerCard}>
      <img className={styles.PlayerPhoto} src={PlayerPhoto} alt="Player" />
      <p className={styles.PlayerName}>Farahani</p>

      <div className={styles.SkillBox}>
        <div className={styles.SkillName}>
          <p>Defence:</p>
          <p>Shoot:</p>
          <p>Pass:</p>
          <p>Dribble:</p>
          <p>Speed:</p>
        </div>

        <div className={styles.SkillValue}>
          <p> █████▒▒▒▒▒</p>
          <p> ███████▒▒▒</p>
          <p> ████████▒</p>
          <p> ████▒▒▒▒▒▒</p>
          <p> █████▒▒▒▒▒</p>
        </div>
      </div>
    </div>
  );
}
