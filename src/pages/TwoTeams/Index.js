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
                  <h3>
                    We have two
                    {randomFlag ? (
                      <strong> RANDOM </strong>
                    ) : (
                      <strong> FAIR </strong>
                    )}
                    Teams
                  </h3>
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

                <div className={styles.SkillContainer}>
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
                        {randomFlag
                          ? `${'█'.repeat(
                              Math.ceil(
                                twoTeamsRandom.Team1.reduce(
                                  (previousValue, currrentValue) =>
                                    currrentValue.Defence + previousValue,
                                  0
                                ) / twoTeamsRandom.Team1.length
                              )
                            )}${'▒'.repeat(
                              10 -
                                Math.ceil(
                                  twoTeamsRandom.Team1.reduce(
                                    (previousValue, currrentValue) =>
                                      currrentValue.Defence + previousValue,
                                    0
                                  ) / twoTeamsRandom.Team1.length
                                )
                            )} `
                          : `${'█'.repeat(
                              Math.ceil(
                                twoTeamsFair.Team1.reduce(
                                  (previousValue, currrentValue) =>
                                    currrentValue.Defence + previousValue,
                                  0
                                ) / twoTeamsFair.Team1.length
                              )
                            )}${'▒'.repeat(
                              10 -
                                Math.ceil(
                                  twoTeamsFair.Team1.reduce(
                                    (previousValue, currrentValue) =>
                                      currrentValue.Defence + previousValue,
                                    0
                                  ) / twoTeamsFair.Team1.length
                                )
                            )} `}
                      </p>
                      <p>
                        {randomFlag
                          ? `${'█'.repeat(
                              Math.ceil(
                                twoTeamsRandom.Team1.reduce(
                                  (previousValue, currrentValue) =>
                                    currrentValue.Shoot + previousValue,
                                  0
                                ) / twoTeamsRandom.Team1.length
                              )
                            )}${'▒'.repeat(
                              10 -
                                Math.ceil(
                                  twoTeamsRandom.Team1.reduce(
                                    (previousValue, currrentValue) =>
                                      currrentValue.Shoot + previousValue,
                                    0
                                  ) / twoTeamsRandom.Team1.length
                                )
                            )} `
                          : `${'█'.repeat(
                              Math.ceil(
                                twoTeamsFair.Team1.reduce(
                                  (previousValue, currrentValue) =>
                                    currrentValue.Shoot + previousValue,
                                  0
                                ) / twoTeamsFair.Team1.length
                              )
                            )}${'▒'.repeat(
                              10 -
                                Math.ceil(
                                  twoTeamsFair.Team1.reduce(
                                    (previousValue, currrentValue) =>
                                      currrentValue.Shoot + previousValue,
                                    0
                                  ) / twoTeamsFair.Team1.length
                                )
                            )} `}
                      </p>
                      <p>
                        {randomFlag
                          ? `${'█'.repeat(
                              Math.ceil(
                                twoTeamsRandom.Team1.reduce(
                                  (previousValue, currrentValue) =>
                                    currrentValue.Pass + previousValue,
                                  0
                                ) / twoTeamsRandom.Team1.length
                              )
                            )}${'▒'.repeat(
                              10 -
                                Math.ceil(
                                  twoTeamsRandom.Team1.reduce(
                                    (previousValue, currrentValue) =>
                                      currrentValue.Pass + previousValue,
                                    0
                                  ) / twoTeamsRandom.Team1.length
                                )
                            )} `
                          : `${'█'.repeat(
                              Math.ceil(
                                twoTeamsFair.Team1.reduce(
                                  (previousValue, currrentValue) =>
                                    currrentValue.Pass + previousValue,
                                  0
                                ) / twoTeamsFair.Team1.length
                              )
                            )}${'▒'.repeat(
                              10 -
                                Math.ceil(
                                  twoTeamsFair.Team1.reduce(
                                    (previousValue, currrentValue) =>
                                      currrentValue.Pass + previousValue,
                                    0
                                  ) / twoTeamsFair.Team1.length
                                )
                            )} `}
                      </p>
                      <p>
                        {randomFlag
                          ? `${'█'.repeat(
                              Math.ceil(
                                twoTeamsRandom.Team1.reduce(
                                  (previousValue, currrentValue) =>
                                    currrentValue.Dribble + previousValue,
                                  0
                                ) / twoTeamsRandom.Team1.length
                              )
                            )}${'▒'.repeat(
                              10 -
                                Math.ceil(
                                  twoTeamsRandom.Team1.reduce(
                                    (previousValue, currrentValue) =>
                                      currrentValue.Dribble + previousValue,
                                    0
                                  ) / twoTeamsRandom.Team1.length
                                )
                            )} `
                          : `${'█'.repeat(
                              Math.ceil(
                                twoTeamsFair.Team1.reduce(
                                  (previousValue, currrentValue) =>
                                    currrentValue.Dribble + previousValue,
                                  0
                                ) / twoTeamsFair.Team1.length
                              )
                            )}${'▒'.repeat(
                              10 -
                                Math.ceil(
                                  twoTeamsFair.Team1.reduce(
                                    (previousValue, currrentValue) =>
                                      currrentValue.Dribble + previousValue,
                                    0
                                  ) / twoTeamsFair.Team1.length
                                )
                            )} `}
                      </p>
                      <p>
                        {randomFlag
                          ? `${'█'.repeat(
                              Math.ceil(
                                twoTeamsRandom.Team1.reduce(
                                  (previousValue, currrentValue) =>
                                    currrentValue.Speed + previousValue,
                                  0
                                ) / twoTeamsRandom.Team1.length
                              )
                            )}${'▒'.repeat(
                              10 -
                                Math.ceil(
                                  twoTeamsRandom.Team1.reduce(
                                    (previousValue, currrentValue) =>
                                      currrentValue.Speed + previousValue,
                                    0
                                  ) / twoTeamsRandom.Team1.length
                                )
                            )} `
                          : `${'█'.repeat(
                              Math.ceil(
                                twoTeamsFair.Team1.reduce(
                                  (previousValue, currrentValue) =>
                                    currrentValue.Speed + previousValue,
                                  0
                                ) / twoTeamsFair.Team1.length
                              )
                            )}${'▒'.repeat(
                              10 -
                                Math.ceil(
                                  twoTeamsFair.Team1.reduce(
                                    (previousValue, currrentValue) =>
                                      currrentValue.Speed + previousValue,
                                    0
                                  ) / twoTeamsFair.Team1.length
                                )
                            )} `}
                      </p>
                    </div>
                  </div>
                  <div className={styles.Overall}>
                    <p>
                      <strong>Overall:</strong>
                    </p>
                    <p>
                      {randomFlag
                        ? `${'█'.repeat(
                            Math.ceil(
                              twoTeamsRandom.Team1.reduce(
                                (previousValue, currrentValue) =>
                                  currrentValue.Overall + previousValue,
                                0
                              ) / twoTeamsRandom.Team1.length
                            )
                          )}${'▒'.repeat(
                            10 -
                              Math.ceil(
                                twoTeamsRandom.Team1.reduce(
                                  (previousValue, currrentValue) =>
                                    currrentValue.Overall + previousValue,
                                  0
                                ) / twoTeamsRandom.Team1.length
                              )
                          )} ${Math.ceil(
                            twoTeamsRandom.Team1.reduce(
                              (previousValue, currrentValue) =>
                                currrentValue.Overall + previousValue,
                              0
                            ) / twoTeamsRandom.Team1.length
                          )}`
                        : `${'█'.repeat(
                            Math.ceil(
                              twoTeamsFair.Team1.reduce(
                                (previousValue, currrentValue) =>
                                  currrentValue.Overall + previousValue,
                                0
                              ) / twoTeamsFair.Team1.length
                            )
                          )}${'▒'.repeat(
                            10 -
                              Math.ceil(
                                twoTeamsFair.Team1.reduce(
                                  (previousValue, currrentValue) =>
                                    currrentValue.Overall + previousValue,
                                  0
                                ) / twoTeamsFair.Team1.length
                              )
                          )} ${Math.ceil(
                            twoTeamsFair.Team1.reduce(
                              (previousValue, currrentValue) =>
                                currrentValue.Overall + previousValue,
                              0
                            ) / twoTeamsFair.Team1.length
                          )} `}
                    </p>
                  </div>
                </div>
              </div>
            </article>
            <article className={styles.Team}>
              <div className={styles.TeamTop}></div>
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

                <div className={styles.SkillContainer}>
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
                        {randomFlag
                          ? `${'█'.repeat(
                              Math.ceil(
                                twoTeamsRandom.Team2.reduce(
                                  (previousValue, currrentValue) =>
                                    currrentValue.Defence + previousValue,
                                  0
                                ) / twoTeamsRandom.Team2.length
                              )
                            )}${'▒'.repeat(
                              10 -
                                Math.ceil(
                                  twoTeamsRandom.Team2.reduce(
                                    (previousValue, currrentValue) =>
                                      currrentValue.Defence + previousValue,
                                    0
                                  ) / twoTeamsRandom.Team2.length
                                )
                            )} `
                          : `${'█'.repeat(
                              Math.ceil(
                                twoTeamsFair.Team2.reduce(
                                  (previousValue, currrentValue) =>
                                    currrentValue.Defence + previousValue,
                                  0
                                ) / twoTeamsFair.Team2.length
                              )
                            )}${'▒'.repeat(
                              10 -
                                Math.ceil(
                                  twoTeamsFair.Team2.reduce(
                                    (previousValue, currrentValue) =>
                                      currrentValue.Defence + previousValue,
                                    0
                                  ) / twoTeamsFair.Team2.length
                                )
                            )} `}
                      </p>
                      <p>
                        {randomFlag
                          ? `${'█'.repeat(
                              Math.ceil(
                                twoTeamsRandom.Team2.reduce(
                                  (previousValue, currrentValue) =>
                                    currrentValue.Shoot + previousValue,
                                  0
                                ) / twoTeamsRandom.Team2.length
                              )
                            )}${'▒'.repeat(
                              10 -
                                Math.ceil(
                                  twoTeamsRandom.Team2.reduce(
                                    (previousValue, currrentValue) =>
                                      currrentValue.Shoot + previousValue,
                                    0
                                  ) / twoTeamsRandom.Team2.length
                                )
                            )} `
                          : `${'█'.repeat(
                              Math.ceil(
                                twoTeamsFair.Team2.reduce(
                                  (previousValue, currrentValue) =>
                                    currrentValue.Shoot + previousValue,
                                  0
                                ) / twoTeamsFair.Team2.length
                              )
                            )}${'▒'.repeat(
                              10 -
                                Math.ceil(
                                  twoTeamsFair.Team2.reduce(
                                    (previousValue, currrentValue) =>
                                      currrentValue.Shoot + previousValue,
                                    0
                                  ) / twoTeamsFair.Team2.length
                                )
                            )} `}
                      </p>
                      <p>
                        {randomFlag
                          ? `${'█'.repeat(
                              Math.ceil(
                                twoTeamsRandom.Team2.reduce(
                                  (previousValue, currrentValue) =>
                                    currrentValue.Pass + previousValue,
                                  0
                                ) / twoTeamsRandom.Team2.length
                              )
                            )}${'▒'.repeat(
                              10 -
                                Math.ceil(
                                  twoTeamsRandom.Team2.reduce(
                                    (previousValue, currrentValue) =>
                                      currrentValue.Pass + previousValue,
                                    0
                                  ) / twoTeamsRandom.Team2.length
                                )
                            )} `
                          : `${'█'.repeat(
                              Math.ceil(
                                twoTeamsFair.Team2.reduce(
                                  (previousValue, currrentValue) =>
                                    currrentValue.Pass + previousValue,
                                  0
                                ) / twoTeamsFair.Team2.length
                              )
                            )}${'▒'.repeat(
                              10 -
                                Math.ceil(
                                  twoTeamsFair.Team2.reduce(
                                    (previousValue, currrentValue) =>
                                      currrentValue.Pass + previousValue,
                                    0
                                  ) / twoTeamsFair.Team2.length
                                )
                            )} `}
                      </p>
                      <p>
                        {randomFlag
                          ? `${'█'.repeat(
                              Math.ceil(
                                twoTeamsRandom.Team2.reduce(
                                  (previousValue, currrentValue) =>
                                    currrentValue.Dribble + previousValue,
                                  0
                                ) / twoTeamsRandom.Team2.length
                              )
                            )}${'▒'.repeat(
                              10 -
                                Math.ceil(
                                  twoTeamsRandom.Team2.reduce(
                                    (previousValue, currrentValue) =>
                                      currrentValue.Dribble + previousValue,
                                    0
                                  ) / twoTeamsRandom.Team2.length
                                )
                            )} `
                          : `${'█'.repeat(
                              Math.ceil(
                                twoTeamsFair.Team2.reduce(
                                  (previousValue, currrentValue) =>
                                    currrentValue.Dribble + previousValue,
                                  0
                                ) / twoTeamsFair.Team2.length
                              )
                            )}${'▒'.repeat(
                              10 -
                                Math.ceil(
                                  twoTeamsFair.Team2.reduce(
                                    (previousValue, currrentValue) =>
                                      currrentValue.Dribble + previousValue,
                                    0
                                  ) / twoTeamsFair.Team2.length
                                )
                            )} `}
                      </p>
                      <p>
                        {randomFlag
                          ? `${'█'.repeat(
                              Math.ceil(
                                twoTeamsRandom.Team2.reduce(
                                  (previousValue, currrentValue) =>
                                    currrentValue.Speed + previousValue,
                                  0
                                ) / twoTeamsRandom.Team2.length
                              )
                            )}${'▒'.repeat(
                              10 -
                                Math.ceil(
                                  twoTeamsRandom.Team2.reduce(
                                    (previousValue, currrentValue) =>
                                      currrentValue.Speed + previousValue,
                                    0
                                  ) / twoTeamsRandom.Team2.length
                                )
                            )} `
                          : `${'█'.repeat(
                              Math.ceil(
                                twoTeamsFair.Team2.reduce(
                                  (previousValue, currrentValue) =>
                                    currrentValue.Speed + previousValue,
                                  0
                                ) / twoTeamsFair.Team2.length
                              )
                            )}${'▒'.repeat(
                              10 -
                                Math.ceil(
                                  twoTeamsFair.Team2.reduce(
                                    (previousValue, currrentValue) =>
                                      currrentValue.Speed + previousValue,
                                    0
                                  ) / twoTeamsFair.Team2.length
                                )
                            )} `}
                      </p>
                    </div>
                  </div>
                  <div className={styles.Overall}>
                    <p>
                      <strong>Overall:</strong>
                    </p>
                    <p>
                      {randomFlag
                        ? `${'█'.repeat(
                            Math.ceil(
                              twoTeamsRandom.Team2.reduce(
                                (previousValue, currrentValue) =>
                                  currrentValue.Overall + previousValue,
                                0
                              ) / twoTeamsRandom.Team2.length
                            )
                          )}${'▒'.repeat(
                            10 -
                              Math.ceil(
                                twoTeamsRandom.Team2.reduce(
                                  (previousValue, currrentValue) =>
                                    currrentValue.Overall + previousValue,
                                  0
                                ) / twoTeamsRandom.Team2.length
                              )
                          )} ${Math.ceil(
                            twoTeamsRandom.Team2.reduce(
                              (previousValue, currrentValue) =>
                                currrentValue.Overall + previousValue,
                              0
                            ) / twoTeamsRandom.Team2.length
                          )}`
                        : `${'█'.repeat(
                            Math.ceil(
                              twoTeamsFair.Team2.reduce(
                                (previousValue, currrentValue) =>
                                  currrentValue.Overall + previousValue,
                                0
                              ) / twoTeamsFair.Team2.length
                            )
                          )}${'▒'.repeat(
                            10 -
                              Math.ceil(
                                twoTeamsFair.Team2.reduce(
                                  (previousValue, currrentValue) =>
                                    currrentValue.Overall + previousValue,
                                  0
                                ) / twoTeamsFair.Team2.length
                              )
                          )} ${Math.ceil(
                            twoTeamsFair.Team2.reduce(
                              (previousValue, currrentValue) =>
                                currrentValue.Overall + previousValue,
                              0
                            ) / twoTeamsFair.Team2.length
                          )} `}
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
