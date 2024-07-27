import bcrypt from "bcrypt";
import User from "../../models/UserModel.js";
import sendMail from "../../services/mailservice.js";

export const register = async (req, res) => {
  try {
    const { Email, Password , Username, MobileNumber} = req.body;
    console.log(req.body);
    const findUser = await User.findOne({ Email });
    if (!findUser) {
      const { otp } = await sendMail({ Email, recipient: Email });
      const hashPassword = await bcrypt.hash(Password, 10);
      console.log("Generated OTP:", otp);
      const newUser = new User({ 
        Email,
        Password: hashPassword,
        OTP: otp,
        Username,
        MobileNumber,
        isAdmin: Email === process.env.ADMIN_EMAIL,
         });
      await newUser.save();
      res
        .status(200)
        .send({ message: "Successfully registered. OTP sent to your email." });
    } else {
      res.status(400).send({ message: "Email already exists" });
    }
  } catch (err) {
    console.error("Error registering user:", err);
    res.status(500).send({ message: "Internal server error" });
  }
};

export const verifyOTP = async (req, res) => {
  try {
    const { Email, OTP } = req.body;
    console.log("Received Email:", Email);
    console.log("Received OTP:", OTP);
    const user = await User.findOne({ Email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    if (user.OTP !== OTP) {
      return res.status(400).json({ message: "Invalid OTP" });
    }
    if (!user.OTP) {
      return res.status(400).json({ message: "OTP already verified" });
    }
    user.OTP = user.OTP;
    await user.save();
    res.status(200).json({ message: "OTP verified successfully" });
  } catch (error) {
    console.error("Error verifying OTP:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
