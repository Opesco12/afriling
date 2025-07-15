import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

const Quiz = () => {
  const { language } = useParams();
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [currentAnswer, setCurrentAnswer] = useState(null);
  const [showResults, setShowResults] = useState(false);

  const quizzes = {
    hausa: {
      title: "Hausa Greetings Quiz",
      questions: [
        {
          question: 'What does "Sannu" mean in English?',
          options: ["Hello", "Goodbye", "Thank you", "Please"],
          correctAnswer: "Hello",
        },
        {
          question: 'What is the Hausa word for "Good morning"?',
          options: [
            "Barka da yamma",
            "Barka da rana",
            "Barka da safe",
            "Barka da dare",
          ],
          correctAnswer: "Barka da safe",
        },
        {
          question: 'How do you say "How are you?" in Hausa?',
          options: ["Yaya kake?", "Ina gajiya?", "Mene ne?", "Lafiya lau?"],
          correctAnswer: "Lafiya lau?",
        },
      ],
    },
    igbo: {
      title: "Igbo Greetings Quiz",
      questions: [
        {
          question: 'What does "Nno" mean in English?',
          options: ["Hello", "Goodbye", "Thank you", "Please"],
          correctAnswer: "Hello",
        },
        {
          question: 'What is the Igbo word for "Good morning"?',
          options: ["Ụtụtụ ọma", "Mgbede ọma", "Ka chi fo", "Ekele"],
          correctAnswer: "Ụtụtụ ọma",
        },
        {
          question: 'How do you say "How are you?" in Igbo?',
          options: ["Kedu ka ị mere?", "Gịnị ka ọ bụ?", "Daalụ", "Biko"],
          correctAnswer: "Kedu ka ị mere?",
        },
      ],
    },
    yoruba: {
      title: "Yoruba Greetings Quiz",
      questions: [
        {
          question: 'What does "Ẹ káàbọ̀" mean in English?',
          options: ["Hello", "Goodbye", "Thank you", "Please"],
          correctAnswer: "Hello",
        },
        {
          question: 'What is the Yoruba word for "Good morning"?',
          options: ["Ẹ káàsán", "Ẹ káalẹ́", "Ẹ káàrọ̀", "O dàbọ̀"],
          correctAnswer: "Ẹ káàrọ̀",
        },
        {
          question: 'How do you say "How are you?" in Yoruba?',
          options: [
            "Bawo ni o ṣe wa?",
            "Kí ló ń ṣe?",
            "Ṣé dáadáa ni o?",
            "Ẹ jọ̀ọ́",
          ],
          correctAnswer: "Bawo ni o ṣe wa?",
        },
      ],
    },
  };

  const quiz = quizzes[language] || quizzes.hausa; // Fallback to Hausa if language not found
  const currentQuizQuestion = quiz.questions[currentQuestion];

  const handleAnswer = (answer) => {
    setCurrentAnswer(answer);
  };

  const handleNext = () => {
    if (currentAnswer !== null) {
      setAnswers([...answers, currentAnswer]);
      setCurrentAnswer(null); // Clear current answer for the next question
      if (currentQuestion < quiz.questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setShowResults(true);
      }
    }
  };

  const calculateScore = () => {
    return answers.reduce((score, answer, index) => {
      return answer === quiz.questions[index].correctAnswer ? score + 1 : score;
    }, 0);
  };

  if (showResults) {
    const score = calculateScore();
    return (
      <div className="bg-gray-100 min-h-screen font-sans">
        <header className="bg-white shadow p-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-green-600">AfrilLing</div>
          <nav className="space-x-4">
            <a
              href="#"
              className="text-gray-600 hover:text-green-600"
              onClick={() => navigate(-1)}
            >
              ←
            </a>
          </nav>
        </header>
        <div className="p-6 my-25">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-2">Quiz Results</h1>
          </div>
          <div className="max-w-md mx-auto bg-white p-6 py-15 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-4 text-center">{quiz.title}</h2>
            <p className="text-lg text-gray-600 mb-4 text-center">
              You scored {score} out of {quiz.questions.length}!
            </p>
            <p className="text-gray-600 mb-6 text-center">
              {score === quiz.questions.length
                ? "Excellent job! You mastered this quiz!"
                : score >= quiz.questions.length / 2
                ? "Good effort! Keep practicing to improve!"
                : "Don't worry, try again to boost your score!"}
            </p>
            <button
              className="w-full bg-green-600 text-white p-2 rounded"
              onClick={() => navigate("/dashboard")}
            >
              Go to Dashboard
            </button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen font-sans">
      <header className="bg-white shadow p-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-green-600">AfrilLing</div>
        <nav className="space-x-4">
          <a
            href="#"
            className="text-gray-600 hover:text-green-600"
            onClick={() => navigate(-1)}
          >
            ←
          </a>
        </nav>
      </header>
      <div className="p-6 my-10">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-2">Quiz</h1>
        </div>
        <div className="text-center my-5">
          <p className="text-lg text-gray-600">
            Question {currentQuestion + 1} of {quiz.questions.length}
          </p>
        </div>
        <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4 text-center">{quiz.title}</h2>
          <p className="text-lg font-semibold mb-4 text-center">
            {currentQuizQuestion.question}
          </p>
          <div className="space-y-4">
            {currentQuizQuestion.options.map((option, index) => (
              <label
                key={index}
                className="flex items-center p-2 border rounded"
              >
                <input
                  type="radio"
                  name="answer"
                  className="mr-2"
                  value={option}
                  checked={currentAnswer === option}
                  onChange={() => handleAnswer(option)}
                />
                {option}
              </label>
            ))}
          </div>
          <button
            className={`mt-6 w-full p-2 rounded ${
              currentAnswer === null
                ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                : "bg-green-600 text-white"
            }`}
            onClick={handleNext}
            disabled={currentAnswer === null}
          >
            Next
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Quiz;
