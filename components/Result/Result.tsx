import { AnswerType } from "../QuestionCard/QuestionCard";

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
    <div className="result__container">
      <table>
        <tr>
          <th>Question</th>
          <th>Your Answer</th>
          <th>Correct Answer</th>
        </tr>
        {answers.map((answer) => (
          <tr
            className={`${answer.isCorrect ? "correct" : "incorrect"}`}
            key={answer}
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
      <div className="result__score">
        {score} / {totalScore}
      </div>
    </div>
  );
};
