import React from "react";
import { FaUserPlus, FaUsers, FaMoneyCheckAlt } from "react-icons/fa";

const HowItWorks = () => {
  const steps = [
    {
      title: "Sign Up or Log In",
      description: "Create your account or log in to start using SwiftPay.",
      icon: <FaUserPlus />,
    },
    {
      title: "Add a Friend",
      description: "Connect and serach your friends using their name.",
      icon: <FaUsers />,
    },
    {
      title: "Transfer Money",
      description: "Enter the amount, confirm, and send instantly!",
      icon: <FaMoneyCheckAlt />,
    },
  ];

  return (
    <section id="how-it-works" className="bg-gradient-to-b from-blue-50 to-purple-100 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-16">
          How It Works
        </h2>
        <div className="relative">
          {/* Vertical Timeline */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-purple-300 to-purple-600 h-full"></div>

          {/* Steps */}
          <div className="space-y-16">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`flex items-center justify-between ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                {/* Icon and Title */}
                <div
                  className={`flex items-center space-x-4 w-1/2 ${
                    index % 2 === 0 ? "justify-end pr-8" : "justify-start pl-8"
                  }`}
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-400 text-white rounded-full flex items-center justify-center text-3xl shadow-lg">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">
                    {step.title}
                  </h3>
                </div>

                {/* Description */}
                <div
                  className={`w-1/2 ${
                    index % 2 === 0 ? "pl-8 text-left" : "pr-8 text-right"
                  }`}
                >
                  <p className="text-gray-600 text-lg">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
