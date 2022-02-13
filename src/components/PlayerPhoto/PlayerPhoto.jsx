import styles from './PlayerPhoto.module.css';

export default function PlayerPhoto({ name, img }) {
  return (
    <article className={styles.PlayerBox}>
      <img src={img} alt={name} className={styles.PlayerPhoto} />
      <p className={styles.PlayerName}>{name}</p>
    </article>
  );
}
