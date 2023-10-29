import express from 'express'

const app = express()

app.get('/', (req, res) => {
    res.send('I am being invoked with a change')
    res.end()
})

const port = 3000
app.listen(3000, console.log(`Server is listening on port ${port}`))