const UserComponent = ({ firstname, lastname, onSearch}) => {
  return (
    <div className="flex items-center justify-between bg-white border rounded-md shadow-md p-4 mb-3 hover:bg-gray-50">
      <div className="text-lg font-medium text-gray-800">{firstname} {lastname}</div>
      <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200">
        Send
      </button>
    </div>
  );
};

export default UserComponent;
