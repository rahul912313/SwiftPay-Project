import Header from "../src/components/Header";
import SubHeading from "../src/components/SubHeading";
import Input from "../src/components/Input";
import Button from "../src/components/Button";
import EndNote from "../src/components/EndNote";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {

  const[firstname, setFirstname] = useState("");
  const[lastname, setLastName] = useState("");
  const[username, setUsername] = useState("");
  const[password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSignup = () => {
    console.log("Button clicked")
      fetch('http://localhost:4000/api/v1/user/signup',{
        method : "POST",
        headers : {'Content-Type' : "application/json"},
        body: JSON.stringify({
          username: username,
          firstname: firstname,
          password: password,
          lastname: lastname,
        })
        
      })
      .then((res) => {
        if(res.ok){
          return res.json();
        }
        else{
          throw new Error("Failed to sign up. Please try again.");
        }
      })
      .then((data) => {
        localStorage.setItem("authToken", data.token)
        navigate('/dashboard')
      })
      .catch((e) => {
        console.error("Error is: " , e.message);
        alert(e.message);
      })
  }


  return (
    <div className=" bg-gradient-to-r from-green-500 to-blue-500 w-full h-screen flex items-center justify-center">
  <div className="bg-white p-10 sm:w-96 w-[90%] rounded-2xl shadow-2xl">
    <Header label="Sign Up" />
    <SubHeading label="Enter your information to create your account" />
    
    <div className="space-y-4 mt-6">
      <Input onChange = {(e) => {
        setFirstname(e.target.value)
      }} label="First Name" placeholder="First Name" />
      <Input onChange={(e) => {
        setLastName(e.target.value)
      }} label="Last Name" placeholder="Last Name" />
      <Input onChange={(e) => {
        setUsername(e.target.value)
      }} label="Email" placeholder="abc@gmail.com" />
      <Input onChange={(e) => {
        setPassword(e.target.value)
      }
      } label="Password" placeholder="••••••••" />
    </div>

    <div className="mt-6">
      <Button onClick={()=>handleSignup()} label="Sign Up" />
    </div>

    <div className="mt-4 text-center">
      <EndNote label="Already have an account? Login" />
    </div>
  </div>
</div>

  );
};

export default Signup;
