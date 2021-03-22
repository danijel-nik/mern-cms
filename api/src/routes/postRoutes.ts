import express from 'express'
const postRoute = express.Router()
import { getPosts } from '../controllers/postController'

postRoute.get('/', getPosts)

export default postRoute