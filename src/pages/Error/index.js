import styles from './Error.module.css';
import Button from '../../components/Button/Button';
import { useNavigate } from 'react-router-dom';

export default function Error() {
  const Navigate = useNavigate();
  return (
    <div className={styles.App}>
      <h1>ERROR! Something went wrong!</h1>
      <h3>Make sure you've selected at least two players!</h3>
      <Button
        text="Back"
        functionalityOnClick={() => {
          Navigate('/wednesdays');
        }}
      />
    </div>
  );
}
