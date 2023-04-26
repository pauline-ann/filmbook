import app from './app'
import env from './util/validateEnv'
import mongoose from 'mongoose'

const port = env.PORT

// init connection to mongodb
const connectDB = async () => {

    await mongoose.connect(env.MONGO_CONNECTION_STRING)
        .then(() => {
            console.log('Mongoose connected.')

            // start server
            app.listen(port, () => {
                console.log(`Server running on port: ${port}`)
            })
        })
        .catch(console.error)
}
connectDB()