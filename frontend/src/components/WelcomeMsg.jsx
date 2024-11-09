const WelcomeMsg = () => {
  return (
    <div className="flex flex-col items-center justify-center h-40 bg-gray-50">
      <div className="text-lg font-semibold text-gray-700">No friends in your contacts</div>

      {/* Will add this feature in coming updates */}
      {/* <button 
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        onClick={addUser}
      >
        Add a Friend
      </button> */}
    </div>
  );
}

export default WelcomeMsg;
