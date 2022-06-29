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
  return (
    <button className={["answer", "size", state].join(" ")} {...props}>
      {children}
    </button>
  );
};
