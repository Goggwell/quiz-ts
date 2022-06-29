import styles from "./Result.module.scss";

import { AnswerType } from "../QuestionCard/QuestionCard";
import Link from "next/link";

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
        <Link href="/">
          <a>
            <button className={styles.result__finish_btn}>Finish</button>
          </a>
        </Link>
      </div>
    </div>
  );
};
