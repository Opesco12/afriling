import React from "react";
import Footer from "../components/Footer";

const Profile = () => {
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
      <div className="bg-gray-100">
        <div className="p-6 bg-white">
          <div className="w-30 h-30 rounded-full bg-blue-500"></div>
          <div>
            <h2 className="text-2xl font-bold mt-4">User Profile</h2>
            <p className="text-gray-600 mt-2">Name: John Doe</p>
            <p className="text-gray-600">Email: </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
