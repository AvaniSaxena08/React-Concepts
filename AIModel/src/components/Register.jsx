import React from "react";
import  { useState } from "react";


const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName,setFullName] = useState("");
  const [Number,setNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email, "Password:", password,"FullName:",fullName,"Number:" ,Number);

  };

  return (
    <div className="flex justify-center items-center h-[100vh] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url(https://i.pinimg.com/736x/54/bc/e3/54bce3bcae3a56f12995463ba9698026.jpg)" }}>
    <form onSubmit={handleSubmit} className="bg-white-900 p-6 rounded-lg shadow-lg w-[480px] h-[500px] :">
      <h2 className="mb-5 text-center text-3xl font-semibold text-white">Register</h2>
       

     <div className="mb-4">
        <label htmlFor="fullName" className="block text-sm font-medium text-gray-800 ">FullName:</label>
        <input
          type="name"
          id="fullname"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          className="w-full mt-1 p-2 border-b-2  rounded-lg outline-none"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-gray-800 ">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mt-1 p-2 border-b-2  rounded-lg outline-none"
          required
        />
      </div>


      <div className="mb-4">
        <label htmlFor="password" className="block text-sm  font-medium text-gray-700">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mt-1 p-2  rounded-lg outline-none border-b-2 "
          required
        />
      </div>


      <button type="submit" className="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
        Login
      </button>


    </form>
  </div>
  );
};
export default Register