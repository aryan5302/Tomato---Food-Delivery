import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://aryanrsmtbca:05032002@cluster0.rxabohn.mongodb.net/food-del"
    )
    .then(() => console.log("DB Connected"));
};
