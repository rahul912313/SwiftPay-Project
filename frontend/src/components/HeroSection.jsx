import React from "react";
import { useNavigate } from "react-router-dom";
// import { HashLink } from "react-router-hash-link";


const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <section className=" bg-gradient-to-b from-blue-50 to-gray-100 py-16 pt-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center px-6 md:px-12">
        {/* Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight">
            Simplify <span className="text-blue-600">Payments</span>. <br />
            Maximize <span className="text-purple-600">Convenience</span>.
          </h1>
          <p className="mt-4 text-gray-600 text-lg">
            Secure, fast, and reliable payment solutions for individuals.
          </p>
          <div className="mt-6 flex flex-col md:flex-row gap-4 justify-center md:justify-start">
            <button onClick={() => {navigate("/signup")}} className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 hover:scale-105 transition duration-300">
              Get Started
            </button>
            <a
              href="#how-it-works"
              className="bg-gray-200 text-gray-800 px-6 py-3 rounded-md hover:bg-gray-300 hover:scale-105 transition duration-300"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Image/Graphic */}
        <div className="w-full md:w-1/2 mt-10 md:mt-0 relative">
          <img
            src="../../utils/images/hero-section-2.jpeg"
            alt="Payment illustration"
            className="w-full rounded-lg shadow-md"
          />
          {/* Decorative Element */}
          <div className="absolute -top-8 -left-8 w-32 h-32 bg-blue-400 rounded-full opacity-30 blur-lg"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
