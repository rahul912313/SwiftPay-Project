import Header from "../src/components/Header";
import SubHeading from "../src/components/SubHeading";
import Input from "../src/components/Input";
import Button from "../src/components/Button";
import EndNote from "../src/components/EndNote";

const Signup = () => {
  return (
    <div className=" bg-gradient-to-r from-green-500 to-blue-500 w-full h-screen flex items-center justify-center">
  <div className="bg-white p-10 sm:w-96 w-[90%] rounded-2xl shadow-2xl">
    <Header label="Sign Up" />
    <SubHeading label="Enter your information to create your account" />
    
    <div className="space-y-4 mt-6">
      <Input label="First Name" placeholder="Rahul" />
      <Input label="Last Name" placeholder="Patil" />
      <Input label="Email" placeholder="abc@gmail.com" />
      <Input label="Password" placeholder="••••••••" />
    </div>

    <div className="mt-6">
      <Button label="Sign Up" />
    </div>

    <div className="mt-4 text-center">
      <EndNote label="Already have an account? Login" />
    </div>
  </div>
</div>

  );
};

export default Signup;
