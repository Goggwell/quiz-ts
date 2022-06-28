import styles from "./DifficultyButton.module.scss";
import { useQuizDifficulty } from "../../hooks/useQuizDifficulty";
import Router from "next/router";

const DifficultyButton = (props: any) => {
  // using hook to grab state and actions from our store
  const [state, actions] = useQuizDifficulty();
  const goToQuestionsPage = () => {
    Router.push("/questions");
  };

  return (
    <button
      className={styles.difficulty_button}
      onClick={() => {
        actions.setQuizDifficulty(props.difficulty);
        goToQuestionsPage();
      }}
    >
      <h4>{props.difficulty}</h4>
      <p>Face off against questions in the {props.difficulty} category!</p>
    </button>
  );
};

export default DifficultyButton;
