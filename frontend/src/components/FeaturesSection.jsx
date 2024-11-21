import React from "react";
import PaymentIcon from "@mui/icons-material/Payment";
import LockIcon from "@mui/icons-material/Lock";
import GroupIcon from "@mui/icons-material/Group";
import HistoryIcon from "@mui/icons-material/History";

const features = [
  {
    icon: <PaymentIcon />,
    title: "Instant Money Transfers",
    description: "Send money to friends and family instantly, with just a few taps.",
  },
  {
    icon: <HistoryIcon />,
    title: "Transaction History",
    description: "Track your transfers with a detailed transaction history.",
  },
  {
    icon: <LockIcon />,
    title: "Secure Payments",
    description: "Enjoy peace of mind with end-to-end encryption and fraud protection.",
  },
  {
    icon: <GroupIcon />,
    title: "Easy Search",
    description: "Quickly find friends with a search.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="bg-gradient-to-b from-blue-50 to-purple-50 py-16 font-sans">
      <div className="container mx-auto px-6 md:px-12">
        {/* Section Title */}
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-gray-800">
            Key Features
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            Explore the features that make transferring money seamless and secure.
          </p>
        </div>

        {/* Features Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative bg-white rounded-lg p-8 shadow-md hover:shadow-lg transform transition duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-400 hover:text-white"
            >
              {/* Icon with Circular Background */}
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 flex items-center justify-center text-white text-4xl mx-auto mb-6 transition duration-300 hover:text-black">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-800 text-center transition duration-300 hover:text-white">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-gray-600 text-center transition duration-300 hover:text-white">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
