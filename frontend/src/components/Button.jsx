const Button = ({ label }) => {
  return (
    <button className="w-full px-6 py-3 bg-black text-white text-lg font-semibold rounded-lg shadow-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300">
      {label}
    </button>
  );
};

export default Button;
