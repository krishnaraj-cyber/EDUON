// import bcrypt from 'bcrypt';
// import jwt from 'jsonwebtoken';
// import User from '../../models/UserModel.js';

// export const login = async (req, res) => {
//     try {
//         const { Email, Password } = req.body;
//         const user = await User.findOne({ Email });
//         if (!user) { return res.status(404).json({ message: 'User not found' });}
//         const isPasswordValid = await bcrypt.compare(Password, user.Password);
//         if (!isPasswordValid) {return res.status(401).json({ message: 'Invalid credentials' }); }
//         const token = jwt.sign({ Email: user.Email, Role: user.Role }, process.env.TOKENSECRET);
//         return res.status(200).json({ message: 'Login successful', token, role: user.Role, profile });
//     } catch (error) {
//         console.error('Error logging in:', error);
//         return res.status(500).json({ message: 'Internal server error' });
//     }
// };

import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../../models/UserModel.js";

export const login = async (req, res) => {
  try {
    const { Email, Password } = req.body;

    const adminEmail = process.env.ADMIN_EMAIL;
    const adminPassword = process.env.ADMIN_PASSWORD;

    // Log the incoming request
    console.log("Login request received:", { Email, Password });

    // Check if the user exists
    const user = await User.findOne({ Email });
    if (!user) {
      console.log("User not found");
      return res.status(404).json({ message: "User not found" });
    }

    // Validate the password
    const isPasswordValid = await bcrypt.compare(Password, user.Password);
    if (!isPasswordValid) {
      console.log("Invalid credentials");
      return res.status(401).json({ message: "Invalid credentials" });
    }


    // Check if the user is an admin
    const isAdmin = Email === adminEmail && Password === adminPassword;



    // Generate a JWT token
    const token = jwt.sign(
      { Email: user.Email, Role: user.Role, isAdmin: user.isAdmin },
      process.env.TOKENSECRET
    );

    // Log successful login
    console.log("Login successful for user:", user.Email);

    return res
      .status(200)
      // .json({ message: "Login successful", token, role: user.Role });
      .json({ message: "Login successful", token, isAdmin });
  } catch (error) {
    console.error("Error logging in:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
