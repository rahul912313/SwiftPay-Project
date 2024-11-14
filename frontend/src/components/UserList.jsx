import UserComponent from "../components/UserComponent";
import { useEffect, useState } from "react";
import WelcomeMsg from "./WelcomeMsg";
import { useNavigate } from "react-router-dom";

const UserList = () => {
  const [user, setUser] = useState([]);
  const [searchfilter, setSearchfilter] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    fetch('http://localhost:4000/api/v1/user/', { signal })
      .then((res) => res.json())
      .then((data) => {
        setUser(data.users);
        console.log(data);
      });

    return () => {
      controller.abort();
    };
  }, []);

    useEffect(() => {
      fetch(`http://localhost:4000/api/v1/user/bulk?filter=${searchfilter}`)
      .then((res) => res.json())
      .then((data) => {
        setUser(data.users);
      })
    },[searchfilter])

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <div className="text-2xl font-semibold mb-4">Contacts</div>

      {/* Filter to search for Friends */}
      <input
        onChange={(e) => {
          console.log("Filter value changed");
          setSearchfilter(e.target.value)
        }}
        type="text"
        placeholder="Search"
        className="w-full p-2 border rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* Render all Users */}
      {user.length === 0 && <WelcomeMsg />}
      <div className="space-y-3">
        {user.map((user) => {
          return <UserComponent key={user._id} firstname={user.firstname} lastname={user.lastname} openSend={()=>{
            console.log("Send button clicked")
            navigate(`/transfer?id=${user._id}&name=${user.firstname}`)
          }}/>;
        })}
      </div>

    </div>
  );
};

export default UserList;
