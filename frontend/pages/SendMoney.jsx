import Header from "../src/components/Header";
import SubHeading from "../src/components/SubHeading";
import Input from "../src/components/Input";
import Button from "../src/components/Button";
import FriendName from "../src/components/FriendName";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";

const SendMoney = () => {

  const [searchParams] = useSearchParams();
  const[amount, setAmount] = useState();
  const name = searchParams.get("name");
  const userId = searchParams.get("id");

  const initiateTransfer = () => {
    fetch("http://localhost:5173/api/v1/transfer",{
      method : "POST",
      body : JSON.stringify({
        to : userId,
        amount : amount
      })
    })
  }

  return (
    <div className="w-full h-screen bg-gradient-to-r from-green-500 to-blue-500 flex items-center justify-center">
      <div className="bg-white p-10 sm:w-96 w-[90%] rounded-2xl shadow-2xl">


        <Header label="Send Money" />
        <div className="mt-6">

        <FriendName name={name}></FriendName>
        </div>
        
        <div className="mt-6">
          <SubHeading label="Amount (in $)" />
          <Input onChange={(e) => {
            setAmount(e.target.value);
            // console.log(amount);
          }} label="" placeholder="Enter Amount" />
        </div>

        <div className="mt-6">
          <Button onClick={()=>{
            // console.log("Buttton clicked")
            initiateTransfer()
          }} label="Send" />
        </div>
      </div>
    </div>
  );
};

export default SendMoney;


