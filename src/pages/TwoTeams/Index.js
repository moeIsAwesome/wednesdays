import styles from './TwoTeams.module.css';
import PickedPlayer from '../../components/PickedPlayer/PickedPlayer';
import Button from '../../components/Button/Button';
import { useNavigate } from 'react-router-dom';
import { threeTeamsRandom, twoTeamsRandom } from '../../components/Modal/Modal';
import { twoTeamsFair } from '../../components/Modal/Modal';
import { useGlobalContext } from '../../context';

export default function TwoTeams() {
  const Navigate = useNavigate();
  let {
    setSelectedPlayers,
    randomFlag,
    setRandomFlag,
    musicIsPlaying,
    setMusicIsPlaying,
    play,
    pause,
    soundOff,
    soundOn,
  } = useGlobalContext();

  return (
    <main>
      <div className={styles.App}>
        <header className="Header">
          <img
            className="SoundLogo"
            src={musicIsPlaying ? soundOn : soundOff}
            alt="soundLogo"
            onClick={() => {
              setMusicIsPlaying(!musicIsPlaying);
              musicIsPlaying ? pause() : play();
            }}
          />

          <h1 className="Title">
            Wednesday is a good day to start something new!
          </h1>
        </header>
        <section className={styles.SectionTeams}>
          <div className={styles.TeamsContainer}>
            <article className={styles.Team}>
              <div className={styles.TeamTop}>
                <div className={styles.Title}>
                  <h2>Team 1</h2>
                </div>
              </div>
              <div className={styles.TeamBody}>
                <div className={styles.Players}>
                  {randomFlag
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
                <div className={styles.SkillBox}>
                  <div className={styles.SkillValue}>
                    <p>
                      Defence:
                      {randomFlag
                        ? Math.ceil(
                            twoTeamsRandom.Team1.reduce(
                              (previousValue, currrentValue) =>
                                currrentValue.Defence + previousValue,
                              0
                            ) / twoTeamsRandom.Team1.length
                          )
                        : Math.ceil(
                            twoTeamsFair.Team1.reduce(
                              (previousValue, currrentValue) =>
                                currrentValue.Shoot + previousValue,
                              0
                            ) / twoTeamsFair.Team1.length
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
                            ) / twoTeamsRandom.Team1.length
                          )
                        : Math.ceil(
                            twoTeamsFair.Team1.reduce(
                              (previousValue, currrentValue) =>
                                currrentValue.Shoot + previousValue,
                              0
                            ) / twoTeamsFair.Team1.length
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
                            ) / twoTeamsRandom.Team1.length
                          )
                        : Math.ceil(
                            twoTeamsFair.Team1.reduce(
                              (previousValue, currrentValue) =>
                                currrentValue.Pass + previousValue,
                              0
                            ) / twoTeamsFair.Team1.length
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
                            ) / twoTeamsRandom.Team1.length
                          )
                        : Math.ceil(
                            twoTeamsFair.Team1.reduce(
                              (previousValue, currrentValue) =>
                                currrentValue.Dribble + previousValue,
                              0
                            ) / twoTeamsFair.Team1.length
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
                            ) / twoTeamsRandom.Team1.length
                          )
                        : Math.ceil(
                            twoTeamsFair.Team1.reduce(
                              (previousValue, currrentValue) =>
                                currrentValue.Speed + previousValue,
                              0
                            ) / twoTeamsFair.Team1.length
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
                            ) / twoTeamsRandom.Team1.length
                          )
                        : Math.ceil(
                            twoTeamsFair.Team1.reduce(
                              (previousValue, currrentValue) =>
                                currrentValue.Overall + previousValue,
                              0
                            ) / twoTeamsFair.Team1.length
                          )}
                    </p>
                  </div>
                </div>
              </div>
            </article>
            <article className={styles.Team}>
              <div className={styles.TeamTop}>
                <div className={styles.Title}>
                  <h2>Team 2</h2>
                </div>
              </div>
              <div className={styles.TeamBody}>
                <div className={styles.Players}>
                  {randomFlag
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
                <div className={styles.SkillBox}>
                  <div className={styles.SkillValue}>
                    <p>
                      Defence:
                      {randomFlag
                        ? Math.ceil(
                            twoTeamsRandom.Team2.reduce(
                              (previousValue, currrentValue) =>
                                currrentValue.Defence + previousValue,
                              0
                            ) / twoTeamsRandom.Team2.length
                          )
                        : Math.ceil(
                            twoTeamsFair.Team2.reduce(
                              (previousValue, currrentValue) =>
                                currrentValue.Shoot + previousValue,
                              0
                            ) / twoTeamsFair.Team2.length
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
                            ) / twoTeamsRandom.Team2.length
                          )
                        : Math.ceil(
                            twoTeamsFair.Team2.reduce(
                              (previousValue, currrentValue) =>
                                currrentValue.Shoot + previousValue,
                              0
                            ) / twoTeamsFair.Team2.length
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
                            ) / twoTeamsRandom.Team2.length
                          )
                        : Math.ceil(
                            twoTeamsFair.Team2.reduce(
                              (previousValue, currrentValue) =>
                                currrentValue.Pass + previousValue,
                              0
                            ) / twoTeamsFair.Team2.length
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
                            ) / twoTeamsRandom.Team2.length
                          )
                        : Math.ceil(
                            twoTeamsFair.Team2.reduce(
                              (previousValue, currrentValue) =>
                                currrentValue.Dribble + previousValue,
                              0
                            ) / twoTeamsFair.Team2.length
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
                            ) / twoTeamsRandom.Team2.length
                          )
                        : Math.ceil(
                            twoTeamsFair.Team2.reduce(
                              (previousValue, currrentValue) =>
                                currrentValue.Speed + previousValue,
                              0
                            ) / twoTeamsFair.Team2.length
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
                            ) / twoTeamsRandom.Team2.length
                          )
                        : Math.ceil(
                            twoTeamsFair.Team2.reduce(
                              (previousValue, currrentValue) =>
                                currrentValue.Overall + previousValue,
                              0
                            ) / twoTeamsFair.Team2.length
                          )}
                    </p>
                  </div>
                </div>
              </div>
            </article>
            <Button
              text="back"
              functionalityOnClick={() => {
                Navigate('/wednesdays');
                setRandomFlag(false);
                setSelectedPlayers([]);
                twoTeamsFair.Team1 = [];
                twoTeamsFair.Team2 = [];
                twoTeamsRandom.Team1 = [];
                threeTeamsRandom.Team2 = [];
              }}
            />
          </div>
        </section>
      </div>
    </main>
  );
}
