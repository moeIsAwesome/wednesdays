import styles from './PlayerCard.module.css';

export default function PlayerCard({ selectedPlayers }) {
  return (
    <article className={styles.PlayerCard}>
      <div className={styles.Top}>
        <img
          className={styles.PlayerPhoto}
          src={
            selectedPlayers.length === 0
              ? 'https://lh3.googleusercontent.com/XhcFl6QRLq0bCLLK8KzUMhWxIGCDqZjKFDe7AK2KxJ5T3pN2E8BJl1Em5YtCEp6uwmBctpCpMvSxzIuGpemazORF26wSVCaND_odgBoIqCg0Kw0oPqBZe3brdO69m4aghEK7UCdiE-1LaBqoTP2HS2wOhTl45_w7OxTE0hN6XdZ71Dj9TQ6KwNoesPHbx8HOOBHwBgx2OwThpjSN8IwD1LEowTVf8A-IHRrMT2QlRg-Fvc4lGkg0oIfq8c05fkuOlfsMJ6c1W2EXHCfBQXWc0_yLjFmHgvfcI7UJ0vzAzODBH5LTOXk4iGshFbJ_ndSy7jsHyiNbrJFChJIgUeR04b7W-zX2azu1PAQsNU-Be-5cif-qsEs3dWB_sc8EgneP9YWBMlzNkhoVebK1yvIx1LvV4gAQ9l5F6Z8bqrVe2M46ZBNbh85tx39JGh6bYSrCtNBKYJIPZN6GSZBg0nziNYWAnacBWw3DF0ZtBKvTD7_NCuRpiNkMCgP28yPzurktY1FgMuGVs69fnPdzrsCmtnXiIuySEZ_LwnTIJ4F9YHoq_wBnJ61qjeoyg_elD7YyG1P3AkRziTRYAkfuqa71o6VCED_bRJd8JZv2xHhL2N8WjUQHBjZCkWQwLoRIPT7TWmtsbxuDi6n4yu8nget9WGEbswXTxmQDpAAg-kiIWydHVr9X_ja7pBGtVrqqX7x-yi-hMNnJNgvZanUlg5_bdhfB=s256-no?authuser=2'
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
