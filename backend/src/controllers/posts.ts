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
        contentType: string,
    }
    caption?: string,
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

interface UpdatePostParams {
    postId: string,
}

interface UpdatePostBody {
    caption?: string,
}

export const updatePost: RequestHandler<UpdatePostParams, unknown, UpdatePostBody, unknown> = async (req, res, next) => {
    const postId = req.params.postId
    const newCaption = req.body.caption

    try {
        if (!mongoose.isValidObjectId(postId)) {
            throw createHttpError(400, "Invalid post id.")
        }

        if (!newCaption) {
            throw createHttpError(400, "Post must have a caption.")
        }

        const post = await PostModel.findById(postId).exec()

        if (!post) {
            throw createHttpError(404, "Post not found.")
        }

        post.caption = newCaption

        const updatedPost = await post.save()

        res.status(200).json(updatedPost)
    } catch (error) {
        next(error)
    }
}

export const deletePost: RequestHandler = async (req, res, next) => {
    const postId = req.params.postId

    try {
        if (!mongoose.isValidObjectId(postId)) {
            throw createHttpError(400, "Invalid post id.")
        }

        const post = await PostModel.findById(postId).exec()

        if (!post) {
            throw createHttpError(404, "Post not found.")
        }

        await post.deleteOne()

        res.sendStatus(204)
    } catch (error) {
        next(error)
    }
}