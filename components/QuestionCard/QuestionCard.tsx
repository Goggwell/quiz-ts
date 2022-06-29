import { Question } from "../Question/Question";

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
    <Question question={question} />
    <div className="questionCard__answers">
      {answers.map((answer) => (
        <div className="questionCard__answer" key={answer}>
          {answer}
        </div>
      ))}
    </div>
  </div>
);
