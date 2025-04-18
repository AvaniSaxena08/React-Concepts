/*import React from 'react'
import {useNavigate} from 'react-router-dom';
function Otp() {
  const navigate= useNavigate();
  return (
    <div className='flex justify-center items-center bg-gray-300 min-h-screen'>
      <div className='bg-gray-100 h-[500px] w-[400px]  rounded-3xl'>
         <div className='font-bold text-3xl mt-[60px] ml-[130px] '>
        Enter OTP 
      </div>
      <div className='text-base mt-8 text-center text-gray-600'>
        We have sent a verification code to your registered mobile number
      </div>
           <div className='flex justify-center  items-center mt-8 gap-2'> 
         <div> <input
          type="text"
          maxLength="1"
          className="w-12 h-12 text-center text-xl font-semibold border bg-gray-300 border-gray-300 rounded-md focus:outline-none focus:border-gray-800"
        />
        </div>
        <div> <input
          type="text"
          maxLength="1"
          className="w-12 h-12 text-center text-xl font-semibold border border-gray-300 rounded-md focus:outline-none focus:border-gray-800 bg-gray-300"
        />
        </div> <div> <input
          type="text"
          maxLength="1"
          className="w-12 h-12 text-center text-xl font-semibold border border-gray-300 rounded-md focus:outline-none focus:border-gray-800 bg-gray-300"
        />
        </div> <div> <input
          type="text"
          maxLength="1"
          className="w-12 h-12 text-center text-xl font-semibold border border-gray-300 rounded-md focus:outline-none focus:border-gray-800 bg-gray-300"
        />
        </div>
           </div>
        
     <div>
      <button 
      type='submit'
      onClick={()=>navigate("/datainput")}
      className='bg-emerald-600 rounded-md px-20 py-2 mt-10 ml-[100px]'>
      Verify
      </button>
    </div>
        <div className='text-base mt-8 text-center text-gray-600'>
          Didn`t recieve the code ?
        </div>
        <div className='font-semibold text-lg ml-[140px] mt-5 text-emerald-600'>
          Resend Code
        </div>



        </div>
    </div>
  )
}

export default Otp
/**import { useState } from "react";

const Otp = () => {
  const [mobileNo, setMobileNo] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);

  // 📌 Send OTP
  const sendOtp = async () => {
    try {
      const response = await fetch("http://localhost:8080/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mobileNo }),
      });

      const data = await response.json();
      if (response.ok) {
        alert("OTP Sent!");
        setOtpSent(true);
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error("Error sending OTP", error);
    }
  };

  // 📌 Verify OTP
  const verifyOtp = async () => {
    try {
      const response = await fetch("http://localhost:8080/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mobileNo, otp }),
      });

      const data = await response.json();
      if (response.ok) {
        alert("OTP Verified!");
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error("Error verifying OTP", error);
    }
  };

  return (
    <div className="flex flex-col items-center p-5">
      <h2 className="text-2xl font-bold mb-5">OTP Verification</h2>

      {!otpSent ? (
        <>
          <input
            type="text"
            placeholder="Enter Mobile Number"
            value={mobileNo}
            onChange={(e) => setMobileNo(e.target.value)}
            className="border p-2 rounded-md mb-3"
          />
          <button onClick={sendOtp} className="bg-blue-500 text-white px-4 py-2 rounded-md">
            Send OTP
          </button>
        </>
      ) : (
        <>
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            className="border p-2 rounded-md mb-3"
          />
          <button onClick={verifyOtp} className="bg-green-500 text-white px-4 py-2 rounded-md">
            Verify OTP
          </button>
        </>
      )}
    </div>
  );
};

export default Otp;
**/ 

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Otp = () => {
  const [otp, setOtp] = useState("");
  const [mobileNo, setMobileNo] = useState(localStorage.getItem("mobileNo") || "");
  const navigate = useNavigate();

  const handleVerifyOtp = async () => {
    const response = await fetch("http://localhost:8080/verify-otp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ mobileNo, otp }),
    });

    const data = await response.json();
    if (response.ok) {
      alert("OTP Verified Successfully!");
      navigate("/dashboard"); // Redirect to next page
    } else {
      alert(data.message);
    }
  };

  return (
    <div className="flex justify-center items-center bg-gray-300 min-h-screen">
      <div className="bg-gray-100 h-[400px] w-[350px] rounded-3xl p-8">
        <h2 className="text-3xl font-bold text-center">Enter OTP</h2>
        <p className="text-center text-gray-600 mt-2">
          We have sent a verification code to {mobileNo}
        </p>
        <div className="flex justify-center items-center mt-8 gap-2">
          <input
            type="text"
            maxLength="4"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            className="w-40 h-12 text-center text-xl font-semibold border border-gray-300 rounded-md focus:outline-none focus:border-gray-800 bg-gray-300"
          />
        </div>
        <button
          onClick={handleVerifyOtp}
          className="bg-emerald-600 rounded-md px-20 py-2 mt-10 w-full text-white">
          Verify
        </button>
        <p className="text-center text-gray-600 mt-5">
          Didn't receive the code?{" "}
          <span className="text-emerald-600 cursor-pointer font-semibold">Resend Code</span>
        </p>
      </div>
    </div>
  );
};

export default Otp;
