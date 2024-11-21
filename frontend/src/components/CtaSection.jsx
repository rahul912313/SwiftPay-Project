import { useNavigate } from "react-router-dom";

const CTASection = () => {
  const navigate = useNavigate();
  return (
    <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-32 text-white text-center">
      <div className="container mx-auto px-6 md:px-12">
        {/* Headline */}
        <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-lg mb-8">
          Join us and start sending money the easy way today.
        </p>

        {/* CTA Button */}
        <button onClick={() => navigate("/signup")} className="bg-white text-blue-600 font-semibold px-8 py-4 rounded-lg shadow-md hover:shadow-lg hover:scale-105 hover:bg-gradient-to-r hover:from-purple-400 hover:to-blue-400 hover:text-white transition duration-300 transform">
          Get Started Now
        </button>
      </div>
    </section>
  );
};

export default CTASection;
