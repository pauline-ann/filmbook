import axios from "axios"
import { PostRequest } from "../models/post"

async function createData(url: string, init?: PostRequest) {

    try {
        console.log(init)
        const response = await axios.post(url, init)
        return response.data
    }
    catch (error) {
        let errorMessage = 'Failed to create post.'
        if (error instanceof Error) {
            errorMessage = error.message
            throw Error(errorMessage)
        }
    }
}

export async function createPost(post: PostRequest): Promise<PostRequest> {
    const response = await createData('/api/posts', post)
    return response
}