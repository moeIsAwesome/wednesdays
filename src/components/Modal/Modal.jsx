import Button from '../Button/Button';
import styles from './Modal.module.css';

export default function Modal() {
  return (
    <div className={styles.ModalWindow}>
      <div className={styles.Top}>
        <h2 className={styles.Title}>Teams</h2>
      </div>
      <div className={styles.Body}>
        <p className={styles.Content}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse
          reprehenderit amet illo. Fugit cumque aperiam, quibusdam amet
          distinctio, asperiores, numquam ex voluptatem ipsum assumenda esse
          veniam pariatur recusandae molestiae! Temporibus.
        </p>
        <form className={styles.Options}>
          <div className={styles.Select}>
            <label className={styles.Label}>
              <input id="two" type="radio" name="Teams" />
              <span>►</span>2 Teams
            </label>
            <label className={styles.Label}>
              <input id="three" type="radio" name="Teams" />
              <span>►</span>3 Teams
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
