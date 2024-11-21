const DashNavBar = () => {
  return (
    <nav className="bg-blue-600 text-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-6">
        <div className="text-2xl font-bold">Dashboard</div>
        <ul className="flex space-x-6">
          <li>
            <a href="#balance" className="hover:text-gray-200 transition">
              Balance
            </a>
          </li>
          <li>
            <a href="#contacts" className="hover:text-gray-200 transition">
              Contacts
            </a>
          </li>
          <li>
            <a href="/logout" className="hover:text-gray-200 transition">
              Logout
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default DashNavBar;
