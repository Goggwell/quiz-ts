import { createStore, createHook } from "react-sweet-state";
import { Difficulty } from "../pages/api/api";

// create store for quiz difficulty state management
const Store = createStore({
  // value of store on initialization
  initialState: {
    quizDifficulty: Difficulty.EASY,
  },
  // actions that trigger store mutation
  actions: {
    // function that sets difficulty of quiz
    setQuizDifficulty:
      (difficulty) =>
      ({ setState }) => {
        // mutate state synchronously
        setState({ quizDifficulty: difficulty });
      },
  },
});

// create hook to use in other components
export const useQuizDifficulty = createHook(Store);
