import 'dotenv/config'
import express, { NextFunction, Request, Response } from 'express'
import PostModel from "./models/post"

const app = express() // init express server

app.get('/', async (req, res, next) => {
    try {
        const posts = await PostModel.find().exec()
        res.status(200).json(posts)
    }
    catch (error) {
        next(error)
    }
})

// middleware for handling access to nonexistent endpoint
app.use((req, res, next) => {
    // TODO res.status(404)
    next(Error("Endpoint not found."))
})

// error handler
// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((error: unknown, req: Request, res: Response, next: NextFunction) => {
    console.error(error)
    let errorMessage = "An unknown error occurred."
    if (error instanceof Error) {
        errorMessage = error.message
    }
    res.status(500).json({ error: errorMessage })
})

export default app