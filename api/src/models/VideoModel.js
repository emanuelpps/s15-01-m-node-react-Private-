import mongoose from "mongoose"

const videoCollection = 'videos'

const videoSchema = new mongoose.Schema({
    idCloudinary:{
        type: String,
    },
    url:{
        type: String
    },
    created_at:{
        type:Date,
        default: Date.now,
    },
    description:{
        type: String,
        required: true,
    },
    title:{
        type: String,
        required: true,
    }
});
mongoose.set("strictQuery", false);
const videoModel = mongoose.model(videoCollection, videoSchema)

export default videoModel