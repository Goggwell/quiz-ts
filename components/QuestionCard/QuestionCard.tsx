import { Question } from "../Question/Question";
import { AnswerButton } from "../AnswerButton/AnswerButton";

// define answer type
export type AnswerType = {
  answer: string;
  correctAnswer: string;
  isCorrect: boolean;
  question: string;
};

// define props for QuestionCard component
export type QuestionCardProps = {
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  question: string;
  questionNum: number;
  userAnswer: AnswerType | undefined;
  totalQuestions: number;
};

export const QuestionCard: React.FC<QuestionCardProps> = ({
  answers,
  callback,
  question,
  questionNum,
  userAnswer,
  totalQuestions,
}) => (
  <div className="questionCard">
    <span className="questionCard__number">
      {questionNum} / {totalQuestions}
    </span>
    {/* To avoid confusion, 'Question' component that has a 'question' prop which takes 'question' as an argument */}
    <Question question={question} />
    <div className="questionCard__answers">
      {answers.map((answer) => (
        <AnswerButton
          key={answer}
          state={
            userAnswer?.isCorrect === undefined
              ? "neutral"
              : userAnswer.answer === answer && userAnswer.isCorrect
              ? "correct"
              : userAnswer.answer === answer
              ? "incorrect"
              : "neutral"
          }
          disabled={!!userAnswer}
          value={answer}
          onClick={callback}
        >
          <span dangerouslySetInnerHTML={{ __html: answer }} />
        </AnswerButton>
      ))}
    </div>
  </div>
);
