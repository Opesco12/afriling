const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">AfrilLing</h3>
          <p className="text-gray-400">
            Connecting Nigerians with their linguistic heritage through language
            learning experiences. Master Hausa, Igbo, and Yoruba with
            confidence.
          </p>
          <p className="mt-4">24-1647/49 Lagos, Nigeria</p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Courses</h3>
          <a
            href="#"
            className="block text-gray-400 hover:text-white"
          >
            Learn Hausa
          </a>
          <a
            href="#"
            className="block text-gray-400 hover:text-white"
          >
            Learn Igbo
          </a>
          <a
            href="#"
            className="block text-gray-400 hover:text-white"
          >
            Learn Yoruba
          </a>
          <a
            href="#"
            className="block text-gray-400 hover:text-white"
          >
            Free Trial
          </a>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Support</h3>
          <a
            href="#"
            className="block text-gray-400 hover:text-white"
          >
            Help Centre
          </a>
          <a
            href="#"
            className="block text-gray-400 hover:text-white"
          >
            Community Forum
          </a>
          <a
            href="#"
            className="block text-gray-400 hover:text-white"
          >
            Technical Support
          </a>
        </div>
      </div>
      <div className="mt-8 text-center">
        <p className="text-gray-400">
          © 2024 AfrilLing. All rights reserved. Made with love for Nigeria.
        </p>
        <div className="mt-4 space-x-4">
          <a
            href="#"
            className="text-gray-400 hover:text-white"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white"
          >
            Terms of Service
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white"
          >
            Cookie Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
