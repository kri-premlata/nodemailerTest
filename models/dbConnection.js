const mongoose = require("mongoose");

exports.connectDB = async () => {
  try {
   const conn = await mongoose.connect(process.env.MONGO_URL);
   console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log("DB ERROR - ",error.message);
  }
};
