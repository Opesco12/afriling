import React from "react";
import { Link } from "react-router-dom";

import Footer from "../components/Footer";
import Header from "../components/Header";

const Dashboard = () => {
  return (
    <div className="bg-gray-100 font-sans">
      <Header />
      <section className="text-center py-16 bg-gray-50">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Learn Nigerian Languages with Confidence
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Connect with your roots and expand your horizons by learning Hausa,
          Igbo, and Yoruba. Join thousands of adults discovering the beauty of
          Nigerian languages.
        </p>
        <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700">
          Start Learning
        </button>
        <div className="mt-8 flex justify-center space-x-8 text-gray-600">
          <div>50K+ Active Learners</div>
          <div>3 Nigeria Languages</div>
          <div>95% Success Rate</div>
        </div>
      </section>

      {/* Language Journey */}
      <section className="py-16 bg-white">
        <h2 className="text-3xl font-bold text-center mb-8">
          Choose Your Language Journey
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Each course is carefully designed by native speakers and linguists to
          provide an authentic and engaging learning experience.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-red-100 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-2">Hausa</h3>
            <p className="text-gray-600 mb-4">
              Learn the most widely spoken language in Northern Nigeria.
            </p>
            <ul className="text-gray-600 list-disc pl-5 mb-4">
              <li>Duration: 16 weeks</li>
              <li>Level: Beginner</li>
            </ul>
            <button className="bg-orange-500 text-white px-4 py-2 rounded">
              Start Hausa Course
            </button>
          </div>
          <div className="bg-green-100 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-2">Igbo</h3>
            <p className="text-gray-600 mb-4">
              Discover the linguistic heritage of the Igbo people.
            </p>
            <ul className="text-gray-600 list-disc pl-5 mb-4">
              <li>Duration: 12 weeks</li>
              <li>Level: Beginner</li>
            </ul>
            <button className="bg-green-600 text-white px-4 py-2 rounded">
              Start Igbo Course
            </button>
          </div>
          <div className="bg-yellow-100 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-2">Yoruba</h3>
            <p className="text-gray-600 mb-4">
              Master the melodious language of southwestern Nigeria.
            </p>
            <ul className="text-gray-600 list-disc pl-5 mb-4">
              <li>Duration: 16 weeks</li>
              <li>Level: Beginner</li>
            </ul>
            <button className="bg-green-600 text-white px-4 py-2 rounded">
              Start Yoruba Course
            </button>
          </div>
        </div>
        <div className="text-center mt-8">
          <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded">
            Take Quiz
          </button>
        </div>
      </section>

      {/* Why Choose AfrilLing */}
      <section className="py-16 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-8">
          Why Choose AfrilLing
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Our platform combines modern technology with deep cultural
          understanding to deliver the most effective language learning
          experience.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="text-green-600 mb-4">📚</div>
            <h3 className="text-xl font-bold mb-2">Interactive Lessons</h3>
            <p className="text-gray-600">
              Engaging content with stories, dialogs, and exercises.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="text-green-600 mb-4">🎧</div>
            <h3 className="text-xl font-bold mb-2">Native Audio</h3>
            <p className="text-gray-600">
              Learn proper pronunciation from native speakers.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="text-green-600 mb-4">👥</div>
            <h3 className="text-xl font-bold mb-2">Community Learning</h3>
            <p className="text-gray-600">
              Connect with fellow learners and practice.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="text-green-600 mb-4">🏆</div>
            <h3 className="text-xl font-bold mb-2">Flexible Schedule</h3>
            <p className="text-gray-600">
              Learn at your own pace with bite-sized lessons.
            </p>
          </div>
        </div>
      </section>

      {/* Nigeria Impact */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 p-6">
            <h2 className="text-3xl font-bold mb-4">NG Nigeria</h2>
            <p className="text-gray-600 mb-4">Unity in Diversity</p>
            <ul className="text-gray-600 list-disc pl-5">
              <li>Cultural development</li>
              <li>Learning includes cultural insight</li>
              <li>Professional development</li>
              <li>Business opportunities</li>
              <li>Family connection</li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://via.placeholder.com/300"
              alt="Nigeria Map"
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-8">
          What Our Learners Say
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Join thousands of Nigerians who have successfully learned new
          languages and enriched their personal and professional lives.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow">
            <p className="text-gray-600 mb-4">
              "Learning Hausa through AfrilLing opened so many doors for me in
              Northern Nigeria. The cultural insight helped me connect with the
              people."
            </p>
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gray-300 rounded-full mr-2"></div>
              <div>
                <p className="font-bold">Abdullahi Nuhu</p>
                <p className="text-gray-600">Business Executive, Lagos</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <p className="text-gray-600 mb-4">
              "Learning Hausa through AfrilLing opened so many doors for me in
              Northern Nigeria. The cultural insight helped me connect with the
              people."
            </p>
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gray-300 rounded-full mr-2"></div>
              <div>
                <p className="font-bold">Abdullahi Nuhu</p>
                <p className="text-gray-600">Business Executive, Lagos</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-orange-500 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Join Our Growing Community</h2>
        <p className="mb-6">
          Thousands of Nigerians are already on their language learning journey
        </p>
        <div className="flex justify-center space-x-8 text-lg">
          <div>50,000+ Happy Learners</div>
          <div>95% Completion Rate</div>
          <div>4.9/5 Average Rating</div>
          <div>36 State Recognized</div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Dashboard;
