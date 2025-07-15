import { useNavigate } from "react-router-dom";

import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const SignIn = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-gray-100 font-sans">
      <Header />
      <div className="bg-gray-100 my-10 flex items-center justify-center">
        <div className="p-8 rounded-lg  w-full max-w-md text-center">
          <h2 className="text-2xl font-bold mb-4">
            Continue your language learning journey
          </h2>
          <h1 className="text-3xl font-bold mb-6">Hi Nafisat, Welcome Back!</h1>
          <form className="space-y-4">
            <div>
              <input
                type="email"
                placeholder="Email"
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                className="w-full p-2 border rounded"
              />
            </div>
            <a
              href="#"
              className="text-sm text-gray-600 hover:underline block mb-4"
            >
              Forget your Password ?
            </a>
            <button
              type="submit"
              className="w-full bg-black text-white p-2 rounded"
              onClick={() => navigate("/dashboard")}
            >
              Login
            </button>
          </form>
          <div className="my-6 text-center">OR</div>
          <div className="space-y-4">
            <button className="w-full bg-blue-600 text-white p-2 rounded flex items-center justify-center">
              <span className="mr-2">f</span> Login with Facebook
            </button>
            <button className="w-full bg-red-600 text-white p-2 rounded flex items-center justify-center">
              <span className="mr-2">G</span> Login with Google
            </button>
            <button className="w-full bg-black text-white p-2 rounded flex items-center justify-center">
              <span className="mr-2"></span> Login with Apple
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SignIn;
