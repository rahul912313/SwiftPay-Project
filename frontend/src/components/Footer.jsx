import { FaLinkedin, FaGithub, FaGlobe } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-6 md:px-12">
        {/* Footer Top */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Brand Name */}
          <h3 className="text-2xl font-bold mb-4 md:mb-0">SwiftPay</h3>

          {/* Navigation Links */}
          <ul className="flex space-x-6 text-gray-400">
            <li>
              <a href="#features" className="hover:text-white">
                Features
              </a>
            </li>
            <li>
              <a href="#how-it-works" className="hover:text-white">
                How It Works
              </a>
            </li>
            <li>
              <a href="/signup" className="hover:text-white">
                Get Started
              </a>
            </li>
          </ul>

          {/* Social Media */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/rahulptl556/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <FaLinkedin size={20} />
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/rahul912313"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <FaGithub size={20} />
            </a>

            {/* Personal Website */}
            <a
              href="https://onerahul.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <FaGlobe size={20} />
            </a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-6 text-center text-gray-500">
          © 2024 SwiftPay. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
