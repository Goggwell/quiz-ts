// define Question type
export interface Question {
  question: string;
}

export const Question: React.FC<Question> = ({ question, ...props }) => {
  return <h3 dangerouslySetInnerHTML={{ __html: question }} {...props} />;
};
