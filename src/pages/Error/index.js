import styles from './Error.module.css';
import Button from '../../components/Button/Button';
import { useNavigate } from 'react-router-dom';

export default function Error() {
  const Navigate = useNavigate();
  return (
    <div className={styles.App}>
      <h1>ERROR!</h1>
      <Button
        text="Back"
        functionalityOnClick={() => {
          Navigate('/wednesdays');
        }}
      />
    </div>
  );
}
