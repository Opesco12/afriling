import React, { useState } from "react";
import Footer from "../components/Footer";

const FamilyTerms = () => {
  const [activeTab, setActiveTab] = useState("hausa");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const content = {
    hausa: {
      title: "Learn Hausa Family Terms",
      description:
        "Discover how to address family members in Hausa with respect and cultural understanding",
      terms: [
        {
          term: "Uba",
          pronunciation: "/oo-ba/",
          emoji: "👨‍👩‍👧",
          culturalNote: "Respectful term for father",
        },
        {
          term: "Uwa",
          pronunciation: "/oo-wa/",
          emoji: "👩‍👧",
          culturalNote: "Loving term for mother",
        },
        {
          term: "Dan uwa",
          pronunciation: "/dan oo-wa/",
          emoji: "👦",
          culturalNote: "Male sibling",
        },
        {
          term: "Yar uwa",
          pronunciation: "/yar oo-wa/",
          emoji: "👧",
          culturalNote: "Female sibling",
        },
        {
          term: "Kaka",
          pronunciation: "/ka-ka/",
          emoji: "👴",
          culturalNote: "Paternal grandfather",
        },
        {
          term: "Kaka",
          pronunciation: "/ka-ka/",
          emoji: "👵",
          culturalNote: "Paternal grandmother",
        },
        {
          term: "Kawu",
          pronunciation: "/ka-wu/",
          emoji: "👨‍👦",
          culturalNote: "Mother’s brother",
        },
        {
          term: "Baba",
          pronunciation: "/ba-ba/",
          emoji: "👨‍👧",
          culturalNote: "Respectful term for elder male",
        },
      ],
      structure: {
        respect:
          "Age determines how you address family members, with specific terms for elder and younger siblings",
        extended:
          "Extended family includes cousins and uncles, based on which side of the family they are from",
        community:
          "Community friends may be addressed with family terms as a sign of respect and closeness",
      },
    },
    igbo: {
      title: "Learn Igbo Family Terms",
      description:
        "Explore Igbo family terms to address relatives with cultural respect",
      terms: [
        {
          term: "Nna",
          pronunciation: "/n-na/",
          emoji: "👨‍👩‍👧",
          culturalNote: "Respectful term for father",
        },
        {
          term: "Nne",
          pronunciation: "/n-ne/",
          emoji: "👩‍👧",
          culturalNote: "Loving term for mother",
        },
        {
          term: "Nwanne Nwoke",
          pronunciation: "/nwan-ne nwo-ke/",
          emoji: "👦",
          culturalNote: "Male sibling",
        },
        {
          term: "Nwanne Nwanyi",
          pronunciation: "/nwan-ne nwan-yi/",
          emoji: "👧",
          culturalNote: "Female sibling",
        },
        {
          term: "Nna Nnukwu",
          pronunciation: "/n-na n-nu-kwu/",
          emoji: "👴",
          culturalNote: "Paternal grandfather",
        },
        {
          term: "Nne Nnukwu",
          pronunciation: "/n-ne n-nu-kwu/",
          emoji: "👵",
          culturalNote: "Paternal grandmother",
        },
        {
          term: "Nwanne Nna",
          pronunciation: "/nwan-ne n-na/",
          emoji: "👨‍👦",
          culturalNote: "Father’s brother",
        },
        {
          term: "Di",
          pronunciation: "/dee/",
          emoji: "👨‍👧",
          culturalNote: "Husband or respected male",
        },
      ],
      structure: {
        respect:
          "Respect for elders is shown through specific terms for older relatives",
        extended:
          "Igbo families include extended relatives like uncles and cousins, often addressed by lineage",
        community:
          "Close community members may be called family terms to show affection",
      },
    },
    yoruba: {
      title: "Learn Yoruba Family Terms",
      description:
        "Understand Yoruba family terms to show respect and cultural awareness",
      terms: [
        {
          term: "Baba",
          pronunciation: "/ba-ba/",
          emoji: "👨‍👩‍👧",
          culturalNote: "Respectful term for father",
        },
        {
          term: "Iya",
          pronunciation: "/ee-ya/",
          emoji: "👩‍👧",
          culturalNote: "Loving term for mother",
        },
        {
          term: "Ẹgbọn Okunrin",
          pronunciation: "/eg-bon o-koon-rin/",
          emoji: "👦",
          culturalNote: "Elder male sibling",
        },
        {
          term: "Ẹgbọn Obinrin",
          pronunciation: "/eg-bon o-bin-rin/",
          emoji: "👧",
          culturalNote: "Elder female sibling",
        },
        {
          term: "Baba Agba",
          pronunciation: "/ba-ba ag-ba/",
          emoji: "👴",
          culturalNote: "Paternal grandfather",
        },
        {
          term: "Iya Agba",
          pronunciation: "/ee-ya ag-ba/",
          emoji: "👵",
          culturalNote: "Paternal grandmother",
        },
        {
          term: "Ẹgbọn Baba",
          pronunciation: "/eg-bon ba-ba/",
          emoji: "👨‍👦",
          culturalNote: "Father’s elder brother",
        },
        {
          term: "Egbon",
          pronunciation: "/eg-bon/",
          emoji: "👨‍👧",
          culturalNote: "Respectful term for elder male",
        },
      ],
      structure: {
        respect:
          "Yoruba culture emphasizes respect for elders through specific address terms",
        extended:
          "Extended family includes aunts, uncles, and cousins, distinguished by family side",
        community:
          "Community members may be addressed with family terms to show closeness",
      },
    },
  };

  const [searchTerm, setSearchTerm] = useState("");
  const filteredTerms = content[activeTab].terms.filter((term) =>
    term.term.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-gray-100 min-h-screen font-sans">
      {/* Header */}
      <header className="bg-white shadow p-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-green-600">AfrilLing</div>
        <nav className="space-x-4">
          <a
            href="#"
            className="text-gray-600 hover:text-green-600"
          >
            ←
          </a>
        </nav>
      </header>

      {/* Main Content */}
      <div className="p-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-2">Family Terms</h1>
        </div>
        <div className="max-w-4xl mx-auto">
          <h3 className="text-xl font-bold mb-2">{content[activeTab].title}</h3>
          <p className="text-gray-600 mb-4">{content[activeTab].description}</p>
          <div className="flex space-x-4 mb-4">
            {["hausa", "igbo", "yoruba"].map((lang) => (
              <button
                key={lang}
                className={`px-3 py-1 rounded ${
                  activeTab === lang
                    ? "bg-green-600 text-white"
                    : "bg-gray-300 text-gray-600"
                }`}
                onClick={() => handleTabChange(lang)}
              >
                {lang.charAt(0).toUpperCase() + lang.slice(1)}
              </button>
            ))}
          </div>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Search"
              className="w-full p-2 border rounded"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {filteredTerms.map((term, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow flex items-center justify-between"
              >
                <div>
                  <span className="text-green-600 mr-2">{term.emoji}</span>
                  <span>
                    {term.term} {term.pronunciation}
                  </span>
                </div>
                <button className="text-gray-600">🔊</button>
                <p className="text-red-600 text-sm">{term.culturalNote}</p>
              </div>
            ))}
          </div>
          <div className="bg-white p-6 rounded-lg shadow mt-6">
            <h3 className="text-lg font-bold mb-4">
              Understanding Family Structure
            </h3>
            <p className="text-gray-600 mb-4">
              In {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}{" "}
              culture, family relationships extend beyond the nuclear family.
              Understanding proper terms of address shows respect and cultural
              awareness.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-green-100 p-2 rounded">
                <p className="text-green-600 font-bold">Respect for Elders</p>
                <p className="text-gray-600">
                  {content[activeTab].structure.respect}
                </p>
              </div>
              <div className="bg-yellow-100 p-2 rounded">
                <p className="text-yellow-600 font-bold">Extended Family</p>
                <p className="text-gray-600">
                  {content[activeTab].structure.extended}
                </p>
              </div>
              <div className="bg-blue-100 p-2 rounded">
                <p className="text-blue-600 font-bold">Community Family</p>
                <p className="text-gray-600">
                  {content[activeTab].structure.community}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FamilyTerms;
