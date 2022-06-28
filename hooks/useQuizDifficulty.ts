import { createStore, createHook } from "react-sweet-state";
import { Difficulty } from "../pages/api/api";

const Store = createStore({
  initialState: {
    quizDifficulty: Difficulty.EASY,
  },
  actions: {
    setQuizDifficulty:
      (difficulty) =>
      ({ setState }) => {
        setState({ quizDifficulty: difficulty });
      },
  },
});

export const useQuizDifficulty = createHook(Store);
