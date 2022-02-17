import styles from './PlayerCard.module.css';

export default function PlayerCard({
  name,
  img,
  Defence,
  Shoot,
  Pass,
  Dribble,
  Speed,
  selectedPlayers,
}) {
  return (
    <div className={styles.PlayerCard}>
      <img
        className={styles.PlayerPhoto}
        src={
          selectedPlayers.length === 0
            ? 'https://lh3.google.com/u/2/d/1TEsj5DAaA3X9IxoKzda5ecehKfOUXYrn=w2625-h1656-iv1'
            : img
        }
        alt={selectedPlayers.length === 0 ? 'unknown' : name}
      />
      <p className={styles.PlayerName}>
        {selectedPlayers.length === 0 ? 'unknown' : name}
      </p>

      <div className={styles.SkillBox}>
        <div className={styles.SkillName}>
          <p>Defence:</p>
          <p>Shoot:</p>
          <p>Pass:</p>
          <p>Dribble:</p>
          <p>Speed:</p>
        </div>

        <div className={styles.SkillValue}>
          <p>
            {'█'.repeat(parseInt(Defence))}
            {'▒'.repeat(parseInt(10 - Defence))}
          </p>
          <p>
            {'█'.repeat(parseInt(Shoot))}
            {'▒'.repeat(parseInt(10 - Shoot))}
          </p>
          <p>
            {'█'.repeat(parseInt(Pass))}
            {'▒'.repeat(parseInt(10 - Pass))}
          </p>
          <p>
            {'█'.repeat(parseInt(Dribble))}
            {'▒'.repeat(parseInt(10 - Dribble))}
          </p>
          <p>
            {'█'.repeat(parseInt(Speed))}
            {'▒'.repeat(parseInt(10 - Speed))}
          </p>
        </div>
      </div>
    </div>
  );
}
