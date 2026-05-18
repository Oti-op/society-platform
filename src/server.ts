import express from 'express'

const app = express()
app.use(express.json())
const port = 3000

app.get('/', (req, res) => {
    res.send('Society platform API')
})

app.get('/events', (req, res) => {
    res.send('list of events')
})


app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})

