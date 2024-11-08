const Input = ({label, placeholder}) => {
  return (
    <div className="flex flex-col gap-2">
      {/* Label styling */}
      <label className="font-semibold text-sm text-gray-700">{label}</label>
      
      {/* Input field styling */}
      <input 
        type="text" 
        required 
        placeholder={placeholder} 
        className="px-4 py-2 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
      />
    </div>
  );
};

export default Input;
