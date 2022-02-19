import styles from './ThreeTeams.module.css';
import PickedPlayer from '../../components/PickedPlayer/PickedPlayer';
import Button from '../../components/Button/Button';
import { useNavigate } from 'react-router-dom';
import { threeTeamsRandom } from '../../components/Modal/Modal';
import { threeTeamsFair } from '../../components/Modal/Modal';
import { useGlobalContext } from '../../context';

export default function ThreeTeams() {
  const Navigate = useNavigate();
  const { setSelectedPlayers, randomFlag, setRandomFlag } = useGlobalContext();

  return (
    <div className={styles.App}>
      <div className={styles.TeamsContainer}>
        <article className={styles.Team}>
          <div className={styles.Title}>
            <h2>Team 1</h2>
          </div>
          <div className={styles.Body}>
            {threeTeamsRandom.Team1.length > 0
              ? threeTeamsRandom.Team1.map((player, index) => {
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
            <div className={styles.SkillValue}>
              <p>
                Defence:
                {randomFlag
                  ? Math.ceil(
                      threeTeamsRandom.Team1.reduce(
                        (previousValue, currrentValue) =>
                          currrentValue.Defence + previousValue,
                        0
                      )
                    )
                  : Math.ceil(
                      threeTeamsFair.Team1.reduce(
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
                      threeTeamsRandom.Team1.reduce(
                        (previousValue, currrentValue) =>
                          currrentValue.Shoot + previousValue,
                        0
                      )
                    )
                  : Math.ceil(
                      threeTeamsFair.Team1.reduce(
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
                      threeTeamsRandom.Team1.reduce(
                        (previousValue, currrentValue) =>
                          currrentValue.Pass + previousValue,
                        0
                      )
                    )
                  : Math.ceil(
                      threeTeamsFair.Team1.reduce(
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
                      threeTeamsRandom.Team1.reduce(
                        (previousValue, currrentValue) =>
                          currrentValue.Dribble + previousValue,
                        0
                      )
                    )
                  : Math.ceil(
                      threeTeamsFair.Team1.reduce(
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
                      threeTeamsRandom.Team1.reduce(
                        (previousValue, currrentValue) =>
                          currrentValue.Speed + previousValue,
                        0
                      )
                    )
                  : Math.ceil(
                      threeTeamsFair.Team1.reduce(
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
                      threeTeamsRandom.Team1.reduce(
                        (previousValue, currrentValue) =>
                          currrentValue.Overall + previousValue,
                        0
                      )
                    )
                  : Math.ceil(
                      threeTeamsFair.Team1.reduce(
                        (previousValue, currrentValue) =>
                          currrentValue.Overall + previousValue,
                        0
                      )
                    )}
              </p>
            </div>
          </div>
        </article>
        <article className={styles.Team}>
          <div className={styles.Title}>
            <h2>Team 2</h2>
          </div>
          <div className={styles.Body}>
            {threeTeamsRandom.Team2.length > 0
              ? threeTeamsRandom.Team2.map((player, index) => {
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
            <div className={styles.SkillValue}>
              <p>
                Defence:
                {randomFlag
                  ? Math.ceil(
                      threeTeamsRandom.Team2.reduce(
                        (previousValue, currrentValue) =>
                          currrentValue.Defence + previousValue,
                        0
                      )
                    )
                  : Math.ceil(
                      threeTeamsFair.Team2.reduce(
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
                      threeTeamsRandom.Team2.reduce(
                        (previousValue, currrentValue) =>
                          currrentValue.Shoot + previousValue,
                        0
                      )
                    )
                  : Math.ceil(
                      threeTeamsFair.Team2.reduce(
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
                      threeTeamsRandom.Team2.reduce(
                        (previousValue, currrentValue) =>
                          currrentValue.Pass + previousValue,
                        0
                      )
                    )
                  : Math.ceil(
                      threeTeamsFair.Team2.reduce(
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
                      threeTeamsRandom.Team2.reduce(
                        (previousValue, currrentValue) =>
                          currrentValue.Dribble + previousValue,
                        0
                      )
                    )
                  : Math.ceil(
                      threeTeamsFair.Team2.reduce(
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
                      threeTeamsRandom.Team2.reduce(
                        (previousValue, currrentValue) =>
                          currrentValue.Speed + previousValue,
                        0
                      )
                    )
                  : Math.ceil(
                      threeTeamsFair.Team2.reduce(
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
                      threeTeamsRandom.Team2.reduce(
                        (previousValue, currrentValue) =>
                          currrentValue.Overall + previousValue,
                        0
                      )
                    )
                  : Math.ceil(
                      threeTeamsFair.Team2.reduce(
                        (previousValue, currrentValue) =>
                          currrentValue.Overall + previousValue,
                        0
                      )
                    )}
              </p>
            </div>
          </div>
        </article>
        <article className={styles.Team}>
          <div className={styles.Title}>
            <h2>Team 3</h2>
          </div>
          <div className={styles.Body}>
            {threeTeamsRandom.Team3.length > 0
              ? threeTeamsRandom.Team3.map((player, index) => {
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
            <div className={styles.SkillValue}>
              <p>
                Defence:
                {randomFlag
                  ? Math.ceil(
                      threeTeamsRandom.Team3.reduce(
                        (previousValue, currrentValue) =>
                          currrentValue.Defence + previousValue,
                        0
                      )
                    )
                  : Math.ceil(
                      threeTeamsFair.Team3.reduce(
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
                      threeTeamsRandom.Team3.reduce(
                        (previousValue, currrentValue) =>
                          currrentValue.Shoot + previousValue,
                        0
                      )
                    )
                  : Math.ceil(
                      threeTeamsFair.Team3.reduce(
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
                      threeTeamsRandom.Team3.reduce(
                        (previousValue, currrentValue) =>
                          currrentValue.Pass + previousValue,
                        0
                      )
                    )
                  : Math.ceil(
                      threeTeamsFair.Team3.reduce(
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
                      threeTeamsRandom.Team3.reduce(
                        (previousValue, currrentValue) =>
                          currrentValue.Dribble + previousValue,
                        0
                      )
                    )
                  : Math.ceil(
                      threeTeamsFair.Team3.reduce(
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
                      threeTeamsRandom.Team3.reduce(
                        (previousValue, currrentValue) =>
                          currrentValue.Speed + previousValue,
                        0
                      )
                    )
                  : Math.ceil(
                      threeTeamsFair.Team3.reduce(
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
                      threeTeamsRandom.Team3.reduce(
                        (previousValue, currrentValue) =>
                          currrentValue.Overall + previousValue,
                        0
                      )
                    )
                  : Math.ceil(
                      threeTeamsFair.Team3.reduce(
                        (previousValue, currrentValue) =>
                          currrentValue.Overall + previousValue,
                        0
                      )
                    )}
              </p>
            </div>
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
            threeTeamsFair.Team1 = [];
            threeTeamsFair.Team2 = [];
            threeTeamsFair.Team3 = [];
            threeTeamsRandom.Team1 = [];
            threeTeamsRandom.Team2 = [];
            threeTeamsRandom.Team3 = [];
          }}
        />
      </div>
    </div>
  );
}
