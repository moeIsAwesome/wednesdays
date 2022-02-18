import styles from './ThreeTeams.module.css';
import PickedPlayer from '../../components/PickedPlayer/PickedPlayer';
import Button from '../../components/Button/Button';
import { useNavigate } from 'react-router-dom';

export default function ThreeTeams() {
  const Navigate = useNavigate();
  return (
    <div className={styles.App}>
      <div className={styles.TeamsContainer}>
        <article className={styles.Team}>
          <div className={styles.Title}>
            <h2>Team 1</h2>
          </div>
          <div className={styles.Body}>
            <PickedPlayer
              lineupPhoto="https://lh3.google.com/u/2/d/13H4A8gP1vWr04AZAoLXZSSAhQ6V-tdSz=w1920-h937-iv1"
              lineupName="Bahman"
            />
            <PickedPlayer
              lineupPhoto="https://lh3.google.com/u/2/d/13H4A8gP1vWr04AZAoLXZSSAhQ6V-tdSz=w1920-h937-iv1"
              lineupName="Bahman"
            />
            <PickedPlayer
              lineupPhoto="https://lh3.google.com/u/2/d/13H4A8gP1vWr04AZAoLXZSSAhQ6V-tdSz=w1920-h937-iv1"
              lineupName="Bahman"
            />
            <PickedPlayer
              lineupPhoto="https://lh3.google.com/u/2/d/13H4A8gP1vWr04AZAoLXZSSAhQ6V-tdSz=w1920-h937-iv1"
              lineupName="Bahman"
            />

            <PickedPlayer
              lineupPhoto="https://lh3.google.com/u/2/d/13H4A8gP1vWr04AZAoLXZSSAhQ6V-tdSz=w1920-h937-iv1"
              lineupName="Bahman"
            />
          </div>
        </article>
        <article className={styles.Team}>
          <div className={styles.Title}>
            <h2>Team 3</h2>
          </div>
          <div className={styles.Body}>
            <PickedPlayer
              lineupPhoto="https://lh3.google.com/u/2/d/13H4A8gP1vWr04AZAoLXZSSAhQ6V-tdSz=w1920-h937-iv1"
              lineupName="Bahman"
            />
            <PickedPlayer
              lineupPhoto="https://lh3.google.com/u/2/d/13H4A8gP1vWr04AZAoLXZSSAhQ6V-tdSz=w1920-h937-iv1"
              lineupName="Bahman"
            />
            <PickedPlayer
              lineupPhoto="https://lh3.google.com/u/2/d/13H4A8gP1vWr04AZAoLXZSSAhQ6V-tdSz=w1920-h937-iv1"
              lineupName="Bahman"
            />
            <PickedPlayer
              lineupPhoto="https://lh3.google.com/u/2/d/13H4A8gP1vWr04AZAoLXZSSAhQ6V-tdSz=w1920-h937-iv1"
              lineupName="Bahman"
            />
            <PickedPlayer
              lineupPhoto="https://lh3.google.com/u/2/d/13H4A8gP1vWr04AZAoLXZSSAhQ6V-tdSz=w1920-h937-iv1"
              lineupName="Bahman"
            />
          </div>
        </article>
        <article className={styles.Team}>
          <div className={styles.Title}>
            <h2>Team 2</h2>
          </div>
          <div className={styles.Body}>
            <PickedPlayer
              lineupPhoto="https://lh3.google.com/u/2/d/13H4A8gP1vWr04AZAoLXZSSAhQ6V-tdSz=w1920-h937-iv1"
              lineupName="Bahman"
            />
            <PickedPlayer
              lineupPhoto="https://lh3.google.com/u/2/d/13H4A8gP1vWr04AZAoLXZSSAhQ6V-tdSz=w1920-h937-iv1"
              lineupName="Bahman"
            />
            <PickedPlayer
              lineupPhoto="https://lh3.google.com/u/2/d/13H4A8gP1vWr04AZAoLXZSSAhQ6V-tdSz=w1920-h937-iv1"
              lineupName="Bahman"
            />
            <PickedPlayer
              lineupPhoto="https://lh3.google.com/u/2/d/13H4A8gP1vWr04AZAoLXZSSAhQ6V-tdSz=w1920-h937-iv1"
              lineupName="Bahman"
            />
            <PickedPlayer
              lineupPhoto="https://lh3.google.com/u/2/d/13H4A8gP1vWr04AZAoLXZSSAhQ6V-tdSz=w1920-h937-iv1"
              lineupName="Bahman"
            />
          </div>
        </article>
      </div>
      <div className={styles.BtnContainer}>
        <Button
          text="back"
          functionalityOnClick={() => {
            Navigate('/wednesdays');
          }}
        />
        <Button text="again" />
      </div>
    </div>
  );
}
