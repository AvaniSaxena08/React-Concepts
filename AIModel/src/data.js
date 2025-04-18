const express = require("express")
const mongoose = require("mongoose");
const cors = require("cors");
const User = require("./models/User");
const twilio = require("twilio");
const dotenv = require("dotenv"); 
// Import the User model

const app = express();
dotenv.config();
// Middleware
app.use(express.json());
app.use(cors());

// Twilio Configuration
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioPhone = process.env.TWILIO_PHONE_NUMBER;
const client = twilio(accountSid, authToken);

mongoose.connect("mongodb://127.0.0.1:27017/Registered"
)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));



// User Schema

app.post("/register", async (req, res) => {
  try {
    const { fullname, email, password, mobileNo, age, gender, dob } = req.body;
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: "Email already registered" });
    }

    const newUser = new User({ fullname, email, password, mobileNo, age, gender, dob });
    await newUser.save();

    // Generate and send OTP after successful registration
    const otp = Math.floor(1000 + Math.random() * 9000).toString();
    await OTP.create({ mobileNo, otp });

    await client.messages.create({
      body: `Your OTP is ${otp}. It is valid for 5 minutes.`,
      from: twilioPhone,
      to: mobileNo
    });

    res.status(201).json({ message: "User registered successfully. OTP sent to mobile number." });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
});

// Verify OTP Route
app.post("/verify-otp", async (req, res) => {
  const { mobileNo, otp } = req.body;

  const validOtp = await OTP.findOne({ mobileNo, otp });
  if (!validOtp) {
    return res.status(400).json({ message: "Invalid or expired OTP" });
  }

  res.json({ message: "OTP verified successfully" });
});

// Login Route
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user || user.password !== password) {
    return res.status(400).json({ error: "Invalid username or password" });
  }

  res.json({ message: "Login successful" });
});

// Start Server
app.listen(8080, () => console.log("Server running on port 8080"));




{/** 
// Register Route
app.post("/register", async (req, res) => {
  try {
    const { fullname, email, password, mobileNo, age, gender, dob } = req.body;

    // Check if the email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already registered" });
    }

    // Create new user
    const newUser = new User({ fullname, email, password, mobileNo, age, gender, dob });
    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
});

// Start server
app.listen(8080, () => {
  console.log("Server running on port 8080");
});
*/}