require("dotenv").config()
require("express-async-errors")


const cors = require("cors")

const express = require("express")
const app = express()

const connectDB = require("./db/connect")

// To parse json
app.use(express.json())

app.use(cors())
// app.use(cors({
//     origin: 'http://localhost:3000',
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     // credentials: true,
//     // allowedHeaders: ['Content-Type', 'Authorization']
// }))


const bookRouter = require("./routes/bookRoute")

app.use("/api/book", bookRouter)




const port = process.env.PORT || 4000

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, () => {
            console.log(`server listening on port ${port}...`)
        })
    } catch(error) {
        console.log(error);
    }
}

start()