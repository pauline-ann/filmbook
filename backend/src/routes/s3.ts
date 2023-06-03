import express from 'express'
import { getSignedUrl } from '../controllers/s3'

const router = express.Router() // set endpoints onto router

router.get('/', getSignedUrl)

export default router