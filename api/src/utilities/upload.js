import { v2 as cloudinary } from "cloudinary";
import dotenv  from "dotenv";

dotenv.config()

cloudinary.config({
    // cloud_name: process.env.CLOUD_NAME,
    cloud_name: do9aerh2z,
    // api_key: process.env.API_KEY,
    api_key: 683629718316347,
    // api_secret: process.env.API_SECRET,
    api_secret: 'sgXOZ9m4fF6mdkOJWgqGtWsMYJk',
})

export default cloudinary;