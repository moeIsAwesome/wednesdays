import Button from '../Button/Button';
import styles from './Modal.module.css';

export default function Modal({
  title,
  content,
  op1,
  op2,
  showLineupModal,
  showTeamsModal,
  setShowLineupModal,
  setShowTeamsModal,
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
              <input id="two" type="radio" name="Teams" defaultChecked />
              <span className={styles.BlinkAnimation}>►</span>
              {op1}
            </label>
            <label className={styles.Label}>
              <input id="three" type="radio" name="Teams" />
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
                  alert('next page');
                }
              }}
            />
          </div>
        </form>
      </div>
    </div>
  );
}
