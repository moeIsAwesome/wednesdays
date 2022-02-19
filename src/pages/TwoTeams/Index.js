import styles from './TwoTeams.module.css';
import PickedPlayer from '../../components/PickedPlayer/PickedPlayer';
import Button from '../../components/Button/Button';
import { useNavigate } from 'react-router-dom';
import { threeTeamsRandom, twoTeamsRandom } from '../../components/Modal/Modal';
import { twoTeamsFair } from '../../components/Modal/Modal';
import { useGlobalContext } from '../../context';

export default function TwoTeams() {
  const Navigate = useNavigate();
  let { setSelectedPlayers, randomFlag, setRandomFlag } = useGlobalContext();

  return (
    <div className={styles.App}>
      <div className={styles.TeamsContainer}>
        <article className={styles.Team}>
          <div className={styles.Title}>
            <h2>Team 1</h2>
          </div>
          <div className={styles.Body}>
            {twoTeamsRandom.Team1.length > 0
              ? twoTeamsRandom.Team1.map((player, index) => {
                  return (
                    <PickedPlayer
                      key={index}
                      lineupPhoto={player.lineupImg}
                      lineupName={player.name}
                    />
                  );
                })
              : twoTeamsFair.Team1.map((player, index) => {
                  return (
                    <PickedPlayer
                      key={index}
                      lineupPhoto={player.lineupImg}
                      lineupName={player.name}
                    />
                  );
                })}
          </div>
          <div className={styles.SkillValue}>
            <p>
              Defence:
              {randomFlag
                ? Math.ceil(
                    twoTeamsRandom.Team1.reduce(
                      (previousValue, currrentValue) =>
                        currrentValue.Defence + previousValue,
                      0
                    )
                  )
                : Math.ceil(
                    twoTeamsFair.Team1.reduce(
                      (previousValue, currrentValue) =>
                        currrentValue.Shoot + previousValue,
                      0
                    )
                  )}
            </p>
            <p>
              Shoot:
              {randomFlag
                ? Math.ceil(
                    twoTeamsRandom.Team1.reduce(
                      (previousValue, currrentValue) =>
                        currrentValue.Shoot + previousValue,
                      0
                    )
                  )
                : Math.ceil(
                    twoTeamsFair.Team1.reduce(
                      (previousValue, currrentValue) =>
                        currrentValue.Shoot + previousValue,
                      0
                    )
                  )}
            </p>
            <p>
              Pass:
              {randomFlag
                ? Math.ceil(
                    twoTeamsRandom.Team1.reduce(
                      (previousValue, currrentValue) =>
                        currrentValue.Pass + previousValue,
                      0
                    )
                  )
                : Math.ceil(
                    twoTeamsFair.Team1.reduce(
                      (previousValue, currrentValue) =>
                        currrentValue.Pass + previousValue,
                      0
                    )
                  )}
            </p>
            <p>
              Dribble:
              {randomFlag
                ? Math.ceil(
                    twoTeamsRandom.Team1.reduce(
                      (previousValue, currrentValue) =>
                        currrentValue.Dribble + previousValue,
                      0
                    )
                  )
                : Math.ceil(
                    twoTeamsFair.Team1.reduce(
                      (previousValue, currrentValue) =>
                        currrentValue.Dribble + previousValue,
                      0
                    )
                  )}
            </p>
            <p>
              Speed:
              {randomFlag
                ? Math.ceil(
                    twoTeamsRandom.Team1.reduce(
                      (previousValue, currrentValue) =>
                        currrentValue.Speed + previousValue,
                      0
                    )
                  )
                : Math.ceil(
                    twoTeamsFair.Team1.reduce(
                      (previousValue, currrentValue) =>
                        currrentValue.Speed + previousValue,
                      0
                    )
                  )}
            </p>
            <p>
              Overall:
              {randomFlag
                ? Math.ceil(
                    twoTeamsRandom.Team1.reduce(
                      (previousValue, currrentValue) =>
                        currrentValue.Overall + previousValue,
                      0
                    )
                  )
                : Math.ceil(
                    twoTeamsFair.Team1.reduce(
                      (previousValue, currrentValue) =>
                        currrentValue.Overall + previousValue,
                      0
                    )
                  )}
            </p>
          </div>
        </article>
        <article className={styles.Team}>
          <div className={styles.Title}>
            <h2>Team 2</h2>
          </div>
          <div className={styles.Body}>
            {twoTeamsRandom.Team1.length > 0
              ? twoTeamsRandom.Team2.map((player, index) => {
                  return (
                    <PickedPlayer
                      key={index}
                      lineupPhoto={player.lineupImg}
                      lineupName={player.name}
                    />
                  );
                })
              : twoTeamsFair.Team2.map((player, index) => {
                  return (
                    <PickedPlayer
                      key={index}
                      lineupPhoto={player.lineupImg}
                      lineupName={player.name}
                    />
                  );
                })}
          </div>
          <div className={styles.SkillValue}>
            <p>
              Defence:
              {randomFlag
                ? Math.ceil(
                    twoTeamsRandom.Team2.reduce(
                      (previousValue, currrentValue) =>
                        currrentValue.Defence + previousValue,
                      0
                    )
                  )
                : Math.ceil(
                    twoTeamsFair.Team2.reduce(
                      (previousValue, currrentValue) =>
                        currrentValue.Shoot + previousValue,
                      0
                    )
                  )}
            </p>
            <p>
              Shoot:
              {randomFlag
                ? Math.ceil(
                    twoTeamsRandom.Team2.reduce(
                      (previousValue, currrentValue) =>
                        currrentValue.Shoot + previousValue,
                      0
                    )
                  )
                : Math.ceil(
                    twoTeamsFair.Team2.reduce(
                      (previousValue, currrentValue) =>
                        currrentValue.Shoot + previousValue,
                      0
                    )
                  )}
            </p>
            <p>
              Pass:
              {randomFlag
                ? Math.ceil(
                    twoTeamsRandom.Team2.reduce(
                      (previousValue, currrentValue) =>
                        currrentValue.Pass + previousValue,
                      0
                    )
                  )
                : Math.ceil(
                    twoTeamsFair.Team2.reduce(
                      (previousValue, currrentValue) =>
                        currrentValue.Pass + previousValue,
                      0
                    )
                  )}
            </p>
            <p>
              Dribble:
              {randomFlag
                ? Math.ceil(
                    twoTeamsRandom.Team2.reduce(
                      (previousValue, currrentValue) =>
                        currrentValue.Dribble + previousValue,
                      0
                    )
                  )
                : Math.ceil(
                    twoTeamsFair.Team2.reduce(
                      (previousValue, currrentValue) =>
                        currrentValue.Dribble + previousValue,
                      0
                    )
                  )}
            </p>
            <p>
              Speed:
              {randomFlag
                ? Math.ceil(
                    twoTeamsRandom.Team2.reduce(
                      (previousValue, currrentValue) =>
                        currrentValue.Speed + previousValue,
                      0
                    )
                  )
                : Math.ceil(
                    twoTeamsFair.Team2.reduce(
                      (previousValue, currrentValue) =>
                        currrentValue.Speed + previousValue,
                      0
                    )
                  )}
            </p>
            <p>
              Overall:
              {randomFlag
                ? Math.ceil(
                    twoTeamsRandom.Team2.reduce(
                      (previousValue, currrentValue) =>
                        currrentValue.Overall + previousValue,
                      0
                    )
                  )
                : Math.ceil(
                    twoTeamsFair.Team2.reduce(
                      (previousValue, currrentValue) =>
                        currrentValue.Overall + previousValue,
                      0
                    )
                  )}
            </p>
          </div>
        </article>
      </div>
      <div className={styles.BtnContainer}>
        <Button
          text="back"
          functionalityOnClick={() => {
            Navigate('/wednesdays');
            setSelectedPlayers([]);
            setRandomFlag(false);
            twoTeamsFair.Team1 = [];
            twoTeamsFair.Team2 = [];
            twoTeamsRandom.Team1 = [];
            threeTeamsRandom.Team2 = [];
          }}
        />
      </div>
    </div>
  );
}
