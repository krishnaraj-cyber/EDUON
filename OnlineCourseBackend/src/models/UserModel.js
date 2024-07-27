import mongoose from "mongoose";
import db from "../config/db/db.js";

const UserSchema = mongoose.Schema(
  {
    Email: String,
    Password: String,
    OTP: String,
    Role: { type: String, default: "user" },
    User_Status: { type: String, default: "Active" },
    Username: String,
    MobileNumber: String,
    isAdmin: { type: Boolean, default: false },

    // completedCourses: [{ type: String }],
    videoProgress: { type: Map, of: Boolean }, 
  },
  { timestamps: true }
);
const User = db.model("users", UserSchema);
export default User;
