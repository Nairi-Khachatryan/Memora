import mongoose from 'mongoose';

export const connectDb = async () => {
  const MONGO_URL = process.env.MONGO_URL;

  if (!MONGO_URL) {
    throw new Error('MONGO_URL is not defined in environment variables');
  }

  try {
    const conect = await mongoose.connect(MONGO_URL);
    console.log(`MongoDb Connected: ${conect.connection.host}`);
  } catch (error) {
    console.log(error, 'error');
    process.exit(1); // 1 exit code means failure, 0 means success
  }
};

export const disconnectDb = async () => {
  await mongoose.disconnect();
};
