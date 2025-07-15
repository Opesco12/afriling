import { useNavigate } from "react-router-dom";
import React from "react";

import Footer from "../components/Footer";

const HomeScreen = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-gray-100 min-h-screen font-sans">
      {/* Header */}
      <header className="bg-white shadow p-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-green-600">AfrilLing</div>
        <nav className="space-x-4">
          <a
            className="text-gray-600 hover:text-green-600 cursor-pointer"
            onClick={() => navigate("/profile")}
          >
            Profile
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-green-600"
          >
            Settings
          </a>
        </nav>
      </header>

      {/* Main Content */}
      <div className="p-6 md:px-15">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Your Languages */}
          <div className="bg-white p-4 rounded-lg shadow md:col-span-2">
            <h2 className="text-lg font-bold mb-2">Your Languages</h2>

            <div className="grid grid-cols-3 gap-5">
              <div className="space-y-2 border border-[#3FC251] p-4 rounded-xl">
                <div className="flex items-center justify-between">
                  <span>NG Hausa</span>
                  <span className="text-green-600">30% Complete</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-green-600 h-2.5 rounded-full"
                    style={{ width: "30%" }}
                  ></div>
                </div>
              </div>

              <div className="space-y-2 border border-[#3FC251] p-4 rounded-xl">
                <div className="flex items-center justify-between">
                  <span>NG Igbo</span>
                  <span className="text-green-600">10% Complete</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-green-600 h-2.5 rounded-full"
                    style={{ width: "10%" }}
                  ></div>
                </div>
              </div>

              <div className="space-y-2 border border-[#3FC251] p-4 rounded-xl">
                <div className="flex items-center justify-between">
                  <span>NG Yoruba</span>
                  <span className="text-green-600">0% Complete</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-green-600 h-2.5 rounded-full"
                    style={{ width: "0%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          {/* Daily Goal */}
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-lg font-bold mb-2">Daily Goal</h2>
            <div className="flex items-center justify-center flex-col">
              <div className="relative w-24 h-24">
                <svg
                  className="w-full h-full"
                  viewBox="0 0 100 100"
                >
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="green"
                    strokeWidth="8"
                    fill="transparent"
                    strokeDasharray="251.2"
                    strokeDashoffset="75.36"
                  />
                  <text
                    x="50"
                    y="50"
                    textAnchor="middle"
                    dy="0.3em"
                    className="text-green-600 font-bold"
                  >
                    75%
                  </text>
                </svg>
              </div>
              <p className="text-sm text-gray-600">3 of 4 lessons complete</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10">
          <div className="bg-white p-4 rounded-lg shadow md:col-span-2">
            <div className="flex items-center justify-between mb-4">
              <div
                className="bg-white p-4 rounded-lg shadow text-center hover:bg-gray-100 cursor-pointer"
                onClick={() => navigate("/cultural-stories")}
              >
                <div className="text-purple-600 mb-2">📖</div>
                <p>Cultural Stories</p>
                <p className="text-sm text-gray-600">
                  Learn through engaging narratives
                </p>
              </div>

              <div
                className="bg-white p-4 rounded-lg shadow text-center hover:bg-gray-100 cursor-pointer"
                onClick={() => navigate("/family-terms")}
              >
                <div className="text-red-600 mb-2">❤️</div>
                <p>Family Terms</p>
                <p className="text-sm text-gray-600">
                  Master family relationships
                </p>
              </div>

              <div
                className="bg-white p-4 rounded-lg shadow text-center hover:bg-gray-100 cursor-pointer"
                onClick={() => navigate("/quiz-selection")}
              >
                <div className="text-blue-600 mb-2">🧠</div>
                <p>Take Quiz</p>
                <p className="text-sm text-gray-600">Test your knowledge</p>
              </div>

              <div className="bg-white p-4 rounded-lg shadow text-center hover:bg-gray-100 cursor-pointer">
                <div className="text-green-600 mb-2">🎮</div>
                <p>Mini Game</p>
                <p className="text-sm text-gray-600">Learn through play</p>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-lg font-bold mb-4">Quick Actions</h2>
            <div className="space-y-2">
              <a
                href="#"
                className="block text-gray-600 hover:text-green-600"
              >
                Practice Pronunciation
              </a>
              <a
                href="#"
                className="block text-gray-600 hover:text-green-600"
              >
                Join Study Group
              </a>
              <a
                href="#"
                className="block text-gray-600 hover:text-green-600"
              >
                Schedule Practice
              </a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {/* Learning Modules */}
          <div className="bg-white p-4 rounded-lg shadow col-span-2">
            <h2 className="text-lg font-bold mb-4">Continue Learning</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-2 bg-purple-100 rounded">
                <span>Basic Greetings</span>
                <button className="bg-white text-gray-600 px-4 py-1 rounded">
                  Review
                </button>
              </div>
              <div className="flex items-center justify-between p-2 bg-green-100 rounded">
                <span>Family Members</span>
                <button className="bg-white text-gray-600 px-4 py-1 rounded">
                  Review
                </button>
              </div>
              <div className="flex items-center justify-between p-2 bg-orange-100 rounded">
                <span>Number 1-20</span>
                <button className="bg-orange-500 text-white px-4 py-1 rounded">
                  Start
                </button>
              </div>
              <div className="flex items-center justify-between p-2 bg-yellow-100 rounded">
                <span>Common Phrases</span>
                <button className="bg-orange-500 text-white px-4 py-1 rounded">
                  Start
                </button>
              </div>
            </div>
          </div>

          {/* Recent Achievements */}
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-lg font-bold mb-4">Recent Achievements</h2>
            <div className="space-y-2">
              <p className="text-gray-600">
                First Steps{" "}
                <span className="text-green-600">
                  Complete your first lesson
                </span>
              </p>
              <p className="text-gray-600">
                Dedicated Learner{" "}
                <span className="text-green-600">
                  Study for three consecutive days
                </span>
              </p>
              <p className="text-gray-600">
                Social Butterfly{" "}
                <span className="text-green-600">Join a study group</span>
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-5 gap-6 mt-6">
          {/* Learning Icons */}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomeScreen;
