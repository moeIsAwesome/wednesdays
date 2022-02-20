import styles from './ThreeTeams.module.css';
import PickedPlayer from '../../components/PickedPlayer/PickedPlayer';
import Button from '../../components/Button/Button';
import { useNavigate } from 'react-router-dom';
import { threeTeamsRandom } from '../../components/Modal/Modal';
import { threeTeamsFair } from '../../components/Modal/Modal';
import { useGlobalContext } from '../../context';

export default function ThreeTeams() {
  const Navigate = useNavigate();
  const {
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
                  {threeTeamsRandom.Team1.length > 0
                    ? threeTeamsRandom.Team1.map((player, index) => {
                        return (
                          <PickedPlayer
                            key={index}
                            lineupPhoto={player.lineupImg}
                            lineupName={player.name}
                          />
                        );
                      })
                    : threeTeamsFair.Team1.map((player, index) => {
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
                                threeTeamsRandom.Team1.reduce(
                                  (previousValue, currrentValue) =>
                                    currrentValue.Defence + previousValue,
                                  0
                                ) / threeTeamsRandom.Team1.length
                              )
                            )}${'▒'.repeat(
                              10 -
                                Math.ceil(
                                  threeTeamsRandom.Team1.reduce(
                                    (previousValue, currrentValue) =>
                                      currrentValue.Defence + previousValue,
                                    0
                                  ) / threeTeamsRandom.Team1.length
                                )
                            )} `
                          : `${'█'.repeat(
                              Math.ceil(
                                threeTeamsFair.Team1.reduce(
                                  (previousValue, currrentValue) =>
                                    currrentValue.Defence + previousValue,
                                  0
                                ) / threeTeamsFair.Team1.length
                              )
                            )}${'▒'.repeat(
                              10 -
                                Math.ceil(
                                  threeTeamsFair.Team1.reduce(
                                    (previousValue, currrentValue) =>
                                      currrentValue.Defence + previousValue,
                                    0
                                  ) / threeTeamsFair.Team1.length
                                )
                            )} `}
                      </p>
                      <p>
                        {randomFlag
                          ? `${'█'.repeat(
                              Math.ceil(
                                threeTeamsRandom.Team1.reduce(
                                  (previousValue, currrentValue) =>
                                    currrentValue.Shoot + previousValue,
                                  0
                                ) / threeTeamsRandom.Team1.length
                              )
                            )}${'▒'.repeat(
                              10 -
                                Math.ceil(
                                  threeTeamsRandom.Team1.reduce(
                                    (previousValue, currrentValue) =>
                                      currrentValue.Shoot + previousValue,
                                    0
                                  ) / threeTeamsRandom.Team1.length
                                )
                            )} `
                          : `${'█'.repeat(
                              Math.ceil(
                                threeTeamsFair.Team1.reduce(
                                  (previousValue, currrentValue) =>
                                    currrentValue.Shoot + previousValue,
                                  0
                                ) / threeTeamsFair.Team1.length
                              )
                            )}${'▒'.repeat(
                              10 -
                                Math.ceil(
                                  threeTeamsFair.Team1.reduce(
                                    (previousValue, currrentValue) =>
                                      currrentValue.Shoot + previousValue,
                                    0
                                  ) / threeTeamsFair.Team1.length
                                )
                            )} `}
                      </p>
                      <p>
                        {randomFlag
                          ? `${'█'.repeat(
                              Math.ceil(
                                threeTeamsRandom.Team1.reduce(
                                  (previousValue, currrentValue) =>
                                    currrentValue.Pass + previousValue,
                                  0
                                ) / threeTeamsRandom.Team1.length
                              )
                            )}${'▒'.repeat(
                              10 -
                                Math.ceil(
                                  threeTeamsRandom.Team1.reduce(
                                    (previousValue, currrentValue) =>
                                      currrentValue.Pass + previousValue,
                                    0
                                  ) / threeTeamsRandom.Team1.length
                                )
                            )} `
                          : `${'█'.repeat(
                              Math.ceil(
                                threeTeamsFair.Team1.reduce(
                                  (previousValue, currrentValue) =>
                                    currrentValue.Pass + previousValue,
                                  0
                                ) / threeTeamsFair.Team1.length
                              )
                            )}${'▒'.repeat(
                              10 -
                                Math.ceil(
                                  threeTeamsFair.Team1.reduce(
                                    (previousValue, currrentValue) =>
                                      currrentValue.Pass + previousValue,
                                    0
                                  ) / threeTeamsFair.Team1.length
                                )
                            )} `}
                      </p>
                      <p>
                        {randomFlag
                          ? `${'█'.repeat(
                              Math.ceil(
                                threeTeamsRandom.Team1.reduce(
                                  (previousValue, currrentValue) =>
                                    currrentValue.Dribble + previousValue,
                                  0
                                ) / threeTeamsRandom.Team1.length
                              )
                            )}${'▒'.repeat(
                              10 -
                                Math.ceil(
                                  threeTeamsRandom.Team1.reduce(
                                    (previousValue, currrentValue) =>
                                      currrentValue.Dribble + previousValue,
                                    0
                                  ) / threeTeamsRandom.Team1.length
                                )
                            )} `
                          : `${'█'.repeat(
                              Math.ceil(
                                threeTeamsFair.Team1.reduce(
                                  (previousValue, currrentValue) =>
                                    currrentValue.Dribble + previousValue,
                                  0
                                ) / threeTeamsFair.Team1.length
                              )
                            )}${'▒'.repeat(
                              10 -
                                Math.ceil(
                                  threeTeamsFair.Team1.reduce(
                                    (previousValue, currrentValue) =>
                                      currrentValue.Dribble + previousValue,
                                    0
                                  ) / threeTeamsFair.Team1.length
                                )
                            )} `}
                      </p>
                      <p>
                        {randomFlag
                          ? `${'█'.repeat(
                              Math.ceil(
                                threeTeamsRandom.Team1.reduce(
                                  (previousValue, currrentValue) =>
                                    currrentValue.Speed + previousValue,
                                  0
                                ) / threeTeamsRandom.Team1.length
                              )
                            )}${'▒'.repeat(
                              10 -
                                Math.ceil(
                                  threeTeamsRandom.Team1.reduce(
                                    (previousValue, currrentValue) =>
                                      currrentValue.Speed + previousValue,
                                    0
                                  ) / threeTeamsRandom.Team1.length
                                )
                            )} `
                          : `${'█'.repeat(
                              Math.ceil(
                                threeTeamsFair.Team1.reduce(
                                  (previousValue, currrentValue) =>
                                    currrentValue.Speed + previousValue,
                                  0
                                ) / threeTeamsFair.Team1.length
                              )
                            )}${'▒'.repeat(
                              10 -
                                Math.ceil(
                                  threeTeamsFair.Team1.reduce(
                                    (previousValue, currrentValue) =>
                                      currrentValue.Speed + previousValue,
                                    0
                                  ) / threeTeamsFair.Team1.length
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
                      <strong>
                        {randomFlag
                          ? `${'█'.repeat(
                              Math.ceil(
                                threeTeamsRandom.Team1.reduce(
                                  (previousValue, currrentValue) =>
                                    currrentValue.Overall + previousValue,
                                  0
                                ) / threeTeamsRandom.Team1.length
                              )
                            )}${'▒'.repeat(
                              10 -
                                Math.ceil(
                                  threeTeamsRandom.Team1.reduce(
                                    (previousValue, currrentValue) =>
                                      currrentValue.Overall + previousValue,
                                    0
                                  ) / threeTeamsRandom.Team1.length
                                )
                            )} ${Math.ceil(
                              threeTeamsRandom.Team1.reduce(
                                (previousValue, currrentValue) =>
                                  currrentValue.Overall + previousValue,
                                0
                              ) / threeTeamsRandom.Team1.length
                            )}`
                          : `${'█'.repeat(
                              Math.ceil(
                                threeTeamsFair.Team1.reduce(
                                  (previousValue, currrentValue) =>
                                    currrentValue.Overall + previousValue,
                                  0
                                ) / threeTeamsFair.Team1.length
                              )
                            )}${'▒'.repeat(
                              10 -
                                Math.ceil(
                                  threeTeamsFair.Team1.reduce(
                                    (previousValue, currrentValue) =>
                                      currrentValue.Overall + previousValue,
                                    0
                                  ) / threeTeamsFair.Team1.length
                                )
                            )} ${Math.ceil(
                              threeTeamsFair.Team1.reduce(
                                (previousValue, currrentValue) =>
                                  currrentValue.Overall + previousValue,
                                0
                              ) / threeTeamsFair.Team1.length
                            )} `}
                      </strong>
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
                  {threeTeamsRandom.Team2.length > 0
                    ? threeTeamsRandom.Team2.map((player, index) => {
                        return (
                          <PickedPlayer
                            key={index}
                            lineupPhoto={player.lineupImg}
                            lineupName={player.name}
                          />
                        );
                      })
                    : threeTeamsFair.Team2.map((player, index) => {
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
                                threeTeamsRandom.Team2.reduce(
                                  (previousValue, currrentValue) =>
                                    currrentValue.Defence + previousValue,
                                  0
                                ) / threeTeamsRandom.Team2.length
                              )
                            )}${'▒'.repeat(
                              10 -
                                Math.ceil(
                                  threeTeamsRandom.Team2.reduce(
                                    (previousValue, currrentValue) =>
                                      currrentValue.Defence + previousValue,
                                    0
                                  ) / threeTeamsRandom.Team2.length
                                )
                            )} `
                          : `${'█'.repeat(
                              Math.ceil(
                                threeTeamsFair.Team2.reduce(
                                  (previousValue, currrentValue) =>
                                    currrentValue.Defence + previousValue,
                                  0
                                ) / threeTeamsFair.Team2.length
                              )
                            )}${'▒'.repeat(
                              10 -
                                Math.ceil(
                                  threeTeamsFair.Team2.reduce(
                                    (previousValue, currrentValue) =>
                                      currrentValue.Defence + previousValue,
                                    0
                                  ) / threeTeamsFair.Team2.length
                                )
                            )} `}
                      </p>
                      <p>
                        {randomFlag
                          ? `${'█'.repeat(
                              Math.ceil(
                                threeTeamsRandom.Team2.reduce(
                                  (previousValue, currrentValue) =>
                                    currrentValue.Shoot + previousValue,
                                  0
                                ) / threeTeamsRandom.Team2.length
                              )
                            )}${'▒'.repeat(
                              10 -
                                Math.ceil(
                                  threeTeamsRandom.Team2.reduce(
                                    (previousValue, currrentValue) =>
                                      currrentValue.Shoot + previousValue,
                                    0
                                  ) / threeTeamsRandom.Team2.length
                                )
                            )} `
                          : `${'█'.repeat(
                              Math.ceil(
                                threeTeamsFair.Team2.reduce(
                                  (previousValue, currrentValue) =>
                                    currrentValue.Shoot + previousValue,
                                  0
                                ) / threeTeamsFair.Team2.length
                              )
                            )}${'▒'.repeat(
                              10 -
                                Math.ceil(
                                  threeTeamsFair.Team2.reduce(
                                    (previousValue, currrentValue) =>
                                      currrentValue.Shoot + previousValue,
                                    0
                                  ) / threeTeamsFair.Team2.length
                                )
                            )} `}
                      </p>
                      <p>
                        {randomFlag
                          ? `${'█'.repeat(
                              Math.ceil(
                                threeTeamsRandom.Team2.reduce(
                                  (previousValue, currrentValue) =>
                                    currrentValue.Pass + previousValue,
                                  0
                                ) / threeTeamsRandom.Team2.length
                              )
                            )}${'▒'.repeat(
                              10 -
                                Math.ceil(
                                  threeTeamsRandom.Team2.reduce(
                                    (previousValue, currrentValue) =>
                                      currrentValue.Pass + previousValue,
                                    0
                                  ) / threeTeamsRandom.Team2.length
                                )
                            )} `
                          : `${'█'.repeat(
                              Math.ceil(
                                threeTeamsFair.Team2.reduce(
                                  (previousValue, currrentValue) =>
                                    currrentValue.Pass + previousValue,
                                  0
                                ) / threeTeamsFair.Team2.length
                              )
                            )}${'▒'.repeat(
                              10 -
                                Math.ceil(
                                  threeTeamsFair.Team2.reduce(
                                    (previousValue, currrentValue) =>
                                      currrentValue.Pass + previousValue,
                                    0
                                  ) / threeTeamsFair.Team2.length
                                )
                            )} `}
                      </p>
                      <p>
                        {randomFlag
                          ? `${'█'.repeat(
                              Math.ceil(
                                threeTeamsRandom.Team2.reduce(
                                  (previousValue, currrentValue) =>
                                    currrentValue.Dribble + previousValue,
                                  0
                                ) / threeTeamsRandom.Team2.length
                              )
                            )}${'▒'.repeat(
                              10 -
                                Math.ceil(
                                  threeTeamsRandom.Team2.reduce(
                                    (previousValue, currrentValue) =>
                                      currrentValue.Dribble + previousValue,
                                    0
                                  ) / threeTeamsRandom.Team2.length
                                )
                            )} `
                          : `${'█'.repeat(
                              Math.ceil(
                                threeTeamsFair.Team2.reduce(
                                  (previousValue, currrentValue) =>
                                    currrentValue.Dribble + previousValue,
                                  0
                                ) / threeTeamsFair.Team2.length
                              )
                            )}${'▒'.repeat(
                              10 -
                                Math.ceil(
                                  threeTeamsFair.Team2.reduce(
                                    (previousValue, currrentValue) =>
                                      currrentValue.Dribble + previousValue,
                                    0
                                  ) / threeTeamsFair.Team2.length
                                )
                            )} `}
                      </p>
                      <p>
                        {randomFlag
                          ? `${'█'.repeat(
                              Math.ceil(
                                threeTeamsRandom.Team2.reduce(
                                  (previousValue, currrentValue) =>
                                    currrentValue.Speed + previousValue,
                                  0
                                ) / threeTeamsRandom.Team2.length
                              )
                            )}${'▒'.repeat(
                              10 -
                                Math.ceil(
                                  threeTeamsRandom.Team2.reduce(
                                    (previousValue, currrentValue) =>
                                      currrentValue.Speed + previousValue,
                                    0
                                  ) / threeTeamsRandom.Team2.length
                                )
                            )} `
                          : `${'█'.repeat(
                              Math.ceil(
                                threeTeamsFair.Team2.reduce(
                                  (previousValue, currrentValue) =>
                                    currrentValue.Speed + previousValue,
                                  0
                                ) / threeTeamsFair.Team2.length
                              )
                            )}${'▒'.repeat(
                              10 -
                                Math.ceil(
                                  threeTeamsFair.Team2.reduce(
                                    (previousValue, currrentValue) =>
                                      currrentValue.Speed + previousValue,
                                    0
                                  ) / threeTeamsFair.Team2.length
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
                      <strong>
                        {randomFlag
                          ? `${'█'.repeat(
                              Math.ceil(
                                threeTeamsRandom.Team2.reduce(
                                  (previousValue, currrentValue) =>
                                    currrentValue.Overall + previousValue,
                                  0
                                ) / threeTeamsRandom.Team2.length
                              )
                            )}${'▒'.repeat(
                              10 -
                                Math.ceil(
                                  threeTeamsRandom.Team2.reduce(
                                    (previousValue, currrentValue) =>
                                      currrentValue.Overall + previousValue,
                                    0
                                  ) / threeTeamsRandom.Team2.length
                                )
                            )} ${Math.ceil(
                              threeTeamsRandom.Team2.reduce(
                                (previousValue, currrentValue) =>
                                  currrentValue.Overall + previousValue,
                                0
                              ) / threeTeamsRandom.Team2.length
                            )}`
                          : `${'█'.repeat(
                              Math.ceil(
                                threeTeamsFair.Team2.reduce(
                                  (previousValue, currrentValue) =>
                                    currrentValue.Overall + previousValue,
                                  0
                                ) / threeTeamsFair.Team2.length
                              )
                            )}${'▒'.repeat(
                              10 -
                                Math.ceil(
                                  threeTeamsFair.Team2.reduce(
                                    (previousValue, currrentValue) =>
                                      currrentValue.Overall + previousValue,
                                    0
                                  ) / threeTeamsFair.Team2.length
                                )
                            )} ${Math.ceil(
                              threeTeamsFair.Team2.reduce(
                                (previousValue, currrentValue) =>
                                  currrentValue.Overall + previousValue,
                                0
                              ) / threeTeamsFair.Team2.length
                            )} `}
                      </strong>
                    </p>
                  </div>
                </div>
              </div>
            </article>
            <article className={styles.Team}>
              <div className={styles.TeamTop}>
                <div className={styles.Title}>
                  <h2>Team 3</h2>
                </div>
              </div>
              <div className={styles.TeamBody}>
                <div className={styles.Players}>
                  {threeTeamsRandom.Team3.length > 0
                    ? threeTeamsRandom.Team3.map((player, index) => {
                        return (
                          <PickedPlayer
                            key={index}
                            lineupPhoto={player.lineupImg}
                            lineupName={player.name}
                          />
                        );
                      })
                    : threeTeamsFair.Team3.map((player, index) => {
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
                                threeTeamsRandom.Team3.reduce(
                                  (previousValue, currrentValue) =>
                                    currrentValue.Defence + previousValue,
                                  0
                                ) / threeTeamsRandom.Team3.length
                              )
                            )}${'▒'.repeat(
                              10 -
                                Math.ceil(
                                  threeTeamsRandom.Team3.reduce(
                                    (previousValue, currrentValue) =>
                                      currrentValue.Defence + previousValue,
                                    0
                                  ) / threeTeamsRandom.Team3.length
                                )
                            )} `
                          : `${'█'.repeat(
                              Math.ceil(
                                threeTeamsFair.Team3.reduce(
                                  (previousValue, currrentValue) =>
                                    currrentValue.Defence + previousValue,
                                  0
                                ) / threeTeamsFair.Team3.length
                              )
                            )}${'▒'.repeat(
                              10 -
                                Math.ceil(
                                  threeTeamsFair.Team3.reduce(
                                    (previousValue, currrentValue) =>
                                      currrentValue.Defence + previousValue,
                                    0
                                  ) / threeTeamsFair.Team3.length
                                )
                            )} `}
                      </p>
                      <p>
                        {randomFlag
                          ? `${'█'.repeat(
                              Math.ceil(
                                threeTeamsRandom.Team3.reduce(
                                  (previousValue, currrentValue) =>
                                    currrentValue.Shoot + previousValue,
                                  0
                                ) / threeTeamsRandom.Team3.length
                              )
                            )}${'▒'.repeat(
                              10 -
                                Math.ceil(
                                  threeTeamsRandom.Team3.reduce(
                                    (previousValue, currrentValue) =>
                                      currrentValue.Shoot + previousValue,
                                    0
                                  ) / threeTeamsRandom.Team3.length
                                )
                            )} `
                          : `${'█'.repeat(
                              Math.ceil(
                                threeTeamsFair.Team3.reduce(
                                  (previousValue, currrentValue) =>
                                    currrentValue.Shoot + previousValue,
                                  0
                                ) / threeTeamsFair.Team3.length
                              )
                            )}${'▒'.repeat(
                              10 -
                                Math.ceil(
                                  threeTeamsFair.Team3.reduce(
                                    (previousValue, currrentValue) =>
                                      currrentValue.Shoot + previousValue,
                                    0
                                  ) / threeTeamsFair.Team3.length
                                )
                            )} `}
                      </p>
                      <p>
                        {randomFlag
                          ? `${'█'.repeat(
                              Math.ceil(
                                threeTeamsRandom.Team3.reduce(
                                  (previousValue, currrentValue) =>
                                    currrentValue.Pass + previousValue,
                                  0
                                ) / threeTeamsRandom.Team3.length
                              )
                            )}${'▒'.repeat(
                              10 -
                                Math.ceil(
                                  threeTeamsRandom.Team3.reduce(
                                    (previousValue, currrentValue) =>
                                      currrentValue.Pass + previousValue,
                                    0
                                  ) / threeTeamsRandom.Team3.length
                                )
                            )} `
                          : `${'█'.repeat(
                              Math.ceil(
                                threeTeamsFair.Team3.reduce(
                                  (previousValue, currrentValue) =>
                                    currrentValue.Pass + previousValue,
                                  0
                                ) / threeTeamsFair.Team3.length
                              )
                            )}${'▒'.repeat(
                              10 -
                                Math.ceil(
                                  threeTeamsFair.Team3.reduce(
                                    (previousValue, currrentValue) =>
                                      currrentValue.Pass + previousValue,
                                    0
                                  ) / threeTeamsFair.Team3.length
                                )
                            )} `}
                      </p>
                      <p>
                        {randomFlag
                          ? `${'█'.repeat(
                              Math.ceil(
                                threeTeamsRandom.Team3.reduce(
                                  (previousValue, currrentValue) =>
                                    currrentValue.Dribble + previousValue,
                                  0
                                ) / threeTeamsRandom.Team3.length
                              )
                            )}${'▒'.repeat(
                              10 -
                                Math.ceil(
                                  threeTeamsRandom.Team3.reduce(
                                    (previousValue, currrentValue) =>
                                      currrentValue.Dribble + previousValue,
                                    0
                                  ) / threeTeamsRandom.Team3.length
                                )
                            )} `
                          : `${'█'.repeat(
                              Math.ceil(
                                threeTeamsFair.Team3.reduce(
                                  (previousValue, currrentValue) =>
                                    currrentValue.Dribble + previousValue,
                                  0
                                ) / threeTeamsFair.Team3.length
                              )
                            )}${'▒'.repeat(
                              10 -
                                Math.ceil(
                                  threeTeamsFair.Team3.reduce(
                                    (previousValue, currrentValue) =>
                                      currrentValue.Dribble + previousValue,
                                    0
                                  ) / threeTeamsFair.Team3.length
                                )
                            )} `}
                      </p>
                      <p>
                        {randomFlag
                          ? `${'█'.repeat(
                              Math.ceil(
                                threeTeamsRandom.Team3.reduce(
                                  (previousValue, currrentValue) =>
                                    currrentValue.Speed + previousValue,
                                  0
                                ) / threeTeamsRandom.Team3.length
                              )
                            )}${'▒'.repeat(
                              10 -
                                Math.ceil(
                                  threeTeamsRandom.Team3.reduce(
                                    (previousValue, currrentValue) =>
                                      currrentValue.Speed + previousValue,
                                    0
                                  ) / threeTeamsRandom.Team3.length
                                )
                            )} `
                          : `${'█'.repeat(
                              Math.ceil(
                                threeTeamsFair.Team3.reduce(
                                  (previousValue, currrentValue) =>
                                    currrentValue.Speed + previousValue,
                                  0
                                ) / threeTeamsFair.Team3.length
                              )
                            )}${'▒'.repeat(
                              10 -
                                Math.ceil(
                                  threeTeamsFair.Team3.reduce(
                                    (previousValue, currrentValue) =>
                                      currrentValue.Speed + previousValue,
                                    0
                                  ) / threeTeamsFair.Team3.length
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
                      <strong>
                        {randomFlag
                          ? `${'█'.repeat(
                              Math.ceil(
                                threeTeamsRandom.Team3.reduce(
                                  (previousValue, currrentValue) =>
                                    currrentValue.Overall + previousValue,
                                  0
                                ) / threeTeamsRandom.Team3.length
                              )
                            )}${'▒'.repeat(
                              10 -
                                Math.ceil(
                                  threeTeamsRandom.Team3.reduce(
                                    (previousValue, currrentValue) =>
                                      currrentValue.Overall + previousValue,
                                    0
                                  ) / threeTeamsRandom.Team3.length
                                )
                            )} ${Math.ceil(
                              threeTeamsRandom.Team3.reduce(
                                (previousValue, currrentValue) =>
                                  currrentValue.Overall + previousValue,
                                0
                              ) / threeTeamsRandom.Team3.length
                            )}`
                          : `${'█'.repeat(
                              Math.ceil(
                                threeTeamsFair.Team3.reduce(
                                  (previousValue, currrentValue) =>
                                    currrentValue.Overall + previousValue,
                                  0
                                ) / threeTeamsFair.Team3.length
                              )
                            )}${'▒'.repeat(
                              10 -
                                Math.ceil(
                                  threeTeamsFair.Team3.reduce(
                                    (previousValue, currrentValue) =>
                                      currrentValue.Overall + previousValue,
                                    0
                                  ) / threeTeamsFair.Team3.length
                                )
                            )} ${Math.ceil(
                              threeTeamsFair.Team3.reduce(
                                (previousValue, currrentValue) =>
                                  currrentValue.Overall + previousValue,
                                0
                              ) / threeTeamsFair.Team3.length
                            )} `}
                      </strong>
                    </p>
                  </div>
                </div>
              </div>
            </article>
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
        </section>
      </div>
    </main>
  );
}
