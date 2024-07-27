import mongoose from "mongoose";
const db = mongoose.createConnection("mongodb://localhost:27017/onlinecourse");
db.once("open", () => console.log("Database successfully connected"));
db.on("error", (err) => console.log(`Database not connceted:${err.message}`));
export default db;
