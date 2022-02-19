import styles from './ThreeTeams.module.css';
import PickedPlayer from '../../components/PickedPlayer/PickedPlayer';
import Button from '../../components/Button/Button';
import { useNavigate } from 'react-router-dom';
import { teamRandom } from '../../components/Modal/Modal';
import { threeTeamsFair } from '../../components/Modal/Modal';

export default function ThreeTeams() {
  const Navigate = useNavigate();
  return (
    <div className={styles.App}>
      <div className={styles.TeamsContainer}>
        <article className={styles.Team}>
          <div className={styles.Title}>
            <h2>Team 1</h2>
          </div>
          <div className={styles.Body}>
            {teamRandom.Team1.length > 0
              ? teamRandom.Team1.map((player, index) => {
                  return (
                    <PickedPlayer
                      key={index}
                      lineupPhoto={player.img}
                      lineupName={player.name}
                    />
                  );
                })
              : threeTeamsFair.Team1.map((player, index) => {
                  return (
                    <PickedPlayer
                      key={index}
                      lineupPhoto={player.img}
                      lineupName={player.name}
                    />
                  );
                })}
          </div>
        </article>
        <article className={styles.Team}>
          <div className={styles.Title}>
            <h2>Team 2</h2>
          </div>
          <div className={styles.Body}>
            {teamRandom.Team2.length > 0
              ? teamRandom.Team2.map((player, index) => {
                  return (
                    <PickedPlayer
                      key={index}
                      lineupPhoto={player.img}
                      lineupName={player.name}
                    />
                  );
                })
              : threeTeamsFair.Team2.map((player, index) => {
                  return (
                    <PickedPlayer
                      key={index}
                      lineupPhoto={player.img}
                      lineupName={player.name}
                    />
                  );
                })}
          </div>
        </article>
        <article className={styles.Team}>
          <div className={styles.Title}>
            <h2>Team 3</h2>
          </div>
          <div className={styles.Body}>
            {teamRandom.Team3.length > 0
              ? teamRandom.Team3.map((player, index) => {
                  return (
                    <PickedPlayer
                      key={index}
                      lineupPhoto={player.img}
                      lineupName={player.name}
                    />
                  );
                })
              : threeTeamsFair.Team3.map((player, index) => {
                  return (
                    <PickedPlayer
                      key={index}
                      lineupPhoto={player.img}
                      lineupName={player.name}
                    />
                  );
                })}
          </div>
        </article>
      </div>
      <div className={styles.BtnContainer}>
        <Button
          text="back"
          functionalityOnClick={() => {
            Navigate('/wednesdays');
          }}
        />
      </div>
    </div>
  );
}
