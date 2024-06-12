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
    },
    genre: {
        type: String,
        enum: [
            'drama', 
            'suspenso', 
            'terror', 
            'musical', 
            'fantasia', 
            'comedia', 
            'documental', 
            'aventura',
            'ciencia ficcion',
            'animacion',
            'accion'
        ],
        required: true,
    },
    rating: {
        type: Number,
        default: 0,
    },
    videoLength: {
        hours: Number,
        minutes: Number,
        seconds: Number,
    },
    releaseDate: {
        type: Date,
    },
    cast: {
        type: mongoose.Schema.Types.Array,
        default: [],
    },
    views: {
        type: Number,
        default: 0,
    },
    videoType: {
        type: String,
        enum: ['cortometraje', 'pelicula', 'serie'],
    }
});
mongoose.set("strictQuery", false);
const videoModel = mongoose.model(videoCollection, videoSchema)

export default videoModel