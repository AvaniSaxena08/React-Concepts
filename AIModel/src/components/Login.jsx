import  { useState } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email, "Password:", password);
  };
  
  return (
    
    <div className=" bg-gray-100 items-center flex min-h-screen bg-center bg-no-repeat ">
    <form onSubmit={handleSubmit} className="  bg-white p-6 rounded-lg shadow-lg w-[500px] h-[600px] items-center ml-[500px]  "> 
      <h2 className="mt-10 text-center  text-3xl font-bold text-gray-800">Login</h2>
      <div className="mb-4">
        <label htmlFor="email" className="block text-base mt-11 font-medium text-gray-500">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mt-3 p-2 border-b-2  rounded-lg outline-none bg-gray-200"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="block  mt-8 font-medium text-base text-gray-500">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mt-3 p-2  rounded-lg outline-none border-b-2 bg-gray-200"
          required
        />
      </div>
      <button type="submit" className=" px-36 ml-16 py-3 bg-teal-700 text-white rounded-lg hover:bg-teal-900 transition mt-11" >
        Login
      </button>
      <div className="w-full mt-3 p-3 text-xl font-medium text-slate-800 text-center flex items-center justify-center gap-1">
        <h1>Don`t have account ? </h1>
        <Link to="/register" className="text-teal-700 font-bold">
              Register
            </Link>
      </div>
      <div>

      </div>
    </form>
  </div>
  );
};


export default Login;
