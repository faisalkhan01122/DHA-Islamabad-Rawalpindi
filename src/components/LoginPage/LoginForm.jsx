// import React, { useState } from "react";

// const LoginForm = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle login logic here
//     console.log("Email:", email, "Password:", password);
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen  bg-brand">
//       <div className="w-full h-96 max-w-md bg-white rounded-lg shadow-md p-6">
//         <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
//           Login
//         </h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label
//               className="block text-sm font-medium text-gray-700"
//               htmlFor="email"
//             >
//               Email
//             </label>
//             <input
//               id="email"
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-200"
//               placeholder="Enter your email"
//               required
//             />
//           </div>
//           <div>
//             <label
//               className="block text-sm font-medium text-gray-700"
//               htmlFor="password"
//             >
//               Password
//             </label>
//             <input
//               id="password"
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-200"
//               placeholder="Enter your password"
//               required
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-golden text-white py-2 rounded-lg hover:bg- transition-colors"
//           >
//             Login
//           </button>
//         </form>
//         <div className="mt-4 text-center">
//           <a href="#" className="text-sm text-brand hover:underline">
//             Forgot your password?
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginForm;

import React from "react";

const LoginForm = () => {
  return (
    <>
      <div className="relative">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url("/uper gradiant copy.jpg")' }}
        ></div>
        <div className="absolute inset-0 bg-white/70"></div>{" "}
        <div className="relative flex justify-center items-center bg-gray-100 text-primary p-4 ">
          <h1 className="text-2xl font-bold underline uppercase">
            Mamber Portal <br />{" "}
            <span className="flex justify-center">Log in</span>{" "}
          </h1>
        </div>
        <div className="relative flex items-center justify-center h-full p-4 bg-gray-100">
          {/* Main Box */}
          <div className=" w-full  md:w-[40%]  bg-white p-8 rounded-lg shadow-lg">
            {/* Logo Section */}
            <div className="mb-8 text-center flex items-center justify-center space-x-4">
              <img
                src="/dhalogo.jpg" // Replace with the actual DHA logo URL
                alt="DHA Logo"
                className="w-32 h-auto"
              />
            </div>

            {/* Login Form */}
            <div className="mb-6">
              <input
                type="text"
                placeholder="Enter ID"
                className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="password"
                placeholder="Enter Password"
                className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="w-full bg-[#4B49AC] text-white py-3 rounded-md ">
                Login
              </button>
              <a
                href="#"
                className="text-sm text-blue-500 mb-4 block text-left"
              >
                Forgot Password?
              </a>
              <p>
                If you don't have an account yet, please{" "}
                <span className="text-blue-500">Sign Up</span> to get started
              </p>
            </div>

            {/* Secure Payment Method Section */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-4 text-center">
                Secure Payment Methods
              </h3>
              <div className="grid grid-cols-2 lg:grid-cols-4 justify-center gap-6  mb-4">
                <img
                  src="https://pngimg.com/d/mastercard_PNG15.png" // Replace with actual debit card image links
                  alt="Debit Card 1"
                  className="w-20 h-auto"
                />
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwe5PcCTwGwy1auvCSswmdVJ7vKzYxYqcABQ&s"
                  alt="Debit Card 2"
                  className="w-20 h-auto"
                />
                <img
                  src="https://media.licdn.com/dms/image/v2/C4E0BAQE8RUPRKuNo4w/company-logo_200_200/company-logo_200_200/0/1646640573547/kuickpay_logo?e=2147483647&v=beta&t=LbdxyyKt5wi2pVe0U9jw37-fSn7Spipa4_Os5KnPXRQ"
                  alt="Debit Card 3"
                  className="w-20 h-auto"
                />
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoISnDYrTbElNY9MqWkuaqV_pDuvwx0uiy3A&s"
                  alt="Debit Card 4"
                  className="w-20 h-auto"
                />
              </div>
            </div>

            {/* Powered By Section */}
            <div className="mb-6 text-center">
              <h3 className="text-base">
                Powered by: DHA Islamabad-Rawalpindi
              </h3>
            </div>

            {/* Contact Information Section */}
            <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
              <div className="text-sm">
                <h4 className="font-semibold mb-2 text-red-500">
                  Note:For any inquiries or issue,please contact us at:
                </h4>
                <p className="mb-1">Email: contact@dha.com</p>
                <p className="mb-1">UAN: +92-51-111-555-400(Dial 4)</p>
                <p className="mb-1">WhatsApp: +923268130587</p>
              </div>
              <div className="border-b-2 border-green-900"></div>
              <p className="text-green-900 font-semibold">
                *.This service is available exclusively for valid DHAI-R
                members.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
