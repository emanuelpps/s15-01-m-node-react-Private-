import dotenv from 'dotenv'
import mongoose from 'mongoose'
import Server from "./server.js"
dotenv.config()

try {
    await mongoose.connect(
        // process.env.MONGO_URI, {
        // dbName: process.env.MONGO_DBNAME}
        'mongodb://127.0.0.1:27017/indiezone', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    )
    console.log('🆗 Database connected!')
    const app = new Server()
    app.listen()
} catch (err) {
    console.log(`⛔ Error while trying to connect to the DB. \nDetails: ${err.message}`)
}
