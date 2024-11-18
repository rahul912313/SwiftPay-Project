import { useNavigate } from "react-router-dom"

const Landing = () => {

  const navigate = useNavigate();


  return(
    <div className="min-h-screen bg-gray-100">
      {/* Header Section */}
      <header className="bg-white shadow-lg py-6">
        <div className="container mx-auto flex justify-between items-center px-6">
          {/* Title */}
          <div>
            <h1 className="text-4xl font-bold text-gray-900">SwiftPay</h1>
            {/* <p className="text-lg text-gray-600">Your trusted payment solution for seamless transactions</p> */}
          </div>
          
          {/* Login / Signup Buttons */}
          <div>
            <button onClick={() => navigate("/login")} className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-500 focus:outline-none mr-4">
              Login
            </button>
            <button onClick={() => navigate("/signup")} className="bg-white text-indigo-600 px-6 py-2 rounded-full border-2 border-indigo-600 hover:bg-indigo-600 hover:text-white focus:outline-none">
              Sign Up
            </button>
          </div>
        </div>
      </header>
      
      {/* Hero Section */}
      <section className="py-20 bg-gray-50 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-gray-800">Experience fast, secure, and easy payments</h2>
          <p className="mt-4 text-gray-500">Join millions of users who trust SwiftPay for all their payment needs.</p>
          <button className="mt-8 bg-indigo-600 text-white px-8 py-3 rounded-full hover:bg-indigo-500 focus:outline-none transition duration-300 ease-in-out">
            Get Started
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 px-6">
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center mb-4">
              <i className="fas fa-bolt"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-800">Fast Transactions</h3>
            <p className="mt-2 text-gray-500">Send and receive payments instantly, with no delays.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center mb-4">
              <i className="fas fa-shield-alt"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-800">Top-notch Security</h3>
            <p className="mt-2 text-gray-500">Your data is fully protected with the latest encryption standards.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center mb-4">
              <i className="fas fa-globe"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-800">Global Reach</h3>
            <p className="mt-2 text-gray-500">Send money to anyone, anywhere, in just a few taps.</p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-indigo-600 text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-semibold">Ready to start your journey with SwiftPay?</h2>
          <p className="mt-4 text-lg">Sign up now and start experiencing the future of payments.</p>
          <button className="mt-8 bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-200 focus:outline-none transition duration-300 ease-in-out">
            Sign Up Now
          </button>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 SwiftPay. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default Landing