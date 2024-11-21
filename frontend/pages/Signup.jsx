import Header from "../src/components/Header";
import SubHeading from "../src/components/SubHeading";
import Input from "../src/components/Input";
import Button from "../src/components/Button";
import EndNote from "../src/components/EndNote";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../store/AuthContext";

const Signup = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // For error handling

  const navigate = useNavigate();
  const { isAuthenticated } = useContext(AuthContext);

  // Redirect if already authenticated
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard");
    }
  }, [isAuthenticated, navigate]);

  const handleSignup = () => {
    setError(""); // Clear previous error

    // Input validation
    if (!firstname || !lastname || !username || !password) {
      setError("Please fill in all fields.");
      return;
    }

    fetch("http://localhost:4000/api/v1/user/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        firstname: firstname,
        password: password,
        lastname: lastname,
      }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Failed to sign up. Please try again.");
        }
      })
      .then((data) => {
        localStorage.setItem("authToken", data.token);
        navigate("/dashboard");
      })
      .catch((e) => {
        console.error("Error is: ", e.message);
        setError(e.message); // Display error message
      });
  };

  return (
    <div className="bg-gradient-to-b from-blue-600 to-purple-600 h-screen flex items-center justify-center">
      <div className="bg-white p-10 sm:w-96 w-[90%] rounded-2xl shadow-xl">
        {/* Header */}
        <Header label="Sign Up" />
        <SubHeading label="Enter your information to create your account" />

        {/* Error Message */}
        {error && (
          <div className="mt-4 p-3 text-red-600 bg-red-100 border border-red-300 rounded">
            {error}
          </div>
        )}

        {/* Input Fields */}
        <div className="space-y-4 mt-6">
          <Input
            onChange={(e) => setFirstname(e.target.value)}
            label="First Name"
            placeholder="First Name"
          />
          <Input
            onChange={(e) => setLastName(e.target.value)}
            label="Last Name"
            placeholder="Last Name"
          />
          <Input
            onChange={(e) => setUsername(e.target.value)}
            label="Email"
            placeholder="abc@gmail.com"
          />
          <Input
            onChange={(e) => setPassword(e.target.value)}
            label="Password"
            placeholder="••••••••"
            type="password"
          />
        </div>

        {/* Sign Up Button */}
        <div className="mt-6">
          <Button
            onClick={handleSignup}
            label="Sign Up"
            className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 hover:scale-105 transition duration-300 w-full"
          />
        </div>

        {/* Login Link */}
        <div className="mt-4 text-center">
          <EndNote
            label="Already have an account? Login"
            className="text-blue-600 hover:underline cursor-pointer"
            onClick={() => navigate("/login")} // Navigate to login on click
          />
        </div>
      </div>
    </div>
  );
};

export default Signup;
