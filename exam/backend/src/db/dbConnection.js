import mongoose from "mongoose";

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("conected mongodb")
}

).catch(() => {
    console.log("not connected mongo db")
})