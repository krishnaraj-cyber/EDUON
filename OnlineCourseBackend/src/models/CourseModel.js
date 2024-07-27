import mongoose from "mongoose";
import db from "../config/db/db.js";

const VideoSchema = mongoose.Schema({
    Email: { type: String, required: true },
    title: { type: String, required: true },
    videoUrl: { type: String, required: true },
    completed: { type: Boolean, default: false },
});

const CourseSchema = mongoose.Schema({
    name: { type: String, required: true },
    videos: [VideoSchema],
    courseId: { type: String, required: true },
});

const Course = db.model("courses", CourseSchema);
export default Course;
