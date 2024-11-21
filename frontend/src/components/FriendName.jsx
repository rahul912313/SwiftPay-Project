const FriendName = ({ name }) => {
  return (
    <div className="text-center mb-6">
      <h1 className="text-2xl font-bold text-gray-800">Send Money</h1>
      {name ? (
        <div className="mt-4 bg-blue-100 p-4 rounded-lg inline-flex items-center">
          <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold text-xl">
            {name.charAt(0).toUpperCase()}
          </div>
          <div className="ml-4 text-lg font-bold text-gray-800">
            Sending to: <span className="text-blue-600">{name}</span>
          </div>
        </div>
      ) : (
        <div className="mt-4 bg-red-100 text-red-600 p-4 rounded-lg">
          No Friend Selected
        </div>
      )}
    </div>
  );
};

export default FriendName;
