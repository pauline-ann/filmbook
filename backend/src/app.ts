import 'dotenv/config'
import express, { NextFunction, Request, Response } from 'express'
import postsRoutes from './routes/posts'
import s3Routes from './routes/s3'
import morgan from 'morgan'
import createHttpError, { isHttpError } from 'http-errors'

const app = express() // init express server

// middleware
app.use(morgan("dev")) // print log of endpoints being accessed

app.use(express.json()) // allow sending json to server

app.use('/api/posts', postsRoutes)

app.use('/api/s3', s3Routes)

// handle access to nonexistent endpoint
app.use((req, res, next) => {
    next(createHttpError(404, "Endpoint not found"))
})

// error handler
// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((error: unknown, req: Request, res: Response, next: NextFunction) => {
    console.error(error)
    let errorMessage = "An unknown error occurred."
    let statusCode = 500
    if (isHttpError(error)) {
        statusCode = error.status
        errorMessage = error.message
    }
    res.status(statusCode).json({ error: errorMessage })
})

export default app