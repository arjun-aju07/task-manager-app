import express from 'express'
import dotenv from 'dotenv'

import connectDB from './db/connect.js'

import tasks from './routes/tasks.js'

dotenv.config() // loads .env file to process.env

const app = express()

// middleware
app.use(express.json())

app.use('/api/v1/tasks', tasks)

const port = 3000

const init = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(3000, console.log(`Server is listening on port ${port}`)) // server is started only when the connection to DB is successful
    } catch (e) {
        console.log(e)
    }
}
init()
