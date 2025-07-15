import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Dashboard from "./pages/Dashboard";
import SignIn from "./pages/auth/SignIn";
import HomeScreen from "./pages/HomeScreen";
import CulturalStories from "./pages/CulturalStories";
import FamilyTerms from "./pages/FamilyTerms";
import Quiz from "./pages/Quiz";
import QuizResults from "./pages/QuizResults";
import Profile from "./pages/Profile";
import Stories from "./pages/Stories";
import QuizSelection from "./pages/QuizSelection";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Dashboard />}
          />
          <Route
            path="/dashboard"
            element={<HomeScreen />}
          />
          <Route
            path="/login"
            element={<SignIn />}
          />

          <Route
            path="/profile"
            element={<Profile />}
          />
          <Route
            path="/cultural-stories"
            element={<CulturalStories />}
          />

          <Route
            path="/stories/:language/:storyId"
            element={<Stories />}
          />
          <Route
            path="/family-terms"
            element={<FamilyTerms />}
          />
          <Route
            path="quiz-selection"
            element={<QuizSelection />}
          />
          <Route
            path="/quiz/:language"
            element={<Quiz />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
