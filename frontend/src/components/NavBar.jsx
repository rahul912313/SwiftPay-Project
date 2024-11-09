const NavBar = () => {
  return (
    <div className="w-screen h-16 flex justify-between items-center bg-gray-100">
      <div className="text-2xl ml-10">SwiftPay</div>

      <div className="p-4 mr-5 flex items-center gap-4">
        <div className="text-lg">Hello</div>
        {/* Circle with the initial "A" */}
        <div className="w-10 h-10 flex items-center justify-center bg-teal-500 text-white rounded-full text-xl font-semibold">
          A
        </div>
      </div>
    </div>
  );
};

export default NavBar;
