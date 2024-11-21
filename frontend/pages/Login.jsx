import Header from "../src/components/Header";
import SubHeading from "../src/components/SubHeading";
import Input from "../src/components/Input";
import Button from "../src/components/Button";
import EndNote from "../src/components/EndNote";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../store/AuthContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // For error handling
  const { login, isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  // Redirect if already authenticated
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard");
    }
  }, [isAuthenticated, navigate]);

  // Handle Login
  const handleLogin = () => {
    setError(""); // Clear previous error

    // Input validation
    if (!username || !password) {
      setError("Please fill in both fields.");
      return;
    }

    // API Call for Login
    fetch("http://localhost:4000/api/v1/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else if (res.status === 401) {
          throw new Error("Incorrect username or password. Please try again.");
        } else {
          throw new Error("Something went wrong. Please try again later.");
        }
      })
      .then((data) => {
        login(data.token); // Update authentication state
        navigate("/dashboard"); // Redirect to dashboard
      })
      .catch((e) => {
        console.error("Error msg: ", e.message);
        setError(e.message); // Show error message
      });
  };

  return (
    <div className="bg-gradient-to-b from-blue-600 to-purple-600 h-screen flex justify-center items-center">
      <div className="rounded-lg bg-white w-full sm:w-96 p-8 shadow-xl">
        {/* Header */}
        <Header label="Welcome Back!" />
        <SubHeading label="Please enter your credentials to access your account" />

        {/* Error Message */}
        {error && (
          <div className="mt-4 p-3 text-red-600 bg-red-100 border border-red-300 rounded">
            {error}
          </div>
        )}

        {/* Input Fields */}
        <div className="space-y-4 mt-6">
          <Input
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Your email"
            label="Email Address"
          />
          <Input
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            label="Password"
            type="password"
          />
        </div>

        {/* Login Button */}
        <div className="pt-6">
          <Button
            onClick={handleLogin}
            label="Log In"
            className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 hover:scale-105 transition duration-300 w-full"
          />
        </div>

        {/* Sign-Up Link */}
        <div className="mt-4 text-center">
          <EndNote
            label="Need an account? Sign Up"
            className="text-blue-600 hover:underline cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
