import 'dotenv/config'
import express, { NextFunction, Request, Response } from 'express'
import postsRoutes from './routes/posts'
import morgan from 'morgan'

const app = express() // init express server

// middleware
app.use(morgan("dev")) // print log of endpoints being accessed

app.use(express.json()) // allow sending json to server

app.use('/api/posts', postsRoutes)

// handle access to nonexistent endpoint
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