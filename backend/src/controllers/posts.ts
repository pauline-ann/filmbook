import { RequestHandler } from "express"
import PostModel from '../models/post'
import createHttpError from "http-errors"
import mongoose from "mongoose"

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
        if (!mongoose.isValidObjectId(postId)) {
            throw createHttpError(400, 'Invalid post id.')
        }

        const post = await PostModel.findById(postId).exec()

        if (!post) {
            throw createHttpError(404, "Post not found.")
        }

        res.status(200).json(post)
    }
    catch (error) {
        next(error)
    }
}

interface CreatePostBody {
    fileName?: string,
    file?: {
        data: Buffer,
        contentType: string
    }
    caption?: string
}

export const createPost: RequestHandler<unknown, unknown, CreatePostBody, unknown> = async (req, res, next) => {
    const file = req.body.file
    const fileName = req.body.fileName
    const caption = req.body.caption

    try {
        // TODO
        // if (!file || !fileName) {
        //     throw createHttpError(400, "Post must have an image.")
        // }

        const newPost = await PostModel.create({
            caption: caption
        })

        res.status(201).json(newPost)
    }
    catch (error) {
        next(error)
    }
}