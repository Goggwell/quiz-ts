import React, { useEffect, useState } from "react";
import Container from "../components/Container/Container";
import { useQuizDifficulty } from "../hooks/useQuizDifficulty";
import { fetchQuestions, QuestionState } from "./api/api";
import {
  QuestionCard,
  AnswerType,
} from "../components/QuestionCard/QuestionCard";

const TOTAL_QUESTIONS = 10;

export default function Questions() {
  const [state, actions] = useQuizDifficulty();
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [userAnswers, setUserAnswers] = useState<AnswerType[]>([]);
  const [number, setNumber] = useState(0);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  // init game configs and start game
  const startQuiz = async () => {
    // waits for questions to be fetched, and displays an error if not resolved
    try {
      setLoading(true);
      setGameOver(false);
      const quizQuestions = await fetchQuestions(state.quizDifficulty);
      setQuestions(quizQuestions);
      setScore(0);
      setUserAnswers([]);
      setNumber(0);
      setLoading(false);
    } catch (err) {
      console.error(err);
    }
  };

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      const answer = e.currentTarget.value;
      const isCorrect = questions[number].correct_answer === answer;
      if (isCorrect) {
        setScore((prev) => prev + 1);
      }

      const answerObj = {
        answer,
        correctAnswer: questions[number].correct_answer,
        isCorrect,
        question: questions[number].question,
      };
      setUserAnswers((prev) => [...prev, answerObj]);
    }
  };

  const handleNextQuestion = () => {
    const nextQuestion = number + 1;
    nextQuestion === TOTAL_QUESTIONS
      ? setGameOver(true)
      : setNumber(nextQuestion);
  };

  return (
    <Container>
      {gameOver ? <button onClick={startQuiz}>START QUIZ</button> : null}
      {loading ? <p>Loading...</p> : null}
      {!loading && !gameOver ? (
        <QuestionCard
          answers={questions[number].answers}
          callback={checkAnswer}
          question={questions[number].question}
          questionNum={number + 1}
          userAnswer={userAnswers ? userAnswers[number] : undefined}
          totalQuestions={TOTAL_QUESTIONS}
        />
      ) : null}
    </Container>
  );
}
