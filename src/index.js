import dotenv from 'dotenv'
import express from 'express'
import connectDB from './db/index.js';

dotenv.config({ path: './env' })
connectDB()







// const app = express();

// ; (async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on("error", (err) => {
//             console.error(err)
//         })
//         app.listen(`${process.env.PORT}`)

//     } catch (err) {
//         console.error(err)
//         throw new err
//     }
// })()

