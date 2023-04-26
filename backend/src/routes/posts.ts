import express from 'express'
import { createPost, getPost, getPosts, updatePost } from '../controllers/posts'

const router = express.Router() // set endpoints onto router

router.get('/', getPosts)

router.get('/:postId', getPost)

router.post('/', createPost)

router.patch('/:postId', updatePost)

export default router