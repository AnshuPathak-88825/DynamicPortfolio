import { app } from "./app.js";
import dotenv from "dotenv";
import {connectDatabase} from './config/database.js';
dotenv.config({ path: "./backend/config/config.env" });
connectDatabase();
const port = process.env.PORT;
// console.log(port);
app.listen(4000, () => {
  console.log(`Server is running on port :  ${port}`);
});
