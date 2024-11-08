import Header from "../src/components/Header";
import SubHeading from "../src/components/SubHeading";
import Input from "../src/components/Input";
import Button from "../src/components/Button";
import EndNote from "../src/components/EndNote";

const Login = () => {
  return (
    <div className=" bg-gradient-to-r from-green-500 to-blue-500 h-screen flex justify-center items-center">
      <div className="rounded-lg bg-white w-full sm:w-96 p-8 shadow-lg">
        <Header label="Welcome Back!" />
        <SubHeading label="Please enter your credentials to access your account" />

        <div className="space-y-4 mt-6">
          <Input placeholder="Your email" label="Email Address" />
          <Input placeholder="••••••••" label="Password" />
        </div>

        <div className="pt-6">
          <Button label="Log In" />
        </div>

        <div className="mt-4 text-center">
          <EndNote label="Need an account? Sign Up" />
        </div>
      </div>
    </div>
  );
};

export default Login;
