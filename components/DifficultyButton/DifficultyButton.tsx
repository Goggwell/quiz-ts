import styles from "./DifficultyButton.module.scss";
import { useQuizDifficulty } from "../../hooks/useQuizDifficulty";
import Link from "next/link";

const DifficultyButton = (props: any) => {
  // using hook to grab state and actions from our store
  const [state, actions] = useQuizDifficulty();

  return (
    <Link href="/questions">
      <a className={styles.difficulty_button__link}>
        <button
          className={styles.difficulty_button}
          onClick={() => {
            actions.setQuizDifficulty(props.difficulty);
          }}
        >
          <h4>{props.difficulty}</h4>
          <p>Face off against questions in the {props.difficulty} category!</p>
        </button>
      </a>
    </Link>
  );
};

export default DifficultyButton;
