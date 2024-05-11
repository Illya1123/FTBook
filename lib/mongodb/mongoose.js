import mongoose from "mongoose";

let isConnected = false; // track connection status

export const connectToDB = async () => {
    mongoose.set("strictQuery", true);

    try {
        if (isConnected) {
            console.log('MongoDB is already connected');
            return;
        }

        await mongoose.connect(process.env.MONGODB_URL, {
            dbName: "test",
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        isConnected = true;
        console.log('MongoDB is connected');
    } catch (error) {
        isConnected = false;
        console.log('MongoDB connection error:', error);
    }
};
