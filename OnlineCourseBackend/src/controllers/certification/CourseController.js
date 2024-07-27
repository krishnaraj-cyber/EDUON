import User from "../../models/UserModel.js";
import Course from "../../models/CourseModel.js";
import jsPDF from 'jspdf';

// Mark video as completed
export const markVideoComplete = async (req, res) => {
  const { email, courseId, videoIndex } = req.body;
  try {
    const user = await User.findById( {Email: email});
    if (!user) return res.status(404).json({ message: "User not found" });

    // Update video progress
    user.videoProgress.set(`${courseId}.${videoIndex}`, true);
    await user.save();

    res.json({ message: "Video marked as complete" });
  } catch (error) {
    res.status(500).json({ message: "Error marking video complete", error });
  }
};

// Generate certificate
export const generateCertificate = async (req, res) => {

  //  // Handle CORS preflight request if necessary
  //  if (req.method === 'OPTIONS') {
  //   return res.status(200).json(); // Allow the request
  // }

  // // Validate request body
  // if (!req.body || !req.body.email || !req.body.courseId) {
  //   return res.status(400).json({ message: "Missing required fields in request body" });
  // }


  const { email, courseId } = req.body;
  if (!email || !courseId) {
    return res.status(400).json({ message: 'Missing required fields: email, courseId' });
  }
  console.log("Request Payload:", req.body);
  try {
    const user = await User.findOne({ Email: email });
    const course = await Course.findById(courseId);

    if (!user) return res.status(404).json({ message: "User not found" });
    if (!course) return res.status(404).json({ message: "Course not found" });
    console.log("User:", user);
    console.log("Course:", course);

    // Check if all videos are completed
    const allVideosCompleted = course.videos.every((_, index) => user.videoProgress.get(`${courseId}.${index}`));

    if (allVideosCompleted) {
       // Generate the PDF
    const doc = new jsPDF();
    doc.text('Certificate of Completion', 14, 15);
    doc.text(`Congratulations, ${user.name}!`, 14, 25);
    doc.text(`You have successfully completed the ${course.name} course.`, 14, 35);

    // Add more customization and data as needed

    // Save the PDF
    const pdfBlob = doc.output('blob');
    const blobUrl = URL.createObjectURL(pdfBlob);


      res.json({ message: "Certificate generated", certificateUrl: blobUrl });
    } else {
      res.status(403).json({ message: "Complete all videos to unlock your certificate!" });
    }
  } catch (error) {
    console.error("Error generating certificate:", error);
    res.status(500).json({ message:'An error occurred while generating the certificate', error: error.message  });
  }
};
