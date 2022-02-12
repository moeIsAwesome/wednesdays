import styles from './Button.module.css';

export default function Button({ text, something }) {
  return (
    <button type="button" className={styles.Button} onClick={something}>
      {text}
    </button>
  );
}
