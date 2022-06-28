import { useEffect, useState } from "react";
import Container from "../components/Container/Container";
import { useQuizDifficulty } from "../hooks/useQuizDifficulty";
import { fetchQuestions, QuestionState } from "./api/api";

export default function Questions() {
  const [state, actions] = useQuizDifficulty();
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  // init game configs and start game
  const startQuiz = async () => {
    // waits for questions to be fetched, and displays an error if not resolved
    try {
      setLoading(true);
      setGameOver(false);
      const quizQuestions = await fetchQuestions(state.quizDifficulty);
      setQuestions(quizQuestions);
      setLoading(false);
    } catch (err) {
      console.error(err);
    }
  };

  // runs async function upon loading
  useEffect(() => {
    startQuiz();
  }, []);

  return (
    <Container>
      <h1>Here are the questions</h1>
      {loading ? <p>Loading...</p> : null}
    </Container>
  );
}
