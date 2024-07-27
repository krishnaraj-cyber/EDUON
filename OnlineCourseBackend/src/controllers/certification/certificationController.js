// // controllers/certificationController.js
// import Certification from "../../models/CertificationModel.js";
// import User from "../../models/UserModel.js";

// export const generateCertificate = async (req, res) => {
//   try {
//     const { userId, courseId } = req.body;

//     // Check if user exists
//     const user = await User.findById(userId);
//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     // Check if certification already exists
//     const existingCertification = await Certification.findOne({ userId, courseId });
//     if (existingCertification) {
//       return res.status(400).json({ message: "Certification already exists for this user and course" });
//     }

//     // Generate a unique certificate number
//     const certificateNumber = `CERT-${Date.now()}-${userId.substr(-4)}`;

//     // Create new certification
//     const newCertification = new Certification({
//       userId,
//       courseId,
//       certificateNumber,
//     });

//     await newCertification.save();

//     res.status(201).json({
//       message: "Certification generated successfully",
//       certification: newCertification,
//     });
//   } catch (error) {
//     res.status(500).json({ message: "Error generating certification", error: error.message });
//   }
// };

// export const getUserCertifications = async (req, res) => {
//   try {
//     const { userId } = req.params;

//     const certifications = await Certification.find({ userId });

//     res.status(200).json(certifications);
//   } catch (error) {
//     res.status(500).json({ message: "Error fetching certifications", error: error.message });
//   }
// };