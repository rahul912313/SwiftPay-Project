import NavBar from "../src/components/NavBar";
import Balance from "../src/components/Balance";
import UserList from "../src/components/UserList";
import { useEffect } from "react";
import DashNavBar from "../src/components/DashNavBar";

const Dashboard = () => {
  useEffect(() => {
    // Placeholder for future effects
  }, []);

  return (
    <div className="bg-gradient-to-b from-blue-50 to-gray-100 min-h-screen">
      <DashNavBar />

      <div className="container mx-auto px-6 py-12">
        {/* Balance Section */}
        <div className="mb-12">
          <Balance amount={1000} />
        </div>

        {/* User List Section */}
        <div>
          <UserList />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
