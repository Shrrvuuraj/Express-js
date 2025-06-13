import mongoose from "mongoose";

export const connectDB = async () => {
  const mongodb_Url =
    "mongodb+srv://shravan:12345678901@cluster0.sb7gsjp.mongodb.net/express";

  await mongoose.connect(mongodb_Url).then(() => {
    console.log("Database Conneted");
  });
};
