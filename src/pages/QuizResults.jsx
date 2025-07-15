import React from "react";
import Footer from "../components/Footer";

const QuizResults = () => {
  return (
    <div className="bg-gray-100 min-h-screen font-sans">
      {/* Header */}
      <header className="bg-white shadow p-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-green-600">AfrilLing</div>
        <nav className="space-x-4 flex items-center">
          <a
            href="#"
            className="text-gray-600 hover:text-green-600"
          >
            ←
          </a>
          <div className="text-center">
            <p className="text-sm text-gray-600">Quiz Results</p>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <div className="p-6">
        <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow text-center">
          <div className="text-red-600 text-4xl mb-4">❌</div>
          <h2 className="text-xl font-bold mb-2">Keep practicing!</h2>
          <p className="text-lg text-green-600 mb-4">You scored 1 of 3</p>
          <p className="text-xl font-bold mb-6">33%</p>
          <div className="space-x-4">
            <button className="bg-green-600 text-white px-4 py-2 rounded">
              Finish Quiz
            </button>
            <button className="bg-gray-200 text-gray-600 px-4 py-2 rounded">
              Try again
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default QuizResults;
