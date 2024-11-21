import SubHeading from "../src/components/SubHeading";
import Input from "../src/components/Input";
import Button from "../src/components/Button";
import FriendName from "../src/components/FriendName";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";

const SendMoney = () => {
  const [searchParams] = useSearchParams();
  const [amount, setAmount] = useState("");
  const [note, setNote] = useState(""); // New state for the note
  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const name = searchParams.get("name");
  const userId = searchParams.get("id");

  const initiateTransfer = async () => {
    if (!amount || amount <= 0) {
      setStatus("Please enter a valid amount.");
      return;
    }

    setIsLoading(true);
    setStatus("");

    try {
      const response = await fetch("http://localhost:5173/api/v1/transfer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          to: userId,
          amount: amount,
          note: note, // Include the note in the transfer payload
        }),
      });

      if (response.ok) {
        setStatus("Transfer successful!");
        setAmount("");
        setNote(""); // Clear the note field
      } else {
        throw new Error("Transfer failed. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error.message);
      setStatus(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full h-screen bg-gradient-to-r from-green-500 to-blue-500 flex items-center justify-center">
      <div className="bg-white p-10 sm:w-96 w-[90%] rounded-2xl shadow-2xl">
        <div className="mt-6">
          <FriendName name={name} />
        </div>
        <div className="mt-6">
          <SubHeading label="Amount (in $)" />
          <Input
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter Amount"
            error={status === "Please enter a valid amount." ? status : null}
          />
        </div>
        <div className="mt-6">
          <SubHeading label="Add a Note (Optional)" />
          <Input
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="Enter a note for the recipient"
          />
        </div>
        <div className="mt-6">
          <Button
            onClick={initiateTransfer}
            label="Send"
            isLoading={isLoading}
            disabled={isLoading}
          />
        </div>
        {status && (
          <div
            className={`mt-4 p-3 rounded-lg ${
              status.includes("successful")
                ? "bg-green-100 text-green-600"
                : "bg-red-100 text-red-600"
            }`}
          >
            {status}
          </div>
        )}
      </div>
    </div>
  );
};

export default SendMoney;
