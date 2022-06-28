import { shuffleArray } from "../../utils/shuffleArray";

// question type for handling data response from API
export type Question = {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
};

// QuestionState 'intersection' type that takes a question and a string array of answers
// API returns correct and incorrect answers separately, however our data needs to exist within same array to shuffle all answers
export type QuestionState = Question & { answers: string[] };

// define difficulty cases
export enum Difficulty {
  EASY = "easy",
  MEDIUM = "medium",
  HARD = "hard",
}

// fetches mapped data as a new QuestionState, with the answers shuffled
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
