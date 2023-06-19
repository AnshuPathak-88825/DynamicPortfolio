import mongoose from "mongoose";
export const connectDatabase = () => {
    const db_link =process.env.MONGO_URI;
  mongoose
    .connect(db_link)
    .then(() => {
      console.log("DB connected ....");
    })
    .catch((err) => {
      console.log(err);
    });
};
