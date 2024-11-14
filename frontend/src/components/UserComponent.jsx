const UserComponent = ({ firstname, lastname, openSend}) => {
  const firstLetter = firstname.charAt(0).toUpperCase();
  return (
    <div className="flex items-center justify-between bg-white border rounded-md shadow-md p-4 mb-3 hover:bg-gray-50">
      <div className="flex justify-center items-center gap-4">
        <div className="w-10 h-10 flex items-center justify-center bg-purple-500 text-white rounded-full text-xl font-semibold">{firstLetter}</div>
        <div className="text-lg font-medium text-gray-800">{firstname} {lastname}</div>
      </div>
      <button onClick={openSend} className="px-4 py-2 bg-black text-white rounded-lg hover:bg-blue-600 transition duration-200">
        Send
      </button>
    </div>
  );
};

export default UserComponent;
