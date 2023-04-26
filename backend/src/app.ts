import 'dotenv/config'
import express from 'express'

const app = express() // init express server

app.get('/', (req, res) => {
    res.send("Hello from the server!")
})

export default app