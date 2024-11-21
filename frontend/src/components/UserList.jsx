import UserComponent from "../components/UserComponent";
import { useEffect, useState } from "react";
import WelcomeMsg from "./WelcomeMsg";
import { useNavigate } from "react-router-dom";

const UserList = () => {
  const [user, setUser] = useState([]);
  const [searchfilter, setSearchfilter] = useState("");
  const navigate = useNavigate();

  // Fetch all users initially
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    fetch("http://localhost:4000/api/v1/user/", { signal })
      .then((res) => res.json())
      .then((data) => {
        setUser(data.users);
        console.log(data);
      });

    return () => {
      controller.abort();
    };
  }, []);

  // Fetch filtered users based on search input
  useEffect(() => {
    fetch(`http://localhost:4000/api/v1/user/bulk?filter=${searchfilter}`)
      .then((res) => res.json())
      .then((data) => {
        setUser(data.users);
      });
  }, [searchfilter]);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      {/* Header Section */}
      <div className="text-2xl font-bold mb-6 flex justify-between items-center">
        <span>Contacts</span>
        <span className="text-gray-500 text-sm">Total: {user.length}</span>
      </div>

      {/* Search Input */}
      <div className="relative mb-6">
        <input
          onChange={(e) => setSearchfilter(e.target.value)}
          type="text"
          placeholder="Search Contacts"
          className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 16l4-4-4-4m8 8l-4-4 4-4"
          />
        </svg>
      </div>

      {/* User List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {user.length === 0 ? (
          <div className="text-gray-500 text-center py-4">
            No contacts found. Add some friends!
          </div>
        ) : (
          user.map((user) => (
            <div
              key={user._id}
              className="flex items-center justify-between bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition cursor-pointer"
            >
              <div>
                <div className="text-lg font-semibold">
                  {user.firstname} {user.lastname}
                </div>
                <div className="text-sm text-gray-500">{user.email}</div>
              </div>
              <button
                onClick={() =>
                  navigate(`/transfer?id=${user._id}&name=${user.firstname}`)
                }
                className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition"
              >
                Send Money
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default UserList;
