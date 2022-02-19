import styles from './PlayerCard.module.css';

export default function PlayerCard({ selectedPlayers }) {
  return (
    <article className={styles.PlayerCard}>
      <div className={styles.Top}>
        <img
          className={styles.PlayerPhoto}
          src={
            selectedPlayers.length === 0
              ? 'https://lh3.google.com/u/2/d/1TEsj5DAaA3X9IxoKzda5ecehKfOUXYrn=w2625-h1656-iv1'
              : selectedPlayers.at(-1).img
          }
          alt={
            selectedPlayers.length === 0
              ? 'unknown'
              : selectedPlayers.at(-1).name
          }
        />
        <p className={styles.PlayerName}>
          {selectedPlayers.length === 0
            ? 'unknown'
            : selectedPlayers.at(-1).name}
        </p>
      </div>

      <div className={styles.Body}>
        <div className={styles.SkillBox}>
          <div className={styles.SkillName}>
            <p>Defence:</p>
            <p>Shoot:</p>
            <p>Pass:</p>
            <p>Dribble:</p>
            <p>Speed:</p>
            <p>
              <strong>Overall:</strong>
            </p>
          </div>

          <div className={styles.SkillValue}>
            <p>
              {selectedPlayers.length === 0
                ? '█▒▒▒▒▒▒▒▒▒'
                : `${'█'.repeat(
                    parseInt(selectedPlayers.at(-1).Defence)
                  )}${'▒'.repeat(
                    parseInt(10 - selectedPlayers.at(-1).Defence)
                  )} `}
            </p>
            <p>
              {selectedPlayers.length === 0
                ? '█▒▒▒▒▒▒▒▒▒'
                : `${'█'.repeat(
                    parseInt(selectedPlayers.at(-1).Shoot)
                  )}${'▒'.repeat(
                    parseInt(10 - selectedPlayers.at(-1).Shoot)
                  )} `}
            </p>
            <p>
              {selectedPlayers.length === 0
                ? '█▒▒▒▒▒▒▒▒▒'
                : `${'█'.repeat(
                    parseInt(selectedPlayers.at(-1).Pass)
                  )}${'▒'.repeat(parseInt(10 - selectedPlayers.at(-1).Pass))} `}
            </p>
            <p>
              {selectedPlayers.length === 0
                ? '█▒▒▒▒▒▒▒▒▒'
                : `${'█'.repeat(
                    parseInt(selectedPlayers.at(-1).Dribble)
                  )}${'▒'.repeat(
                    parseInt(10 - selectedPlayers.at(-1).Dribble)
                  )} `}
            </p>
            <p>
              {selectedPlayers.length === 0
                ? '█▒▒▒▒▒▒▒▒▒'
                : `${'█'.repeat(
                    parseInt(selectedPlayers.at(-1).Speed)
                  )}${'▒'.repeat(
                    parseInt(10 - selectedPlayers.at(-1).Speed)
                  )} `}
            </p>

            <p>
              {selectedPlayers.length === 0
                ? '█▒▒▒▒▒▒▒▒▒'
                : `${'█'.repeat(
                    parseInt(selectedPlayers.at(-1).Overall)
                  )}${'▒'.repeat(
                    parseInt(10 - selectedPlayers.at(-1).Overall)
                  )} `}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
