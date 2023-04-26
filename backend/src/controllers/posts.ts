import { RequestHandler } from "express"
import PostModel from '../models/post'

export const getPosts: RequestHandler = async (req, res, next) => {
    try {
        const posts = await PostModel.find().exec()
        res.status(200).json(posts)
    }
    catch (error) {
        next(error)
    }
}

export const getPost: RequestHandler = async (req, res, next) => {
    const postId = req.params.postId

    try {
        const post = await PostModel.findById(postId).exec()
        res.status(200).json(post)
    }
    catch (error) {
        next(error)
    }
}

export const createPost: RequestHandler = async (req, res, next) => {
    const caption = req.body.caption

    try {
        const newPost = await PostModel.create({
            caption: caption
        })

        res.status(201).json(newPost)
    }
    catch (error) {
        next(error)
    }
}