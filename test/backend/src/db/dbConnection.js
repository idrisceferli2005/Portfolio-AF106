import mongoose from "mongoose";

mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log("Connected to MongoDB");
}).catch(
    console.log("not connected MongoDb")
)