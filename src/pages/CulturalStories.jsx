import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import Footer from "../components/Footer";

const CulturalStories = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("hausa");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const content = {
    hausa: {
      title: "Learn Through Hausa Stories",
      description:
        "Immerse yourself in Hausa culture while learning the language through engaging narratives",
      stories: [
        {
          title: "Ranar Kasuwa (Market Day)",
          level: "Beginner",
          description:
            "Learn essential market vocabulary through Nafsat's shopping adventure",
          settings: ["Kano Central Market"],
          characters: ["Nafsat", "Amina", "Mallam Audu", "Hajiya Aisha"],
          route: "/stories/hausa/0",
        },
        {
          title: "Taron Iyali (Family Gathering)",
          level: "Intermediate",
          description:
            "Discover family relationships and respect customs in Hausa culture",
          settings: ["Family compound in Zaria"],
          characters: ["Musa", "Baba", "Mama", "Kaka"],
          route: "/stories/hausa/1",
        },
      ],
    },
    igbo: {
      title: "Learn Through Igbo Stories",
      description:
        "Explore Igbo culture through captivating stories while learning the language",
      stories: [
        {
          title: "Ụbọchị Ahịa (Market Day)",
          level: "Beginner",
          description: "Learn market terms through Chidi's trading experience",
          settings: ["Onitsha Main Market"],
          characters: ["Chidi", "Nneka", "Oga Emeka"],
          route: "/stories/igbo/0",
        },
        {
          title: "Nzụkọ Ezinụlọ (Family Meeting)",
          level: "Intermediate",
          description: "Understand Igbo family traditions and values",
          settings: ["Village compound in Enugu"],
          characters: ["Obi", "Nna", "Nne", "Nne Nnukwu"],
          route: "/stories/igbo/1",
        },
      ],
    },
    yoruba: {
      title: "Learn Through Yoruba Stories",
      description:
        "Dive into Yoruba culture with stories that teach the language",
      stories: [
        {
          title: "Ọjọ Ọja (Market Day)",
          level: "Beginner",
          description:
            "Learn market vocabulary through Temi's shopping journey",
          settings: ["Oja Oba Market"],
          characters: ["Temi", "Iya Alata", "Baba Oniru"],
          route: "/stories/yoruba/0",
        },
        {
          title: "Ipade Idile (Family Gathering)",
          level: "Intermediate",
          description: "Explore Yoruba family customs and relationships",
          settings: ["Family house in Ibadan"],
          characters: ["Tunde", "Baba", "Mama", "Iya Agba"],
          route: "/stories/yoruba/1",
        },
      ],
    },
  };

  return (
    <div className="bg-gray-100 min-h-screen font-sans">
      {/* Header */}
      <header className="bg-white shadow p-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-green-600">AfrilLing</div>
        {/* <nav className="space-x-4">
          <a
            href="#"
            className="text-gray-600 hover:text-green-600"
          >
            ←
          </a>
        </nav> */}
      </header>

      {/* Main Content */}
      <div className="p-6 my-20">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-2">Cultural Stories</h1>
        </div>
        {/* Tabs */}
        <div className="bg-gray-100 p-4">
          <div className="max-w-4xl mx-auto flex space-x-4">
            {["hausa", "igbo", "yoruba"].map((lang) => (
              <button
                key={lang}
                className={`px-4 py-2 rounded ${
                  activeTab === lang
                    ? "bg-green-600 text-white"
                    : "bg-gray-200 text-gray-600"
                }`}
                onClick={() => handleTabChange(lang)}
              >
                {lang.charAt(0).toUpperCase() + lang.slice(1)}
              </button>
            ))}
          </div>
        </div>
        <div className="max-w-4xl mx-auto mt-10">
          <h3 className="text-2xl font-bold mb-4">
            {content[activeTab].title}
          </h3>
          <p className="text-gray-600 mb-6">{content[activeTab].description}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {content[activeTab].stories.map((story, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow"
            >
              <div className="flex items-center justify-center mb-2">
                <span className="text-green-600 mr-2">📖</span>
                <h4 className="text-lg font-bold">{story.title}</h4>
                <span
                  className={`ml-2 text-sm ${
                    story.level === "Beginner"
                      ? "text-green-600"
                      : "text-orange-600"
                  }`}
                >
                  {story.level}
                </span>
              </div>
              <p className="text-gray-600 mb-4">{story.description}</p>
              <ul className="text-gray-600 list-disc list-inside mb-4">
                {story.settings.map((setting, i) => (
                  <li key={i}>{setting}</li>
                ))}
                {story.characters.map((character, i) => (
                  <li key={i}>{character}</li>
                ))}
              </ul>
              <button
                className="bg-green-600 text-white px-4 py-2 rounded cursor-pointer"
                onClick={() => story.route && navigate(story.route)}
                disabled={!story.route}
              >
                Start Story
              </button>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CulturalStories;
