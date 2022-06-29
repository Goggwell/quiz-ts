import styles from "./Result.module.scss";

import { AnswerType } from "../QuestionCard/QuestionCard";
import Router from "next/router";

export type ResultProps = {
  answers: AnswerType[];
  score: number;
  totalScore: number;
};

export const Result: React.FC<ResultProps> = ({
  answers,
  score,
  totalScore,
}) => {
  const goToHome = () => {
    Router.push("/");
  };

  return (
    <div className={styles.result__container}>
      <table>
        <tr>
          <th>Question</th>
          <th>Your Answer</th>
          <th>Correct Answer</th>
        </tr>
        {answers.map((answer, i) => (
          <tr
            className={`${
              answer.isCorrect ? styles.correct : styles.incorrect
            }`}
            key={i}
          >
            <td>
              <span dangerouslySetInnerHTML={{ __html: answer.question }} />
            </td>
            <td>
              <span dangerouslySetInnerHTML={{ __html: answer.answer }} />
            </td>
            <td>
              <span
                dangerouslySetInnerHTML={{ __html: answer.correctAnswer }}
              />
            </td>
          </tr>
        ))}
      </table>
      <div className={styles.result__action_bar}>
        <div className={styles.result__score}>
          Score: {score} / {totalScore}
        </div>
        <button className={styles.result__finish_btn} onClick={goToHome}>
          Finish
        </button>
      </div>
    </div>
  );
};
