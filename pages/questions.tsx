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

  const startQuiz = async () => {
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
