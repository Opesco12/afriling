import { useParams, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import Footer from "../components/Footer";

const Stories = () => {
  const { language, storyId } = useParams();
  const navigate = useNavigate();
  const [currentChapter, setCurrentChapter] = useState(0);

  const stories = {
    hausa: [
      {
        title: "Ranar Kasuwa (Market Day)",
        level: "Beginner",
        chapters: [
          {
            subtitle: "Arriving at the Market",
            setting: "Kano Central Market",
            characters: ["Nafsat", "Amina", "Mallam Audu"],
            text: {
              native:
                "Amina ya zo kasuwa da safe. Ta ga cewa akwai mutane da yawa.",
              english:
                "Amina arrived at the market in the morning. She saw that there were many people.",
            },
            vocabulary: [
              { word: "kasuwa", translation: "Market" },
              { word: "safe", translation: "Morning" },
              { word: "mutane", translation: "People" },
            ],
            culturalContext: "Traditional market in Northern Nigeria",
          },
          {
            subtitle: "Bargaining for Goods",
            setting: "Kano Central Market",
            characters: ["Nafsat", "Hajiya Aisha"],
            text: {
              native:
                "Nafsat ta fara ciniki da Hajiya Aisha. Ta nemi ragi a kan kayan.",
              english:
                "Nafsat started bargaining with Hajiya Aisha. She asked for a discount on the goods.",
            },
            vocabulary: [
              { word: "ciniki", translation: "Bargaining" },
              { word: "ragi", translation: "Discount" },
              { word: "kayan", translation: "Goods" },
            ],
            culturalContext:
              "Bargaining is a common practice in Nigerian markets",
          },
        ],
      },
      {
        title: "Taron Iyali (Family Gathering)",
        level: "Intermediate",
        chapters: [
          {
            subtitle: "Preparing for the Gathering",
            setting: "Family compound in Zaria",
            characters: ["Musa", "Baba", "Mama"],
            text: {
              native:
                "Musa ya shirya don taron iyali. Ya taimaka wa Mama wajen dafa abinci.",
              english:
                "Musa prepared for the family gathering. He helped Mama with cooking.",
            },
            vocabulary: [
              { word: "taron", translation: "Gathering" },
              { word: "iyali", translation: "Family" },
              { word: "dafa", translation: "Cooking" },
            ],
            culturalContext:
              "Family gatherings are central to Hausa social life",
          },
          {
            subtitle: "Welcoming Relatives",
            setting: "Family compound in Zaria",
            characters: ["Musa", "Kaka"],
            text: {
              native: "Kaka ta zo daga Kano. Musa ya ji daɗin ganinta.",
              english: "Kaka arrived from Kano. Musa was happy to see her.",
            },
            vocabulary: [
              { word: "Kaka", translation: "Grandmother" },
              { word: "ji daɗin", translation: "Be happy" },
              { word: "ganinta", translation: "Seeing her" },
            ],
            culturalContext: "Respect for elders is a key Hausa value",
          },
        ],
      },
    ],
    igbo: [
      {
        title: "Ụbọchị Ahịa (Market Day)",
        level: "Beginner",
        chapters: [
          {
            subtitle: "Arriving at the Market",
            setting: "Onitsha Main Market",
            characters: ["Chidi", "Nneka"],
            text: {
              native:
                "Chidi rutere n'ahịa n'ụtụtụ. Ọ hụrụ na e nwere ọtụtụ ndị mmadụ.",
              english:
                "Chidi arrived at the market in the morning. He saw that there were many people.",
            },
            vocabulary: [
              { word: "ahịa", translation: "Market" },
              { word: "ụtụtụ", translation: "Morning" },
              { word: "ndị mmadụ", translation: "People" },
            ],
            culturalContext: "Markets are central to Igbo community life",
          },
          {
            subtitle: "Trading Goods",
            setting: "Onitsha Main Market",
            characters: ["Chidi", "Oga Emeka"],
            text: {
              native:
                "Chidi malitere ịzụ ahịa na Oga Emeka. Ọ rịọrọ mbelata ego.",
              english:
                "Chidi started trading with Oga Emeka. He asked for a price reduction.",
            },
            vocabulary: [
              { word: "ịzụ ahịa", translation: "Trading" },
              { word: "mbelata", translation: "Reduction" },
              { word: "ego", translation: "Money" },
            ],
            culturalContext: "Negotiation is a key skill in Igbo markets",
          },
        ],
      },
      {
        title: "Nzụkọ Ezinụlọ (Family Meeting)",
        level: "Intermediate",
        chapters: [
          {
            subtitle: "Planning the Meeting",
            setting: "Village compound in Enugu",
            characters: ["Obi", "Nna", "Nne"],
            text: {
              native:
                "Obi na-akwado maka nzụkọ ezinụlọ. Ọ na-enyere Nne aka n'isi nri.",
              english:
                "Obi prepared for the family meeting. He helped Nne with cooking.",
            },
            vocabulary: [
              { word: "nzụkọ", translation: "Meeting" },
              { word: "ezinụlọ", translation: "Family" },
              { word: "nri", translation: "Food" },
            ],
            culturalContext: "Family meetings strengthen Igbo community bonds",
          },
          {
            subtitle: "Greeting Elders",
            setting: "Village compound in Enugu",
            characters: ["Obi", "Nne Nnukwu"],
            text: {
              native:
                "Nne Nnukwu bịara site na Owerri. Obi nwere obi ụtọ ịhụ ya.",
              english: "Nne Nnukwu came from Owerri. Obi was happy to see her.",
            },
            vocabulary: [
              { word: "Nne Nnukwu", translation: "Grandmother" },
              { word: "obi ụtọ", translation: "Happiness" },
              { word: "ịhụ", translation: "To see" },
            ],
            culturalContext: "Respect for elders is a core Igbo value",
          },
        ],
      },
    ],
    yoruba: [
      {
        title: "Ọjọ Ọja (Market Day)",
        level: "Beginner",
        chapters: [
          {
            subtitle: "Arriving at the Market",
            setting: "Oja Oba Market",
            characters: ["Temi", "Iya Alata"],
            text: {
              native: "Temi de ọja ni owurọ. O ri pe ọpọlọpọ eniyan wa nibẹ.",
              english:
                "Temi arrived at the market in the morning. She saw that there were many people.",
            },
            vocabulary: [
              { word: "ọja", translation: "Market" },
              { word: "owurọ", translation: "Morning" },
              { word: "eniyan", translation: "People" },
            ],
            culturalContext: "Yoruba markets are vibrant community hubs",
          },
          {
            subtitle: "Buying Spices",
            setting: "Oja Oba Market",
            characters: ["Temi", "Baba Oniru"],
            text: {
              native:
                "Temi bẹrẹ idunadura pẹlu Baba Oniru. O beere fun idinku owo.",
              english:
                "Temi started negotiating with Baba Oniru. She asked for a price reduction.",
            },
            vocabulary: [
              { word: "idunadura", translation: "Negotiation" },
              { word: "idinku", translation: "Reduction" },
              { word: "owo", translation: "Money" },
            ],
            culturalContext: "Spices are a key part of Yoruba cuisine",
          },
        ],
      },
      {
        title: "Ipade Idile (Family Gathering)",
        level: "Intermediate",
        chapters: [
          {
            subtitle: "Organizing the Gathering",
            setting: "Family house in Ibadan",
            characters: ["Tunde", "Baba", "Mama"],
            text: {
              native:
                "Tunde n ṣeto fun ipade idile. O ṣe iranlọwọ fun Mama lati se ounjẹ.",
              english:
                "Tunde prepared for the family gathering. He helped Mama with cooking.",
            },
            vocabulary: [
              { word: "ipade", translation: "Gathering" },
              { word: "idile", translation: "Family" },
              { word: "ounjẹ", translation: "Food" },
            ],
            culturalContext:
              "Family gatherings are important in Yoruba culture",
          },
          {
            subtitle: "Welcoming Elders",
            setting: "Family house in Ibadan",
            characters: ["Tunde", "Iya Agba"],
            text: {
              native: "Iya Agba wa lati Osogbo. Tunde dun lati ri i.",
              english: "Iya Agba came from Osogbo. Tunde was happy to see her.",
            },
            vocabulary: [
              { word: "Iya Agba", translation: "Grandmother" },
              { word: "dun", translation: "Happy" },
              { word: "ri", translation: "See" },
            ],
            culturalContext:
              "Respect for elders is a cornerstone of Yoruba values",
          },
        ],
      },
    ],
  };

  // Map storyId to index (assuming "hausa" routes to first story, "hausa/1" to second, etc.)
  const storyIndex = storyId ? parseInt(storyId, 10) : 0;
  const currentStory = stories[language]?.[storyIndex];
  const chapter = currentStory?.chapters[currentChapter];

  if (!currentStory || !chapter) {
    return (
      <div className="min-h-screen bg-gray-100">
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
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6 my-10">
          <p className="text-gray-700">
            Story not found for the selected language or story ID.
          </p>
        </div>
        <Footer />
      </div>
    );
  }

  const handleNextChapter = () => {
    if (currentChapter < currentStory.chapters.length - 1) {
      setCurrentChapter(currentChapter + 1);
    }
  };

  const handlePreviousChapter = () => {
    if (currentChapter > 0) {
      setCurrentChapter(currentChapter - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
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

      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6 my-10">
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm text-gray-500">
            Chapter {currentChapter + 1} of {currentStory.chapters.length}
          </span>
          <span className="text-sm text-gray-500">{currentStory.level}</span>
        </div>
        <h2 className="text-xl font-bold mb-2">{currentStory.title}</h2>
        <h3 className="text-lg font-semibold mb-2">{chapter.subtitle}</h3>
        <div className="flex items-center text-gray-600 mb-4">
          <span>🏠 {chapter.setting}</span>
          <span className="mx-4">•</span>
          <span>{chapter.characters.length} Characters</span>
        </div>
        <div className="bg-gray-50 p-4 rounded-md mb-4">
          <div className="flex justify-between items-center mb-2">
            <h4 className="font-semibold">Story Text</h4>
            <button className="text-blue-500">🔈 Listen</button>
          </div>
          <p className="text-gray-700">
            {chapter.text.native} <br />
            {chapter.text.english}
          </p>
        </div>
        <div className="bg-gray-50 p-4 rounded-md mb-4">
          <h4 className="font-semibold mb-2">Key Vocabulary</h4>
          <div className="grid grid-cols-2 gap-2">
            {chapter.vocabulary.map((vocab, index) => (
              <div
                key={index}
                className={`p-2 rounded ${
                  index % 2 === 0 ? "bg-green-100" : "bg-gray-200"
                }`}
              >
                {vocab.word}{" "}
                <span className="text-gray-500 ml-2">{vocab.translation}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-red-50 p-4 rounded-md mb-4">
          <h4 className="font-semibold text-red-600 mb-2">Cultural Context</h4>
          <p className="text-gray-700">{chapter.culturalContext}</p>
        </div>
        <div className="flex justify-between">
          <button
            className={`px-4 py-2 rounded ${
              currentChapter === 0
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={handlePreviousChapter}
            disabled={currentChapter === 0}
          >
            Previous Chapter
          </button>
          <button
            className={`px-4 py-2 rounded ${
              currentChapter === currentStory.chapters.length - 1
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-green-600 text-white"
            }`}
            onClick={handleNextChapter}
            disabled={currentChapter === currentStory.chapters.length - 1}
          >
            Next Chapter
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Stories;
