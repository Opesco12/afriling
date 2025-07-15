import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

const QuizSelection = () => {
  const navigate = useNavigate();

  const languages = [
    {
      name: "Hausa",
      route: "/quiz/hausa",
      bgColor: "bg-red-100",
      buttonColor: "bg-orange-500",
    },
    {
      name: "Igbo",
      route: "/quiz/igbo",
      bgColor: "bg-green-100",
      buttonColor: "bg-green-600",
    },
    {
      name: "Yoruba",
      route: "/quiz/yoruba",
      bgColor: "bg-yellow-100",
      buttonColor: "bg-green-600",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen font-sans">
      {/* Header */}
      <header className="bg-white shadow p-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-green-600">AfrilLing</div>
      </header>

      {/* Main Content */}
      <div className="p-6 my-30">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-2">
            Select a Language for Your Quiz
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Choose a language to test your knowledge with a short quiz.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto ">
          {languages.map((lang) => (
            <div
              key={lang.name}
              className={`${lang.bgColor} p-6 rounded-lg shadow`}
            >
              <h3 className="text-xl font-bold mb-2">{lang.name}</h3>
              <p className="text-gray-600 mb-4">
                Test your knowledge of {lang.name} with a quick 3-question quiz.
              </p>
              <button
                className={`${lang.buttonColor} text-white px-4 py-2 rounded`}
                onClick={() => navigate(lang.route)}
              >
                Start {lang.name} Quiz
              </button>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default QuizSelection;
