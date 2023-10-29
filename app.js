import express from 'express'

import tasks from './routes/tasks.js'

const app = express()

// middleware
app.use(express.json())

app.use('/api/v1/tasks', tasks)

const port = 3000
app.listen(3000, console.log(`Server is listening on port ${port}`))