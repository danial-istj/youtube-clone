import dotenv from 'dotenv'
import connectDB from './db/index.js';
import { app } from './app.js';

dotenv.config({ path: './env' })

connectDB()
    .then(() => {
        app.listen(process.env.port || 8000, () => {
            console.log(`\n Server is running at port ${process.env.port || 8000}`)
        })
    })
    .catch((err) => { console.error("MONGODB connection failed", err) })







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

