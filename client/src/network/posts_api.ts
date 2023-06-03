import axios from "axios"
import { Post } from "../models/post"

// Fetch posts

export async function fetchPosts(): Promise<Post[]> {
    const response = await axios('/api/posts')
    return response.data
}

// Fetch one post
export async function fetchPost(postId: string): Promise<Post> {
    const response = await axios('/api/posts/' + postId)
    return response.data
}

// Create posts

export interface PostInput {
    caption?: string,
    imageUrl?: string
}

export async function createPost(post: PostInput): Promise<Post> {
    const response = await axios.post('/api/posts', post)
    return response.data
}

// Delete posts

export async function deletePost(postId: string) {
    await axios.delete('/api/posts/' + postId)
}