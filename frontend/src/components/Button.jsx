const Button = ({ label, onClick, className, isLoading, disabled }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-lg shadow ${
        disabled
          ? "bg-gray-300 text-gray-500 cursor-not-allowed"
          : "bg-blue-600 text-white hover:bg-blue-700 transition"
      } ${className}`}
      disabled={disabled || isLoading}
    >
      {isLoading ? "Loading..." : label}
    </button>
  );
};

export default Button;
