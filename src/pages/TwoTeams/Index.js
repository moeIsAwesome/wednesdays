import styles from './TwoTeams.module.css';
import PickedPlayer from '../../components/PickedPlayer/PickedPlayer';
import Button from '../../components/Button/Button';
import { useNavigate } from 'react-router-dom';
import { teamRandom } from '../../components/Modal/Modal';
import { twoTeamsFair } from '../../components/Modal/Modal';
import { useGlobalContext } from '../../context';

export default function TwoTeams() {
  const Navigate = useNavigate();
  const data = useGlobalContext();

  return (
    <div className={styles.App}>
      <div className={styles.TeamsContainer}>
        <article className={styles.Team}>
          <div className={styles.Title}>
            <h2>Team 1 {data}</h2>
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
              : twoTeamsFair.Team1.map((player, index) => {
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
            {teamRandom.Team1.length > 0
              ? teamRandom.Team2.map((player, index) => {
                  return (
                    <PickedPlayer
                      key={index}
                      lineupPhoto={player.img}
                      lineupName={player.name}
                    />
                  );
                })
              : twoTeamsFair.Team2.map((player, index) => {
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
