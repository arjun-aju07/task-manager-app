import express from 'express'
import dotenv from 'dotenv'

import connectDB from './db/connect.js'

// middleware
import errorHandler from './middleware/error-handler.js'
import notFound from './middleware/not-found.js'

// routes
import tasks from './routes/tasks.js'

dotenv.config() // loads .env file to process.env

const app = express()

// middleware
app.use(express.json())

app.use('/api/v1/tasks', tasks)

// handles not found path
app.use(notFound)

// error handler
app.use(errorHandler)

const port = process.env.PORT ?? 3000

const init = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Server is listening on port ${port}`)) // server is started only when the connection to DB is successful
    } catch (e) {
        console.log(e)
    }
}
init()

// https://www.youtube.com/watch?v=yln_CffenYw // deploying ref