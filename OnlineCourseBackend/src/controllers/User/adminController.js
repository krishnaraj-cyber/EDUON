import User from "../../models/UserModel.js";


export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({}, { Password: 0 }); // Exclude the Password field
    res.status(200).json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const updateUserStatus = async (req, res) => {
  try {
    const { userId, status } = req.body;
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { User_Status: status },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (error) {
    console.error("Error updating user status:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};