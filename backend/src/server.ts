import express from 'express'

const app = express() // init express server
const port = 5000

app.get('/', (req, res) => {
    res.send('helsdaslo')
})

// start server
app.listen(port, () => {
    console.log(`Server running on port: ${port}`)
})