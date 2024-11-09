const Balance = ({ amount }) => {
  return (
    <div className="bg-white rounded-lg p-6 text-center w-screen">
      <div className="text-gray-600 text-lg font-medium">Your Balance</div>
      <div className="text-4xl font-bold text-green-500 mt-2">
        ${amount}
      </div>
      <div className="text-gray-400 text-sm mt-1">Updated just now</div>
    </div>
  );
};

export default Balance;
