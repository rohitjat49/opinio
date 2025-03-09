export default function NumberLogin() {
    return (
      <div className="h-screen flex items-center justify-center bg-[url('/Image/Group 1000005858.png')] bg-cover bg-center">
        <div className="w-80 p-6 text-white rounded-lg ">
          {/* Heading */}
          <h2 className="text-lg font-semibold text-center">Enter your mobile number</h2>
          <p className="text-sm text-gray-300 text-center mt-1">We'll send you an OTP</p>
  
          {/* Input Box */}
          <div className="mt-4 flex items-center border border-gray-500 rounded-lg p-2 bg-gray-800">
            <span className="pr-2 text-gray-300">🇮🇳 +91</span>
            <input
              type="tel"
              className="bg-transparent text-white outline-none w-full"
              placeholder="9876543210"
            />
          </div>
  
          {/* Terms & Conditions */}
          <p className="text-xs text-gray-400 mt-3 text-center">
            By continuing, you accept you are 18+ years of age and agree to the 
            <a href="#" className="text-blue-400"> Terms and Conditions</a>.
          </p>
  
          {/* OTP Button */}
          <button className="mt-4 w-full bg-gray-600 text-gray-400 py-2 rounded-lg opacity-50 cursor-not-allowed">
            Get OTP
          </button>
        </div>
      </div>
    );
  }
  