import axios from "axios"

const config = {
    headers: {
        "Content-Type": "multipart/form-data"
    }
}

// Get signed url

export const fetchSignedUrl = async () => {
    const { data } = await axios.get('/api/s3')
    return data
}

// Upload file to bucket

export const uploadToS3 = async (url: string, file: File) => {
    const response = await axios.put(url, file, config)
    return response
}
