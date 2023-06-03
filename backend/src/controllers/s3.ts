import { RequestHandler } from "express"
import { generateUploadURL } from '../s3'

// get secure url for s3
// TODO authenticate/authorize that user is able to upload images
export const getSignedUrl: RequestHandler = async (req, res, next) => {
    try {
        const url = await generateUploadURL()
        res.status(200).send({ url })
    }
    catch (error) {
        next(error)
    }
}
