import axios from "axios"
import { Post } from "../models/post"

export interface PostInput {
    caption?: string
}

async function createData(url: string, init?: PostInput) {

    try {
        const response = await axios.post(url, init)
        return response.data
    }
    catch (error) {
        let errorMessage = 'Failed to create post.'
        if (error instanceof Error) {
            errorMessage = error.message
        }
        throw Error(errorMessage)
    }
}

export async function createPost(post: PostInput): Promise<Post> {
    const response = await createData('/api/posts', post)
    return response
}