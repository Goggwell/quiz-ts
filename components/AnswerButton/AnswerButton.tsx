import styles from "./AnswerButton.module.scss";

// define props of AnswerButton component
export type AnswerButtonProps = {
  children: React.ReactNode;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  state?: "neutral" | "correct" | "incorrect";
  value?: string;
};

export const AnswerButton: React.FC<AnswerButtonProps> = ({
  children,
  state = "neutral",
  ...props
}) => {
  const answerStateClass =
    state === "correct"
      ? styles.correct
      : state === "incorrect"
      ? styles.incorrect
      : styles.neutral;

  return (
    <button className={`${styles.answerButton} ${answerStateClass}`} {...props}>
      {children}
    </button>
  );
};
