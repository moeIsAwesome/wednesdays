import Button from '../Button/Button';
import styles from './Modal.module.css';

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
}) {
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
                  const sorted = selectedPlayers.sort((a, b) =>
                    a.Overall < b.Overall ? 1 : b.Overall < a.Overall ? -1 : 0
                  );
                  console.log(sorted);
                }
              }}
            />
          </div>
        </form>
      </div>
    </div>
  );
}
