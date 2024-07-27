// // models/CertificationModel.js
// import mongoose from "mongoose";
// import db from "../config/db/db.js";

// const CertificationSchema = mongoose.Schema({
//   userId: { type: mongoose.Schema.Types.ObjectId, ref: 'users', required: true },
//   courseId: { type: String, required: true },
//   completionDate: { type: Date, default: Date.now },
//   certificateNumber: { type: String, unique: true, required: true },
// }, { timestamps: true });

// const Certification = db.model("certifications", CertificationSchema);
// export default Certification;