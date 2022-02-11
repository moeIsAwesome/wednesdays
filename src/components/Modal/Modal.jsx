import Button from '../Button/Button';
import styles from './Modal.module.css';

export default function Modal({ content, showModal }) {
  return (
    <div className={showModal ? styles.ModalWindow : styles.DisplayNone}>
      <div className={styles.Top}>
        <h2 className={styles.Title}>Teams</h2>
      </div>
      <div className={styles.Body}>
        <p className={styles.Content}>{content}</p>
        <form className={styles.Options}>
          <div className={styles.Select}>
            <label className={styles.Label}>
              <input id="two" type="radio" name="Teams" defaultChecked />
              <span className={styles.BlinkAnimation}>►</span>2 Teams
            </label>
            <label className={styles.Label}>
              <input id="three" type="radio" name="Teams" />
              <span className={styles.BlinkAnimation}>►</span>3 Teams
            </label>
          </div>
          <div className={styles.BackNext}>
            <Button text="Back" />
            <Button text="Next" />
          </div>
        </form>
      </div>
    </div>
  );
}
