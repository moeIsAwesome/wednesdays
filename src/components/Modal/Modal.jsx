import Button from '../Button/Button';
import styles from './Modal.module.css';

import { shuffle } from '../../myFunctions/shuffle';
import { chunker, getSum } from '../../myFunctions/twoFairTeams';
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
                    navigate('2fair', { replace: true });

                    const sorted = selectedPlayers.sort((a, b) =>
                      a.Overall < b.Overall ? 1 : b.Overall < a.Overall ? -1 : 0
                    );

                    const sortedPlayers = [...sorted];
                    console.log('Two and Fair');
                    console.log('SortedPlayers:');
                    console.log(sorted);

                    const chunked = chunker(sortedPlayers, 2);
                    let arrays = {
                      arr1: [],
                      arr2: [],
                    };

                    chunked.forEach((chunker) => {
                      let a = [];
                      Object.keys(arrays).forEach((arr) => {
                        a.push({ name: arr, value: getSum(arrays[arr]) });
                      });
                      a.sort((a, b) => {
                        return a.value - b.value;
                      });
                      for (let i = 0; i < a.length; i++) {
                        if (chunker[i]) {
                          arrays[a[i].name].push(chunker[i]);
                        }
                      }
                    });
                    console.log('The most fair teams:');
                    console.log(arrays);
                    Object.keys(arrays).forEach((key) => {
                      console.log(getSum(arrays[key]));
                    });
                  } else if (teamsNum === 'two' && fairOrRand === 'random') {
                    navigate('twoteams', { replace: true });

                    const players = [...selectedPlayers];
                    const shuffledPlayers = shuffle(players);
                    const arr1 = shuffledPlayers.splice(
                      0,
                      Math.ceil(shuffledPlayers.length / 2)
                    );
                    const arr2 = shuffledPlayers;
                    console.log('TWo and Random');
                    console.log('Shuffled Team 1:');
                    console.log(arr1);
                    console.log('Shuffled Team 2:');
                    console.log(arr2);
                  } else if (teamsNum === 'three' && fairOrRand === 'fair') {
                    navigate('3fair', { replace: true });
                    const sorted = selectedPlayers.sort((a, b) =>
                      a.Overall < b.Overall ? 1 : b.Overall < a.Overall ? -1 : 0
                    );
                    console.log('Three and Fair');
                    console.log('Random Teams:');
                    console.log(sorted);
                    const sortedPlayers = [...sorted];

                    const chunked = chunker(sortedPlayers, 3);
                    let arrays = {
                      arr1: [],
                      arr2: [],
                      arr3: [],
                    };

                    chunked.forEach((chunker) => {
                      let a = [];
                      Object.keys(arrays).forEach((arr) => {
                        a.push({ name: arr, value: getSum(arrays[arr]) });
                      });
                      a.sort((a, b) => {
                        return a.value - b.value;
                      });
                      for (let i = 0; i < a.length; i++) {
                        if (chunker[i]) {
                          arrays[a[i].name].push(chunker[i]);
                        }
                      }
                    });
                    console.log('The most fair teams:');
                    console.log(arrays);
                    Object.keys(arrays).forEach((key) => {
                      console.log(getSum(arrays[key]));
                    });
                  } else {
                    navigate('threeteams', { replace: true });

                    const players = [...selectedPlayers];
                    const shuffledPlayers = shuffle(players);
                    console.log('Three and Random');
                    const arr1 = shuffledPlayers.splice(
                      0,
                      Math.ceil(shuffledPlayers.length / 3)
                    );

                    const arr2 = shuffledPlayers.splice(
                      0,
                      Math.ceil(shuffledPlayers.length / 2)
                    );
                    const arr3 = shuffledPlayers;
                    console.log('Shuffled Team 1:');
                    console.log(arr1);
                    console.log(arr2);
                    console.log(arr3);
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
