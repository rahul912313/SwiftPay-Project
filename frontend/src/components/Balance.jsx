const Balance = ({ amount }) => {
  return (
    <div className="text-center py-6">
      <div className="text-gray-600 text-lg font-medium">Your Balance</div>
      <div className="text-5xl font-bold text-green-600 mt-2">
        ${amount.toFixed(2)}
      </div>
      <div className="text-gray-400 text-sm mt-1">Updated just now</div>
    </div>
  );
};

export default Balance;
