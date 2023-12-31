import { app } from "./app.js";
import dotenv from "dotenv";
import cloudinary from "cloudinary";
import { connectDatabase } from "./config/database.js";
dotenv.config({ path: "backend/config/config.env" });
console.log(process.env.PORT);
connectDatabase();
cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server is running on port :  ${port}`);
});
