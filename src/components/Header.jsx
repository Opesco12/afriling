import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
      <div className="text-2xl font-bold text-green-600">AfrilLing</div>
      <nav className="space-x-4">
        <a
          href="#"
          className="text-gray-600 hover:text-green-600"
        >
          Home
        </a>
        <a
          href="#"
          className="text-gray-600 hover:text-green-600"
        >
          Courses
        </a>
        <a
          href="#"
          className="text-gray-600 hover:text-green-600"
        >
          Features
        </a>
        <a
          href="#"
          className="text-gray-600 hover:text-green-600"
        >
          About Us
        </a>
        <a
          href="#"
          className="text-gray-600 hover:text-green-600"
        >
          Contact
        </a>
      </nav>
      <button
        className="bg-green-600 text-white px-4 py-2 rounded"
        onClick={() => navigate("/login")}
      >
        Sign In
      </button>
    </header>
  );
};

export default Header;
