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
    const { login, isAuthenticated } = useContext(AuthContext); // Use login from context
    const navigate = useNavigate();

    useEffect(()=>{
      if(isAuthenticated){
        navigate("/dashboard")
      }
    },[isAuthenticated, navigate])
  
    const handleLogin = () => {
      fetch("http://localhost:4000/api/v1/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username: username,
          password: password
        })
      })
        .then((res) => {
          if (res.ok) {
            return res.json();
          } else {
            throw new Error("Failed to Login. Please try again.");
          }
        })
        .then((data) => {
          // localStorage.setItem("authToken", data.token);
          login(data.token); // Update authentication state through context
          navigate("/dashboard"); // Ensure navigation happens after state is updated
        })
        .catch((e) => {
          console.error("Error msg: ", e.message);
          alert(e.message);
        });
    };
  

  return (
    <div className=" bg-gradient-to-r from-green-500 to-blue-500 h-screen flex justify-center items-center">
      <div className="rounded-lg bg-white w-full sm:w-96 p-8 shadow-lg">
        <Header label="Welcome Back!" />
        <SubHeading label="Please enter your credentials to access your account" />

        <div className="space-y-4 mt-6">
          <Input onChange={(e) => {
            setUsername(e.target.value)
          }} placeholder="Your email" label="Email Address" />
          <Input onChange={(e) => {
            setPassword(e.target.value)
          }} placeholder="••••••••" label="Password" />
        </div>

        <div className="pt-6">
          <Button onClick={handleLogin} label="Log In" />
        </div>

        <div className="mt-4 text-center">
          <EndNote label="Need an account? Sign Up" />
        </div>
      </div>
    </div>
  );
};

export default Login;
