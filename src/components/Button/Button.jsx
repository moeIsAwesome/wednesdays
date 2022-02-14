import styles from './Button.module.css';

export default function Button({ text, functionalityOnClick }) {
  return (
    <button
      type="button"
      className={styles.Button}
      onClick={functionalityOnClick}
    >
      {text}
    </button>
  );
}
