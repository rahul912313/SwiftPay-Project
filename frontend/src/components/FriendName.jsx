const FriendName = ({ name }) => {
  const firstInitial = name.charAt(0).toUpperCase(); 
  
  return (
    <div className="flex items-center space-x-4">
      <div className="w-8 h-8 rounded-full bg-gray-600 text-white flex items-center justify-center font-semibold">
        {firstInitial}
      </div>
      <div className="text-lg font-semibold">{name}</div>
    </div>
  );
};

export default FriendName;
