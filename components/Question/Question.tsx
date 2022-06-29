import styles from "./Question.module.scss";

// define Question type
export type Question = {
  question: string;
};

export const Question: React.FC<Question> = ({ question, ...props }) => {
  return (
    <h3
      className={styles.question}
      dangerouslySetInnerHTML={{ __html: question }}
      {...props}
    />
  );
};
