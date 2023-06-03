import { S3 } from 'aws-sdk'

const bucketName = "filmbook-photo-uploads"
const accessKeyId = process.env.AWS_ACCESS_KEY_ID
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY
const region = process.env.AWS_REGION

const s3 = new S3({
    region,
    accessKeyId,
    secretAccessKey,
    signatureVersion: 'v4'
})

export const generateUploadURL = async () => {
    const imageName = "random-image-name.jpg" // TODO make unique

    const params = ({
        Bucket: bucketName,
        Key: imageName,
        Expires: 60 // time url is valid for
    })

    const uploadURL = await s3.getSignedUrlPromise('putObject', params)
    return uploadURL
}

// export const fetchFileURL = async (filePath: string) => {
//     const fileURL = await s3.getUrl
// }