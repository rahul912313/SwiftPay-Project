const Input = ({ label, placeholder, value, onChange, type = "text", error }) => {
  return (
    <div className="w-full">
      {label && <label className="block text-gray-600 mb-2">{label}</label>}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full p-3 border rounded-lg focus:outline-none ${
          error ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"
        } shadow-sm`}
      />
      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
    </div>
  );
};

export default Input;
