const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
const twilio = require("twilio");
const OTP = require("./models/otpModels");

dotenv.config();
const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
mongoose
  .connect("mongodb://127.0.0.1:27017/Registered", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// Twilio Configuration
const accountSid = process.env.TWILIO_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioPhone = process.env.TWILIO_PHONE_NUMBER;
const client = twilio(accountSid, authToken);

// 📌 API Route to Send OTP
app.post("/send-otp", async (req, res) => {
  try {
    const { mobileNo } = req.body;
    if (!mobileNo) return res.status(400).json({ message: "Mobile number is required" });

    // Generate a 6-digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    // Store OTP in DB
    await OTP.create({ mobileNo, otp });

    // Send OTP via Twilio
    await client.messages.create({
      body: `Your OTP is: ${otp}. It will expire in 5 minutes.`,
      from: twilioPhone,
      to: mobileNo,
    });

    res.status(200).json({ message: "OTP sent successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error sending OTP", error });
  }
});

// 📌 API Route to Verify OTP
app.post("/verify-otp", async (req, res) => {
  try {
    const { mobileNo, otp } = req.body;

    const storedOtp = await OTP.findOne({ mobileNo, otp });

    if (!storedOtp) return res.status(400).json({ message: "Invalid or expired OTP" });

    // OTP verified, delete from DB
    await OTP.deleteOne({ _id: storedOtp._id });

    res.status(200).json({ message: "OTP verified successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error verifying OTP", error });
  }
});

// Start Server
app.listen(8080, () => {
  console.log("Server running on port 8080");
});
