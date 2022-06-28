import { shuffleArray } from "../../utils/shuffleArray";

export type Question = {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
};

export type QuestionState = Question & { answers: string[] };

export enum Difficulty {
  EASY = "easy",
  MEDIUM = "medium",
  HARD = "hard",
}

export const fetchQuestions = async (
  difficulty: Difficulty
): Promise<QuestionState[]> => {
  const url = `https://opentdb.com/api.php?amount=10&difficulty=${difficulty}&type=multiple`;
  const res = await fetch(url);
  const data = await res.json();
  return data.results.map((question: Question) => ({
    ...question,
    answers: shuffleArray([
      ...question.incorrect_answers,
      question.correct_answer,
    ]),
  }));
};
