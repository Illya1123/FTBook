import mongoose from "mongoose";

let isConnected = false // track connection status

export const connectToDB = async () => {
    mongoose.set('strickQuery', true)

    if (isConnected) {
        console.log('MongoDB is already connected')
        return
    }

    try{
        await mongoose.connect(process.env.MONGODB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })

        isConnected = true

        console.log('MongoDB is connected')
    }catch(error){
        console.log('MongoDB connection error:', error)
    }
}