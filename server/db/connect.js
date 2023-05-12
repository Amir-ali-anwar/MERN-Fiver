import mongoose from 'mongoose'

const connectDB = (url) => {
  try {
      mongoose.set("strictQuery", false);
      mongoose.connect(url,);
      console.log('MongoDb connected');
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

export default connectDB;
