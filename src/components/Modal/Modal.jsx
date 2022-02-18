import Button from '../Button/Button';
import styles from './Modal.module.css';

import { shuffle } from '../../myFunc';
import { useNavigate } from 'react-router-dom';

export default function Modal({
  title,
  content,
  op1,
  op2,
  groupName,
  radioId1,
  radioId2,
  showLineupModal,
  showTeamsModal,
  setShowLineupModal,
  setShowTeamsModal,
  radioOnChangeHandler,
  checkedValue1,
  checkedValue2,
  selectedPlayers,
  teamsNum,
  fairOrRand,
}) {
  let navigate = useNavigate();

  return (
    <div className={styles.ModalWindow}>
      <div className={styles.Top}>
        <h2 className={styles.Title}>{title}</h2>
      </div>
      <div className={styles.Body}>
        <p className={styles.Content}>{content}</p>
        <form className={styles.Options}>
          <div className={styles.Select}>
            <label className={styles.Label}>
              <input
                id={radioId1}
                type="radio"
                name={groupName}
                checked={checkedValue1}
                onChange={radioOnChangeHandler}
              />
              <span className={styles.BlinkAnimation}>►</span>
              {op1}
            </label>
            <label className={styles.Label}>
              <input
                id={radioId2}
                type="radio"
                name={groupName}
                checked={checkedValue2}
                onChange={radioOnChangeHandler}
              />
              <span className={styles.BlinkAnimation}>►</span> {op2}
            </label>
          </div>
          <div className={styles.BackNext}>
            <Button
              text="Back"
              functionalityOnClick={() => {
                if (showTeamsModal && !showLineupModal) {
                  setShowTeamsModal(false);
                } else {
                  setShowLineupModal(false);
                  setShowTeamsModal(true);
                }
              }}
            />
            <Button
              text="Next"
              functionalityOnClick={() => {
                if (showTeamsModal && !showLineupModal) {
                  setShowTeamsModal(false);
                  setShowLineupModal(true);
                } else {
                  setShowLineupModal(false);
                  navigate('twoteams', { replace: true });

                  if (teamsNum === 'two' && fairOrRand === 'fair') {
                    const sorted = selectedPlayers.sort((a, b) =>
                      a.Overall < b.Overall ? 1 : b.Overall < a.Overall ? -1 : 0
                    );
                    console.log('Two and Fair');
                    console.log('SortedPlayers:');
                    console.log(sorted);
                  } else if (teamsNum === 'two' && fairOrRand === 'random') {
                    navigate('twoteams', { replace: true });

                    const players = [...selectedPlayers];
                    const shuffledPlayers = shuffle(players);
                    console.log('TWo and Random');
                    console.log('ShuffledPlayers:');
                    console.log(shuffledPlayers);
                    //If I used const players = selectedplayers or directly changed the selectedplayers ui would be a mess since the picked players look at the order of the selecdeplayers to map, so by using spread operator i created a shallow copy of selected players
                  } else if (teamsNum === 'three' && fairOrRand === 'fair') {
                    const sorted = selectedPlayers.sort((a, b) =>
                      a.Overall < b.Overall ? 1 : b.Overall < a.Overall ? -1 : 0
                    );
                    console.log('Three and Fair');
                    console.log('SortedPlayers:');
                    console.log(sorted);
                  } else {
                    navigate('threeteams', { replace: true });

                    const players = [...selectedPlayers];
                    const shuffledPlayers = shuffle(players);
                    console.log('Three and Random');
                    console.log('ShuffledPlayers:');
                    console.log(shuffledPlayers);
                  }
                }
              }}
            />
          </div>
        </form>
      </div>
    </div>
  );
}
