import Header from "../src/components/Header";
import SubHeading from "../src/components/SubHeading";
import Input from "../src/components/Input";
import Button from "../src/components/Button";
import FriendName from "../src/components/FriendName";

const SendMoney = () => {
  return (
    <div className="w-full h-screen bg-gradient-to-r from-green-500 to-blue-500 flex items-center justify-center">
      <div className="bg-white p-10 sm:w-96 w-[90%] rounded-2xl shadow-2xl">


        <Header label="Send Money" />
        <div className="mt-6">

        <FriendName name="Rahul"></FriendName>
        </div>
        
        <div className="mt-6">
          <SubHeading label="Amount (in $)" />
          <Input label="" placeholder="Enter Amount" />
        </div>

        <div className="mt-6">
          <Button label="Send" />
        </div>
      </div>
    </div>
  );
};

export default SendMoney;


